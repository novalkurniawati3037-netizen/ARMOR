# ARMOR v2 — Antimicrobial Resistance Mapping and Outbreak Response

Prototipe website yang lebih lengkap sesuai konsep produk:

- **Pencarian multidimensi**: penyakit, antimikroba, wilayah, patogen
- **Peta choropleth**: peta geografis interaktif Indonesia (Leaflet + GeoJSON 38 provinsi), warna berdasarkan % sensitivitas regional, marker lingkaran untuk provinsi pilot, kartu wilayah + kategori CLSI M39
- **Pilihan obat per lini**: cara pakai, harga, ketersediaan (warna), % sensitif
- **Phylogenetic tree (demo)**: klaster strain A/B + gen resistensi terkait
- **Prinsip**: transparansi data, independensi analisis, genomik sebagai pelengkap

## Cara menjalankan
Buka `index.html` di browser, atau:
```bash
python3 -m http.server 8080
```

## Deploy GitHub Pages
Upload `index.html`, `app.js`, dan `README.md` ke root repo, lalu Settings → Pages → branch `main`.

Data bersifat ilustratif. Bukan dasar tunggal keputusan klinis.
