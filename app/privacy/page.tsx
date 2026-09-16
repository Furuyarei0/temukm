import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16 pt-32">
        <div className="glass-panel rounded-[32px] p-8 md:p-12">
          <h1 className="font-serif text-4xl text-[#f3ead4]">Privacy</h1>
          <p className="mt-6 text-sm leading-relaxed text-[#f6edd8]/90">
            temUKM tidak mengumpulkan data pribadi di halaman publik. Cookie
            peramban hanya digunakan untuk preferensi sesi administratif jika
            Anda masuk ke dasbor. Gambar dan tautan pihak ketiga (Unsplash, QR,
            media sosial) mengikuti kebijakan layanan masing-masing.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
