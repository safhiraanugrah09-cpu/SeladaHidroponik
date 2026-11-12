# DaunSegar — Website Selada Hidroponik Premium

Website landing page bertema **Fresh Green Premium** untuk usaha/kebun selada hidroponik. Dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

## Isi folder

- `index.html` — struktur dan konten website.
- `style.css` — desain visual, animasi, dan responsive layout.
- `script.js` — navigasi mobile, animasi scroll, tombol WhatsApp, dan simulasi dashboard.
- `README.md` — dokumentasi ini.

## Cara menjalankan

1. Ekstrak file ZIP.
2. Buka folder `lettuce-farm-premium` di Visual Studio Code.
3. Buka `index.html` langsung di browser, atau jalankan dengan ekstensi **Live Server**.
4. Pastikan koneksi internet tersedia untuk memuat Google Fonts dan foto dari Unsplash.

## Kustomisasi penting

### 1. Nomor WhatsApp
Buka `script.js`, lalu ubah:

```js
const WHATSAPP_NUMBER = "6281234567890";
```

Gunakan format internasional tanpa tanda `+`, spasi, atau tanda hubung. Contoh nomor Indonesia: `6281234567890`.

### 2. Nama brand dan konten
Cari teks `DaunSegar` di `index.html`, lalu ganti dengan nama usaha. Deskripsi, varietas, harga, dan tahapan budidaya juga dapat disesuaikan.

### 3. Harga produk
Harga pada katalog adalah **contoh/dummy**. Sesuaikan dengan harga jual, berat per kemasan, dan ketersediaan panen sebenarnya.

### 4. Foto
Foto menggunakan URL gambar Unsplash yang dimuat secara online. Untuk mengganti foto, ubah URL `background-image` pada `style.css`. Pastikan foto yang dipilih tetap menampilkan **selada**, sesuai fokus website.

## Catatan dashboard monitoring

Bagian dashboard pH, EC nutrisi, suhu air, dan kelembapan merupakan **simulasi tampilan**. Angka berubah secara acak saat tombol "Simulasikan pembaruan" ditekan. Website ini belum terhubung ke sensor IoT, mikrokontroler, database, atau perangkat monitoring sungguhan.

Untuk monitoring real-time, perlu integrasi perangkat sensor (misalnya ESP32), API/backend, dan penyimpanan data. Nilai kisaran yang ditampilkan hanya contoh edukatif; sesuaikan dengan varietas, fase pertumbuhan, sistem, dan rekomendasi nutrisi yang digunakan.

## Teknologi

- HTML5
- CSS3 (Grid, Flexbox, media queries, transitions)
- JavaScript ES6
- Google Fonts (Manrope dan DM Sans)
- Foto Unsplash

## Fitur

- Tampilan premium hijau emerald dan putih.
- Responsive untuk desktop, tablet, dan ponsel.
- Navigasi mobile.
- Animasi reveal saat scroll.
- Katalog tiga varietas selada dan harga contoh.
- Informasi tahapan budidaya selada hidroponik.
- Galeri foto bertema selada.
- Dashboard monitoring simulasi.
- Tombol pemesanan melalui WhatsApp.

---
Dibuat sebagai template website yang dapat dikembangkan dan disesuaikan dengan identitas usaha.


## Pembaruan foto varietas selada

Foto katalog telah diperbaiki agar sesuai dengan bentuk varietas:
- Selada Keriting: daun terbuka dengan tepi bergelombang.
- Selada Romaine: daun tegak memanjang dengan tulang daun tengah yang jelas.
- Selada Butterhead: kepala selada membulat dengan daun lembut berlapis.

Foto katalog dan galeri dimuat dari URL gambar eksternal, sehingga membutuhkan koneksi internet.
