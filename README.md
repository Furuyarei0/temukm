# temUKM

Portal UKK/UKM UIN STS Jambi: landing gold-grain, kartu organisasi, QR pendaftaran, dan CMS tersembunyi di `/admin`.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Tanpa kredensial Supabase, landing memakai data seed lokal. `/admin` dapat dibuka dengan mode demo (sandi minimal 4 karakter); perubahan tersimpan di `localStorage` dan langsung terlihat di beranda.

## Supabase (opsional, produksi)

1. Buat project di [Supabase](https://supabase.com).
2. Jalankan [`supabase/schema.sql`](supabase/schema.sql) di SQL Editor.
3. Authentication → Users → undangan/create user admin.
4. Salin `.env.example` ke `.env.local` dan isi:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

5. Restart `npm run dev`. Landing berlangganan `postgres_changes` pada tabel `organizations`. Unggah foto/QR masuk bucket Storage `media`.

## Halaman

- `/` landing
- `/about`, `/contact`, `/terms`, `/privacy`
- `/admin` tidak ditautkan di navigasi publik
