import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 pb-16 pt-32">
        <div className="glass-panel rounded-[32px] p-8 md:p-12">
          <h1 className="font-serif text-5xl text-[#f3ead4]">Kontak</h1>
          <p className="mt-6 text-sm leading-relaxed text-[#f6edd8]/90 md:text-base">
            Kampus UIN STS Jambi
            <br />
            Jl. Jambi Ma. Bulian KM.16 Simpang Sungai Duren
            <br />
            Kab. Muaro Jambi
          </p>
          <p className="mt-6 text-sm leading-relaxed text-[#f6edd8]/90 md:text-base">
            Untuk pembaruan data UKK/UKM, pengurus dapat menghubungi pengelola
            portal melalui WhatsApp.
          </p>
          <a
            href="https://wa.me/qr/R7PIDTBT7PT2P1"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#f3ead4] px-5 py-3 text-sm font-semibold text-[#3d2a16] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3ead4]"
          >
            Hubungi melalui WhatsApp
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
