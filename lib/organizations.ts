import { SEED_ORGANIZATIONS } from "./seed";
import { getSupabaseBrowserClient } from "./supabase/client";
import type { Organization, OrganizationInput } from "./types";

const STORAGE_KEY = "temukm.organizations";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function sortOrgs(list: Organization[]) {
  return [...list].sort((a, b) => a.sort_order - b.sort_order);
}

export function readLocalOrganizations(): Organization[] {
  if (typeof window === "undefined") return SEED_ORGANIZATIONS;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ORGANIZATIONS));
    return SEED_ORGANIZATIONS;
  }
  try {
    const parsed = JSON.parse(raw) as Organization[];
    return sortOrgs(parsed);
  } catch {
    return SEED_ORGANIZATIONS;
  }
}

export function writeLocalOrganizations(list: Organization[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sortOrgs(list)));
  window.dispatchEvent(new Event("temukm:orgs-updated"));
}

export async function fetchOrganizations(): Promise<Organization[]> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return readLocalOrganizations();

  const { data, error } = await supabase
    .from("organizations")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) return readLocalOrganizations();
  return data as Organization[];
}

export async function upsertOrganization(input: OrganizationInput) {
  const now = new Date().toISOString();
  const record: Organization = {
    id: input.id ?? crypto.randomUUID(),
    slug: input.slug || slugify(input.name),
    name: input.name,
    category: input.category,
    summary: input.summary,
    description: input.description,
    cover_image_url: input.cover_image_url,
    qr_image_url: input.qr_image_url,
    join_url: input.join_url,
    sort_order: input.sort_order,
    created_at: now,
    updated_at: now,
  };

  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    const list = readLocalOrganizations();
    const index = list.findIndex((item) => item.id === record.id);
    if (index >= 0) {
      record.created_at = list[index].created_at;
      list[index] = record;
    } else {
      list.push(record);
    }
    writeLocalOrganizations(list);
    return record;
  }

  const { error } = await supabase.from("organizations").upsert(record);
  if (error) throw error;
  return record;
}

export async function deleteOrganization(id: string) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    writeLocalOrganizations(readLocalOrganizations().filter((item) => item.id !== id));
    return;
  }
  const { error } = await supabase.from("organizations").delete().eq("id", id);
  if (error) throw error;
}

export async function uploadMedia(file: File, folder: "covers" | "qr") {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  const ext = file.name.split(".").pop() || "png";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("media").upload(path, file, {
    upsert: true,
    contentType: file.type,
  });
  if (error) throw error;
  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
}
