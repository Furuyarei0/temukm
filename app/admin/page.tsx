"use client";

import { FormEvent, useEffect, useState } from "react";
import { uploadMedia } from "@/lib/organizations";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { useOrganizations } from "@/components/organizations-provider";
import type { Organization, OrganizationInput, OrgCategory } from "@/lib/types";

const LOCAL_ADMIN_KEY = "temukm.admin-local";

const emptyForm: OrganizationInput = {
  slug: "",
  name: "",
  category: "UKM",
  summary: "",
  description: "",
  cover_image_url: "",
  qr_image_url: "",
  join_url: "",
  sort_order: 10,
};

export default function AdminPage() {
  const { organizations, save, remove } = useOrganizations();
  const [session, setSession] = useState<"loading" | "guest" | "in">("loading");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState<Organization | null>(null);
  const [form, setForm] = useState<OrganizationInput>(emptyForm);
  const [busy, setBusy] = useState(false);
  const configured = isSupabaseConfigured();

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setSession(sessionStorage.getItem(LOCAL_ADMIN_KEY) === "1" ? "in" : "guest");
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ? "in" : "guest");
    });
    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next ? "in" : "guest");
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setError("Konfigurasi Supabase belum tersedia.");
      return;
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError) {
      setError("Email atau password Supabase salah.");
      return;
    }

    sessionStorage.removeItem(LOCAL_ADMIN_KEY);
  };

  const logout = async () => {
    const supabase = getSupabaseBrowserClient();
    if (supabase) await supabase.auth.signOut();
    sessionStorage.removeItem(LOCAL_ADMIN_KEY);
    setSession("guest");
  };

  const startEdit = (org?: Organization) => {
    if (org) {
      setEditing(org);
      setForm({
        id: org.id,
        slug: org.slug,
        name: org.name,
        category: org.category,
        summary: org.summary,
        description: org.description,
        cover_image_url: org.cover_image_url,
        qr_image_url: org.qr_image_url,
        join_url: org.join_url,
        sort_order: org.sort_order,
      });
      return;
    }
    setEditing(null);
    setForm({ ...emptyForm, sort_order: organizations.length + 1 });
  };

  const onUpload = async (file: File | undefined, field: "cover_image_url" | "qr_image_url") => {
    if (!file) return;
    setBusy(true);
    try {
      const url = await uploadMedia(file, field === "qr_image_url" ? "qr" : "covers");
      setForm((prev) => ({ ...prev, [field]: url }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengunggah berkas");
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await save({
        ...form,
        join_url: form.join_url || null,
        slug: form.slug,
      });
      startEdit();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan");
    } finally {
      setBusy(false);
    }
  };

  if (session === "loading") {
    return <p className="p-10 text-[#f6edd8]">Memuat…</p>;
  }

  if (session === "guest") {
    return (
      <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
        <form onSubmit={login} className="glass-panel w-full rounded-[28px] p-8 text-[#f6edd8]">
          <h1 className="font-serif text-4xl">Admin</h1>
          <p className="mt-2 text-sm text-[#f6edd8]/80">
            Masukkan password yang benar untuk mengakses dashboard.
          </p>
          <label className="mt-6 block text-sm">
            Email Supabase
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl bg-[#efe6c9] px-3 py-2 text-[#3d2a16]"
            />
          </label>
          <label className="mt-4 block text-sm">
            Password
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-[#efe6c9] px-3 py-2 pr-11 text-[#3d2a16]"
              />
              <button
                type="button"
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                onClick={() => setShowPassword((value) => !value)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-[#3d2a16]/70 transition hover:text-[#3d2a16]"
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
                    <path d="M3 3l18 18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.58 10.58A2 2 0 0013.42 13.42" strokeLinecap="round" />
                    <path d="M9.88 5.3A10.95 10.95 0 0112 5c4.04 0 7.48 2.29 9 7-1.13 2.7-3.08 4.66-5.36 5.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.61 6.61C4.63 7.86 3.2 9.47 2 12c1.52 4.71 5.38 7 10 7 1.68 0 3.27-.33 4.73-.92" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </label>
          {error ? <p className="mt-3 text-sm text-red-200">{error}</p> : null}
          <button type="submit" className="mt-6 w-full rounded-full bg-[#efe6c9] py-2 font-medium text-[#3d2a16]">
            Masuk
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-16 text-[#f6edd8]">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-4xl">Dashboard CMS</h1>
          <p className="text-sm text-[#f6edd8]/75">
            {configured ? "Tersambung ke Supabase (realtime)." : "Mode lokal — perubahan tersimpan di peramban ini."}
          </p>
        </div>
        <button type="button" onClick={logout} className="rounded-full bg-[#efe6c9] px-4 py-2 text-sm text-[#3d2a16]">
          Keluar
        </button>
      </div>

      <div className="glass-panel overflow-x-auto rounded-[24px] p-4">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-[#efe6c9]/80">
            <tr>
              <th className="p-2">Nama</th>
              <th className="p-2">Kategori</th>
              <th className="p-2">Urutan</th>
              <th className="p-2" />
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <tr key={org.id} className="border-t border-[#f6edd8]/10">
                <td className="p-2">{org.name}</td>
                <td className="p-2">{org.category}</td>
                <td className="p-2">{org.sort_order}</td>
                <td className="p-2 text-right">
                  <button type="button" className="mr-3 underline" onClick={() => startEdit(org)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="underline"
                    onClick={() => {
                      if (confirm(`Hapus ${org.name}?`)) void remove(org.id);
                    }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          onClick={() => startEdit()}
          className="mt-4 rounded-full bg-[#efe6c9] px-4 py-2 text-sm text-[#3d2a16]"
        >
          Tambah organisasi
        </button>
      </div>

      <form onSubmit={onSubmit} className="glass-panel mt-8 grid gap-4 rounded-[24px] p-6 md:grid-cols-2">
        <h2 className="font-serif text-2xl md:col-span-2">{editing ? "Edit data" : "Tambah data"}</h2>
        <Field label="Nama">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="field-input"
          />
        </Field>
        <Field label="Slug">
          <input
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="field-input"
          />
        </Field>
        <Field label="Kategori">
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as OrgCategory })}
            className="field-input"
          >
            <option value="UKK">UKK</option>
            <option value="UKM">UKM</option>
          </select>
        </Field>
        <Field label="Urutan">
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
            className="field-input"
          />
        </Field>
        <Field label="Ringkasan" className="md:col-span-2">
          <textarea
            required
            rows={2}
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            className="field-input"
          />
        </Field>
        <Field label="Deskripsi" className="md:col-span-2">
          <textarea
            required
            rows={6}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="field-input"
          />
        </Field>
        <Field label="URL foto sampul">
          <input
            value={form.cover_image_url}
            onChange={(e) => setForm({ ...form, cover_image_url: e.target.value })}
            className="field-input"
          />
          <input
            type="file"
            accept="image/*"
            className="mt-2 text-xs"
            onChange={(e) => void onUpload(e.target.files?.[0], "cover_image_url")}
          />
        </Field>
        <Field label="URL / unggah QR">
          <input
            value={form.qr_image_url}
            onChange={(e) => setForm({ ...form, qr_image_url: e.target.value })}
            className="field-input"
          />
          <input
            type="file"
            accept="image/*"
            className="mt-2 text-xs"
            onChange={(e) => void onUpload(e.target.files?.[0], "qr_image_url")}
          />
        </Field>
        <Field label="Tautan gabung" className="md:col-span-2">
          <input
            value={form.join_url ?? ""}
            onChange={(e) => setForm({ ...form, join_url: e.target.value })}
            className="field-input"
          />
        </Field>
        {error ? <p className="text-sm text-red-200 md:col-span-2">{error}</p> : null}
        <div className="md:col-span-2">
          <button
            disabled={busy}
            type="submit"
            className="rounded-full bg-[#efe6c9] px-6 py-2 text-sm font-medium text-[#3d2a16] disabled:opacity-60"
          >
            {busy ? "Menyimpan…" : "Simpan"}
          </button>
        </div>
      </form>
    </main>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm ${className}`}>
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}
