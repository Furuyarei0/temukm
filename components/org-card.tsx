"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Organization } from "@/lib/types";

type Props = {
  org: Organization;
  onJoinDesktop: (org: Organization) => void;
};

export function OrgCard({ org, onJoinDesktop }: Props) {
  const [mode, setMode] = useState<"idle" | "detail" | "qr">("idle");
  const [isFinePointer, setIsFinePointer] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const sync = () => setIsFinePointer(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const expanded = !isFinePointer && mode !== "idle";

  const close = () => setMode("idle");

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={isFinePointer ? { y: -6, scale: 1.01 } : undefined}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="group relative h-36 overflow-hidden rounded-[28px] card-surface shadow-[0_10px_24px_rgba(40,24,8,0.18)] md:h-40"
        onClick={() => {
          if (!isFinePointer && mode === "idle") setMode("detail");
        }}
      >
        <img
          src={org.cover_image_url}
          alt=""
          className="org-photo absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3d2a16]/70 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#efe6c9]/80">{org.category}</p>
          <h3 className="font-serif text-lg text-[#f7f0de] drop-shadow">{org.name}</h3>
        </div>

        {isFinePointer ? (
          <div className="absolute inset-0 flex flex-col justify-end bg-[#3a2a18]/0 p-5 opacity-0 transition duration-300 group-hover:bg-[#3a2a18]/78 group-hover:opacity-100">
            <p className="text-sm leading-relaxed text-[#f6edd8]">{org.summary}</p>
            <button
              type="button"
              className="mt-4 w-fit rounded-full bg-[#efe6c9] px-4 py-1.5 text-sm font-medium text-[#4a3822]"
              onClick={(event) => {
                event.stopPropagation();
                onJoinDesktop(org);
              }}
            >
              Gabung
            </button>
          </div>
        ) : null}
      </motion.article>

      <AnimatePresence>
        {expanded ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button type="button" className="absolute inset-0 bg-[#2a1e12]/75" aria-label="Tutup" onClick={close} />
            <motion.div
              layoutId={org.id}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] bg-[#d7ccb0] text-[#3d2a16] shadow-2xl"
              initial={{ scale: 0.9, y: 24 }}
              animate={{ scale: mode === "qr" ? 1.04 : 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
            >
              {mode === "qr" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-10">
                  <img
                    src={org.qr_image_url}
                    alt={`QR Code ${org.name}`}
                    className="h-64 w-64 rounded-2xl bg-[#efe6c9] p-3"
                  />
                  <p className="mt-4 text-center text-sm">Pindai QR di tengah layar untuk mendaftar.</p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-6 rounded-full bg-[#4a3822] px-6 py-2 text-sm text-[#f6edd8]"
                  >
                    Kembali
                  </button>
                </div>
              ) : (
                <div>
                  <img src={org.cover_image_url} alt="" className="org-photo h-40 w-full object-cover" />
                  <div className="px-5 py-5">
                    <p className="text-xs uppercase tracking-[0.18em]">{org.category}</p>
                    <h3 className="font-serif text-2xl">{org.name}</h3>
                    <p className="mt-3 max-h-48 overflow-y-auto text-sm leading-relaxed">{org.description}</p>
                    <div className="mt-5 flex gap-3">
                      <button
                        type="button"
                        className="rounded-full bg-[#4a3822] px-5 py-2 text-sm text-[#f6edd8]"
                        onClick={() => setMode("qr")}
                      >
                        Gabung
                      </button>
                      <button type="button" className="rounded-full px-5 py-2 text-sm" onClick={close}>
                        Kembali
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
