import type { Organization } from "./types";

function qr(data: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=360x360&color=4a3a28&bgcolor=f3ead6&data=${encodeURIComponent(data)}`;
}

const now = "2026-01-01T00:00:00.000Z";

export const SEED_ORGANIZATIONS: Organization[] = [
  {
    id: "11111111-1111-4111-8111-111111111001",
    slug: "pramuka-racana",
    name: "UKK Pramuka",
    category: "UKK",
    summary:
      "Racana Sulthan Thaha dan Sri Soedewi — pendidikan kepanduan, kepemimpinan, dan pengabdian masyarakat.",
    description:
      "Gerakan Pramuka di UIN STS Jambi terhimpun dalam Pangkalan Gugusdepan Muaro Jambi 02.581 (Putra) dan 02.582 (Putri) dengan nama Racana Sulthan Thaha dan Sri Soedewi. Organisasi ini menjalankan pendidikan kepanduan perguruan tinggi yang menekankan pada pengembangan kepemimpinan, manajemen organisasi kepramukaan, serta pengabdian masyarakat. Sistem tata kelola internal Racana dilaksanakan secara mandiri melalui instrumen Musyawarah Ambalan dan Musyawarah Racana guna menetapkan kepengurusan Dewan Racana serta Garis-Garis Besar Haluan Kerja. Program kerja paling strategis dari unit ini adalah Lomba Susur Halang Rintang Pramuka (LSHRP), sebuah ajang kompetisi ketangkasan dan mental bertingkat regional yang melibatkan puluhan pangkalan Pramuka Penegak se-Sumatera Bagian Selatan. Di samping kompetisi regional, Racana UIN STS Jambi secara aktif terlibat dalam program pengabdian masyarakat global seperti Messengers of Peace dan kegiatan kepramukaan nasional.",
    cover_image_url:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/pramuka-racana"),
    join_url: "https://temukm.local/gabung/pramuka-racana",
    sort_order: 1,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111002",
    slug: "ksr-pmi",
    name: "UKK KSR PMI",
    category: "UKK",
    summary:
      "Korps Sukarela Palang Merah Indonesia — pelayanan kemanusiaan, P3K, dan tanggap darurat.",
    description:
      "UKK Korps Sukarela Palang Merah Indonesia Perguruan Tinggi (UKK KSR PMI PT) UIN STS Jambi berfungsi sebagai pilar utama pelayanan kemanusiaan, manajemen pertolongan pertama, dan tanggap darurat bencana di lingkungan kampus maupun masyarakat luas. Anggota KSR PMI dibentuk melalui Pendidikan dan Pelatihan Dasar (Diklatsar) intensif berbasis kurikulum standar PMI yang mencakup materi medis dasar, pemindahan korban, manajemen dapur umum, serta psikososial. Unit ini mengelola agenda medis pada seluruh upacara formal universitas, memfasilitasi kegiatan donor darah massal secara berkala, dan bertindak sebagai regu penyelamat saat terjadi bencana alam. Di tingkat kewilayahan, UKK KSR PMI UIN STS Jambi memegang posisi kunci dalam Forum Komunikasi (Forkom) KSR PMI Perguruan Tinggi se-Provinsi Jambi dan berkoordinasi langsung dengan Markas PMI Daerah.",
    cover_image_url:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/ksr-pmi"),
    join_url: "https://temukm.local/gabung/ksr-pmi",
    sort_order: 2,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111003",
    slug: "menwa-mahwira",
    name: "UKK Menwa",
    category: "UKK",
    summary:
      "Menwa Batalyon 002 / Mahawira — wawasan kebangsaan, bela negara, dan kedisiplinan.",
    description:
      "Resimen Mahasiswa UIN STS Jambi beroperasi dalam struktur Menwa Batalyon 002 / Mahawira yang berada di bawah naungan Komando Resimen Mahasiswa Sultan Thaha Jambi. Menwa difungsikan sebagai wadah pembinaan wawasan kebangsaan, kesadaran bela negara, serta pembentukan kedisiplinan fisik dan mental mahasiswa. Calon anggota Menwa diwajibkan menyelesaikan Pendidikan dan Latihan Dasar (Diklatsar) Yudha yang dilaksanakan bekerja sama dengan Satuan TNI/Polri, menguji kemampuan navigasi darat, taktik lapangan, dan ketahanan fisik. Di dalam kampus, Batalyon 002 bertugas mendukung keandalan protokoler universitas, pengamanan kegiatan akademik berskala besar, serta membina kepemimpinan berintegritas. Para alumni Menwa UIN STS Jambi mencatatkan rekam jejak prestasi hingga tingkat nasional, termasuk penerimaan beasiswa pendidikan dari Kementerian Pertahanan Republik Indonesia.",
    cover_image_url:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/menwa-mahwira"),
    join_url: "https://temukm.local/gabung/menwa-mahwira",
    sort_order: 3,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111004",
    slug: "kopma-g2",
    name: "UKK KOPMA G2",
    category: "UKK",
    summary:
      "Koperasi Mahasiswa Generasi 2 — wirausaha, ritel, dan tata kelola bisnis mahasiswa.",
    description:
      "Koperasi Mahasiswa G2 (Generasi 2) UIN STS Jambi merupakan badan usaha milik mahasiswa berbadan hukum koperasi yang mengombinasikan pendidikan kewirausahaan teoritis dengan pengelolaan bisnis praktis. KOPMA G2 bertindak sebagai wahana pembelajaran ekonomi kerakyatan, manajemen keuangan, ritel, serta tata kelola bisnis bagi para anggotanya. Unit ini mengoperasikan berbagai unit usaha, seperti toko kebutuhan mahasiswa, penyediaan atribut kampus, usaha jasa percetakan, serta kemitraan strategis dengan para pelaku UMKM di sekitar wilayah Muaro Jambi. Struktur pengambilan keputusan tertinggi KOPMA G2 berada pada Rapat Anggota Tahunan (RAT) yang berwenang menetapkan Pembagian Sisa Hasil Usaha (SHU), menilai pertanggungjawaban pengurus, serta merumuskan arah ekspansi bisnis koperatif.",
    cover_image_url:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/kopma-g2"),
    join_url: "https://temukm.local/gabung/kopma-g2",
    sort_order: 4,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111005",
    slug: "mapala-sutha",
    name: "UKM MAPALA SUTHA",
    category: "UKM",
    summary:
      "Mahasiswa Pecinta Alam Sutha — alam terbuka, konservasi, dan aksi kemanusiaan.",
    description:
      "MAPALA SUTHA merupakan organisasi kemahasiswaan berorientasi pada kegiatan kebebasan alam terbuka, pelestarian lingkungan hidup, serta aksi kemanusiaan. Keterampilan teknis di MAPALA SUTHA terbagi dalam beberapa divisi keahlian spesifik, meliputi Divisi Gunung Hutan (Mountaineering), Panjat Tebing (Rock Climbing), Susur Goa (Caving), Olahraga Arus Deras (Rafting), dan Divisi Lingkungan Hidup. Proses pengkaderan diawali dengan Diklatsar fisik dan mental di alam terbuka untuk membentuk ketahanan fisik serta kepekaan ekologis anggota. Selain ekspedisi petualangan, MAPALA SUTHA aktif melakukan gerakan konservasi seperti reboisasi kawasan kampus, kampanye iklim, serta menerjunkan Tim Satuan Tugas (Satgas) Penanggulangan Bencana guna membantu proses rehabilitasi wilayah terdampak bencana alam di lapangan.",
    cover_image_url:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/mapala-sutha"),
    join_url: "https://temukm.local/gabung/mapala-sutha",
    sort_order: 5,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111006",
    slug: "geska",
    name: "UKM GESKA",
    category: "UKM",
    summary:
      "Gerakan Seni Kampus — musik, tari, teater, dan rupa dengan jejak PEKSIMIDA/PEKSIMINAS.",
    description:
      "UKM Gerakan Seni Kampus (GESKA) berfungsi sebagai pusat eksplorasi, pembinaan, dan penyaluran bakat mahasiswa di bidang kesenian. Struktur pembinaan seni di GESKA terbagi menjadi empat divisi utama, yaitu Divisi Seni Musik, Divisi Seni Tari, Divisi Seni Teater, dan Divisi Seni Rupa/Kaligrafi. GESKA berperan penting dalam mengintegrasikan nilai-nilai seni budaya Melayu Jambi dengan estetika Islam. Keberadaan GESKA berkontribusi secara signifikan terhadap pencapaian prestasi universitas dalam kompetisi seni nasional, seperti Pekan Seni Mahasiswa Daerah (PEKSIMIDA) dan Pekan Seni Mahasiswa Nasional (PEKSIMINAS), di mana kontingen seni UIN STS Jambi berhasil meraih gelar juara umum tingkat provinsi.",
    cover_image_url:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/geska"),
    join_url: "https://temukm.local/gabung/geska",
    sort_order: 6,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111007",
    slug: "cinema-sutha",
    name: "UKM CINEMA SUTHA",
    category: "UKM",
    summary:
      "Rumah produksi kampus — sinematografi, film, editing, dan broadcasting sejak 2017/2018.",
    description:
      'Didirikan pada kisaran tahun 2017/2018, UKM CINEMA SUTHA berfokus pada pengembangan kreativitas digital mahasiswa dalam ranah sinematografi, pembuatan film, editing video, dan penyiaran (broadcasting). Berada di bawah pembinaan Unit Pengembangan Kewirausahaan dan Karir (UPKK) serta bekerjasama dengan Pusat Pengembangan Bisnis UIN STS Jambi, CINEMA SUTHA memosisikan diri sebagai rumah produksi (production house) kreatif kampus. CINEMA SUTHA memproduksi berbagai jenis karya sinematik, mulai dari film pendek fiksi, dokumenter, hingga video profil kelembagaan universitas—seperti karya film "KUJU", "AKSARA", dan "Arutala Film". Karya-karya visual UKM ini tidak hanya ditayangkan secara komersial dan edukatif, melainkan juga sukses memenangkan kompetisi internasional, seperti perolehan medali emas dalam SeIBa International Festival.',
    cover_image_url:
      "https://images.unsplash.com/photo-1485846234645-a62644f55377?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/cinema-sutha"),
    join_url: "https://temukm.local/gabung/cinema-sutha",
    sort_order: 7,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111008",
    slug: "pikma",
    name: "UKM PIKMA",
    category: "UKM",
    summary:
      "Penalaran ilmiah dan kreativitas — riset, PKM, literasi, dan coaching clinic akademik.",
    description:
      "UKM PIKMA (Penalaran Ilmiah dan Kreativitas Mahasiswa / Pusat Informasi dan Kajian Mahasiswa) berfokus pada penguatan iklim akademik, budaya meneliti, dan literasi karya tulis ilmiah di kalangan mahasiswa UIN STS Jambi. Kegiatan operasional PIKMA meliputi penyelenggaraan pelatihan metode penelitian ilmiah, pendampingan penyusunan proposal Program Kreativitas Mahasiswa (PKM), diskusi kritis literatur, serta bedah buku. Selain itu, PIKMA secara rutin menggelar coaching clinic akademik, seperti strategi menembus beasiswa tingkat internasional dan pelatihan tata tulis karya ilmiah, guna mempersiapkan mahasiswa bersaing dalam iklim akademik global.",
    cover_image_url:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/pikma"),
    join_url: "https://temukm.local/gabung/pikma",
    sort_order: 8,
    created_at: now,
    updated_at: now,
  },
  {
    id: "11111111-1111-4111-8111-111111111009",
    slug: "ibm",
    name: "UKM IBM",
    category: "UKM",
    summary:
      "Ikatan Beladiri Mahasiswa — pencak silat, pembinaan karakter, dan prestasi nasional.",
    description:
      "UKM Ikatan Beladiri Mahasiswa (IBM) UIN STS Jambi berdiri sekitar tahun 2021 sebagai wadah pembinaan pencak silat dan bela diri mahasiswa. Unit ini menempa fisik, mental, dan karakter melalui latihan rutin seni bela diri tradisional Indonesia, dengan penekanan pada sportivitas serta pelestarian budaya. UKM IBM telah menoreh prestasi di kancah nasional, termasuk juara umum kategori dewasa/mahasiswa pada Pencak Silat Championship Jambi 2024 dengan perolehan 15 medali, serta penghargaan pada Kejuaraan Bandung Lautan Api tingkat nasional. Prestasi tersebut menjadi bukti kerja keras kader dan pembina dalam mengembangkan bakat bela diri di lingkungan UIN STS Jambi.",
    cover_image_url:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=80",
    qr_image_url: qr("https://temukm.local/gabung/ibm"),
    join_url: "https://temukm.local/gabung/ibm",
    sort_order: 9,
    created_at: now,
    updated_at: now,
  },
];
