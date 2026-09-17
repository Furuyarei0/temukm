"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  deleteOrganization,
  fetchOrganizations,
  upsertOrganization,
} from "@/lib/organizations";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { SEED_ORGANIZATIONS } from "@/lib/seed";
import type { Organization, OrganizationInput } from "@/lib/types";

type OrgContextValue = {
  organizations: Organization[];
  loading: boolean;
  save: (input: OrganizationInput) => Promise<void>;
  remove: (id: string) => Promise<void>;
  refresh: () => Promise<void>;
};

const OrgContext = createContext<OrgContextValue | null>(null);

export function OrganizationsProvider({ children }: { children: React.ReactNode }) {
  const [organizations, setOrganizations] = useState<Organization[]>(
    isSupabaseConfigured() ? [] : SEED_ORGANIZATIONS,
  );
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    const list = await fetchOrganizations();
    setOrganizations(list);
  };

  useEffect(() => {
    let cancelled = false;

    refresh()
      .catch(() => {
        if (!cancelled) setOrganizations(SEED_ORGANIZATIONS);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    const onLocal = () => {
      void refresh();
    };
    window.addEventListener("temukm:orgs-updated", onLocal);
    window.addEventListener("storage", onLocal);

    const supabase = getSupabaseBrowserClient();
    const channel = supabase
      ?.channel("organizations-live")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "organizations" },
        () => {
          void refresh();
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      window.removeEventListener("temukm:orgs-updated", onLocal);
      window.removeEventListener("storage", onLocal);
      if (channel && supabase) supabase.removeChannel(channel);
    };
  }, []);

  const value = useMemo<OrgContextValue>(
    () => ({
      organizations,
      loading,
      save: async (input) => {
        await upsertOrganization(input);
        await refresh();
      },
      remove: async (id) => {
        await deleteOrganization(id);
        await refresh();
      },
      refresh,
    }),
    [organizations, loading],
  );

  return <OrgContext.Provider value={value}>{children}</OrgContext.Provider>;
}

export function useOrganizations() {
  const ctx = useContext(OrgContext);
  if (!ctx) throw new Error("useOrganizations must be used within OrganizationsProvider");
  return ctx;
}
