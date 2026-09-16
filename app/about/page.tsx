import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 pb-16 pt-32">
        <div className="glass-panel rounded-[32px] p-8 md:p-12">
          <h1 className="font-serif text-5xl text-[#f3ead4]">About</h1>
          <p className="mt-6 text-sm leading-relaxed text-[#f6edd8]/90 md:text-base">
            temUKM adalah portal mahasiswa UIN Sulthan Thaha Saifuddin Jambi untuk
            menemukan Unit Kegiatan Khusus (UKK) dan Unit Kegiatan Mahasiswa (UKM)
            di kampus. Setiap kartu menampilkan ringkasan organisasi, dan tombol
            Gabung membuka kode QR menuju formulir atau grup komunikasi resmi.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#f6edd8]/90 md:text-base">
            Konten organisasi dikelola melalui dasbor internal agar informasi
            pendaftaran tetap mutakhir.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
