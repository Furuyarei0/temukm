"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { OrgCard } from "./org-card";
import { OrgOverlay } from "./org-overlay";
import { useOrganizations } from "./organizations-provider";
import type { Organization } from "@/lib/types";

export function OrgGrid() {
  const { organizations } = useOrganizations();
  const [selected, setSelected] = useState<Organization | null>(null);

  return (
    <section className="relative z-10 px-4 pb-16 md:px-10">
      <div className="glass-panel mx-auto max-w-5xl rounded-[36px] px-5 py-8 md:px-10 md:py-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            >
              <OrgCard org={org} onJoinDesktop={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>
      <OrgOverlay org={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
