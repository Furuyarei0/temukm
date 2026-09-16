import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16 pt-32">
        <div className="glass-panel rounded-[32px] p-8 md:p-12">
          <h1 className="font-serif text-4xl text-[#f3ead4]">Terms</h1>
          <p className="mt-6 text-sm leading-relaxed text-[#f6edd8]/90">
            Portal temUKM menyediakan informasi organisasi kemahasiswaan UIN STS
            Jambi. Pendaftaran ke masing-masing UKK/UKM mengikuti ketentuan unit
            terkait. Pengguna bertanggung jawab atas data yang dikirim melalui
            tautan atau QR pendaftaran pihak ketiga.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
