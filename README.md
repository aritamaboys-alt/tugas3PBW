# Tugas 3 PBW - Sistem Manajemen Stok Bahan Ajar

## Deskripsi
Aplikasi web berbasis Vue.js untuk manajemen stok bahan ajar di Universitas Terbuka dengan fitur:
- ✅ CRUD Stok Bahan Ajar
- ✅ Filter & Sort dinamis
- ✅ Tracking Delivery Order (DO)
- ✅ Modal form untuk edit/tambah data
- ✅ Status badge dengan kondisi stok

## Teknologi
- Vue.js 3
- HTML5
- CSS3
- JSON untuk data storage

## Fitur Utama

### 1. Halaman Stok Bahan Ajar
- Daftar stok dengan kolom lengkap: Kode, Judul, Kategori, UT-Daerah, Lokasi Rak, Harga, Qty, Safety Stock, Status
- Filter by UT-Daerah, Kategori, Qty range, Safety stock range
- Sort by Judul (A-Z), Qty (kecil-besar), Harga (murah-mahal)
- Tombol Edit & Hapus untuk setiap item
- Status badge untuk menunjukkan kondisi stok (Aman/Warning/Kosong)

### 2. Halaman Tracking DO
- Daftar pengiriman dengan detail lengkap
- Timeline perjalanan paket
- Status pengiriman real-time

## Struktur Folder
```
tugas3PBW/
├── index.html
├── README.md
├── /assets/
│   ├── /css/
│   │   └── style.css
│   └── /img/
├── /data/
│   └── dataBahanAjar.json
├── /js/
│   ├── app.js
│   ├── /components/
│   │   ├── stock-table.js
│   │   ├── do-tracking.js
│   │   ├── order-form.js
│   │   ├── status-badge.js
│   │   └── app-modal.js
│   └── /services/
│       └── api.js
```

## Cara Menjalankan
1. Buka `index.html` di browser
2. Atau gunakan live server untuk development
3. Pastikan semua file sudah ter-load dengan baik

## Component Details

### StockTable
- Menampilkan daftar stok bahan ajar
- Fitur filter dan sort
- Tombol edit & hapus

### StatusBadge
- Menampilkan status stok (Aman/Warning/Kosong)
- Tooltip untuk informasi detail

### AppModal
- Modal generic untuk form input
- Support add & edit mode

### OrderForm
- Form untuk menambah/edit stok bahan ajar
- Validasi input

### DoTracking
- Menampilkan tracking pengiriman
- Timeline perjalanan paket

### API Service
- Fetch data dari JSON
- Utility untuk format currency dan date

## Author
aritamaboys-alt
