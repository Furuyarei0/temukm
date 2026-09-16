"use client";

import Link from "next/link";
import { useState } from "react";

const instagramLinks = [
  { label: "adiitya_prtma", url: "https://www.instagram.com/adiitya_prtma?stkn=MWgzdTgzbzZlY3ljdA==" },
  { label: "k4ll.syt", url: "https://www.instagram.com/k4ll.syt?stkn=MXdjNWl0aDV6ZWthMg==" },
  { label: "alfaruqznn_", url: "https://www.instagram.com/alfaruqznn_?stkn=MTFpcm51bHg5bjdsag==" },
];

const linkedinLinks = [
  { label: "m-haikal-as-sayuti", url: "https://www.linkedin.com/in/m-haikal-as-sayuti-627bab422?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { label: "aditya-pratama", url: "https://www.linkedin.com/in/aditya-pratama-654602422?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { label: "ahmad-dzunnun-al-faruq", url: "https://www.linkedin.com/in/ahmad-dzunnun-al-faruq-9064793b1?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
];

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A4.8 4.8 0 1 1 7.2 13 4.8 4.8 0 0 1 12 8.2Zm0 2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 10.2ZM17.4 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M6.5 9H3.7v11.2h2.8Zm.2-4.1A1.7 1.7 0 0 0 5 3.2 1.7 1.7 0 0 0 3.3 5a1.7 1.7 0 0 0 1.7 1.7 1.6 1.6 0 0 0 1.7-1.8ZM20.3 20.2h-2.8v-5.5c0-1.5-.5-2.5-1.8-2.5a1.9 1.9 0 0 0-1.8 1.3 2.4 2.4 0 0 0-.1.9v5.8H11V9h2.7v1.5a3 3 0 0 1 2.6-1.6c1.9 0 3.9 1.2 3.9 4.4Z" />
    </svg>
  );
}

export function SiteFooter() {
  const [openMenu, setOpenMenu] = useState<"instagram" | "linkedin" | null>(null);

  return (
    <footer className="relative z-20 bg-[#3d3224] text-[#f0e6d0]">
      <div className="flex flex-col gap-6 px-6 py-8 md:flex-row md:items-start md:justify-between md:px-10">
        <p className="max-w-xs text-sm leading-relaxed">
          Jl. Jambi Ma. Bulian KM.16 Simpang Sungai
          <br />
          Duren Kab. Muaro Jambi.
        </p>
        <div className="relative flex items-center gap-4 self-end text-[#f0e6d0] md:self-start">
          <div className="relative">
            <button
              type="button"
              aria-label="Instagram profiles"
              onClick={() => setOpenMenu(openMenu === "instagram" ? null : "instagram")}
              className="hover:opacity-80"
            >
              <IconInstagram />
            </button>
            {openMenu === "instagram" ? (
              <div className="absolute right-0 top-full z-30 mt-2 w-64 rounded-2xl border border-[#f6edd8]/15 bg-[#2d251d] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                {instagramLinks.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-2 text-sm text-[#f6edd8] transition hover:bg-[#f6edd8]/10"
                  >
                    @{item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative">
            <button
              type="button"
              aria-label="LinkedIn profiles"
              onClick={() => setOpenMenu(openMenu === "linkedin" ? null : "linkedin")}
              className="hover:opacity-80"
            >
              <IconLinkedIn />
            </button>
            {openMenu === "linkedin" ? (
              <div className="absolute right-0 top-full z-30 mt-2 w-72 rounded-2xl border border-[#f6edd8]/15 bg-[#2d251d] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                {linkedinLinks.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-2 text-sm text-[#f6edd8] transition hover:bg-[#f6edd8]/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <p className="px-6 pb-6 text-xs leading-relaxed text-[#e8dcc4] md:px-10">
        © 2026 temUKM, Inc.{" "}
        <Link href="/terms" className="legal-link">
          Terms
        </Link>{" "}
        <Link href="/privacy" className="legal-link">
          Privacy
        </Link>{" "}
        Manage cookies Do not share my personal information All right reserved
      </p>
    </footer>
  );
}
