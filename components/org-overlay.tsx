"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Organization } from "@/lib/types";

type Props = {
  org: Organization | null;
  onClose: () => void;
};

export function OrgOverlay({ org, onClose }: Props) {
  useEffect(() => {
    if (!org) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [org, onClose]);

  return (
    <AnimatePresence>
      {org ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#2a1e12]/70 backdrop-blur-sm"
            aria-label="Tutup overlay"
            onClick={onClose}
          />
          <motion.article
            initial={{ scale: 0.94, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-[#f3ead4]/20 bg-[#5a4428]/90 p-6 text-[#f6edd8] shadow-2xl backdrop-blur-xl md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#e8d7b0]">{org.category}</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">{org.name}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#f3ead4]/90 md:text-[15px]">{org.description}</p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <img
                src={org.qr_image_url}
                alt={`QR Code ${org.name}`}
                className="h-52 w-52 rounded-2xl bg-[#efe6c9] p-3"
              />
              <p className="text-center text-xs text-[#e8d7b0]">
                Pindai QR untuk formulir pendaftaran atau grup komunikasi.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-[#efe6c9] px-6 py-2 text-sm font-medium text-[#4a3822]"
            >
              Kembali
            </button>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
