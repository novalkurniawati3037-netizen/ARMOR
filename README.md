# ARMOR — Antimicrobial Resistance Mapping and Outbreak Response

Prototipe website dinamis untuk platform surveilans resistensi antimikroba Indonesia.

## Fitur

- **Beranda** — Hero, statistik kunci, empat pilar ARMOR
- **Peta Resistensi** — Filter patogen / antimikroba / spesimen + kartu wilayah dengan kategori warna CLSI M39
- **Rekomendasi Terapi Empiris** — Input wilayah + spesimen + patogen → daftar antimikroba terurut % sensitif + estimasi biaya
- **Dashboard** — Ringkasan + tabel gen resistensi (genomic insight)
- **Tentang** — Latar belakang, tim, disclaimer

## Desain

- Font: **Nunito** (heading) + **Open Sans** (body)
- Warna: **Navy (#0A2540)** + putih + aksen teal
- Responsif (mobile / tablet / desktop)

## Cara menjalankan

### Lokal (paling sederhana)
Buka file `index.html` langsung di browser, atau jalankan server lokal:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Lalu buka http://localhost:8080

### GitHub Pages
1. Buat repository baru di GitHub
2. Upload folder `armor-site` (atau isi root repo dengan file-file ini)
3. Settings → Pages → Source: Deploy from branch `main` / root
4. Website akan live di `https://<username>.github.io/<repo>/`

### Netlify / Vercel
Drag & drop folder `armor-site` ke Netlify Drop, atau hubungkan repo.

## Catatan data

Data pada prototipe bersifat **ilustratif** berdasarkan konsep publikasi SINAR-PAMKI. Tidak untuk digunakan sebagai dasar tunggal keputusan klinis.

## Tim

- Noval Kurnia Wati — Fakultas Farmasi UI
- Asfaraeni Rahmah — Fakultas Farmasi UI
- Dimas Syafi Aldi — FKM UI

© 2026 ARMOR · Fakultas Farmasi Universitas Indonesia
