# Teroka App - Direktori UMKM

> Aplikasi web Teroka untuk menemukan dan mendaftar UMKM lokal di Indonesia  
> Tech stack: **Next.js + TypeScript + Tailwind CSS + ESLint + App Router**

---

## 🚀 Deskripsi Proyek

Teroka adalah aplikasi frontend untuk:
1. **Landing Page (CTA)** – Pengenalan aplikasi  
2. **Search Page** – Cari UMKM seperti model GoFood  
3. **Detail UMKM Page** – Informasi lengkap UMKM  
4. **Register UMKM Page** – Form pendaftaran UMKM sebagai mitra  

---

## 🗂 Struktur Folder

# Struktur Folder Teroka Frontend

```text
src/
├─ app/
│  ├─ page.tsx                 # Landing Page (CTA)
│  ├─ search/
│  │  └─ page.tsx              # Search Page
│  ├─ umkm/
│  │  └─ [id]/
│  │      └─ page.tsx          # Detail UMKM Page
│  └─ register/
│      └─ page.tsx             # Form Register UMKM
├─ components/
│  ├─ layout/                  # SiteHeaderNavbar, SiteFooter
│  ├─ ui/                      # Button, Input, Card, Container
│  ├─ shared/                  # SearchBar, UmkmCard, SectionTitle
│  └─ effects/                 # Animasi / visual effect (Framer Motion)
├─ data/
│  └─ umkm.json                # Dummy data UMKM
├─ hooks/
│  └─ useFetch.ts              # Custom fetch hook
├─ lib/                        # Utils & API integration (contoh gmaps.ts)
├─ styles/                     # globals.css, animations.css, theme.css
├─ types/
│  └─ umkm.d.ts                # TypeScript types
└─ constants/
   └─ appConfig.ts             # API_URL, MAPS_KEY, dll

```

> **Note:** Semua gambar statis ada di `public/images/umkm/` dan logo/hero di `public/images/`.

---

## ⚡ Setup Cepat

```bash
# Clone repo
git clone https://github.com/aliimndev/teroka-app.git
cd teroka-app

# Install dependencies
npm install

# Jalankan development server
npm run dev

```
## Sisanya silahkan atur sendiri


