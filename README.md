## Shift Management (Rails API + React Frontend)

<<<<<<< HEAD
Modern vardiya/çalışan/izin/çizelge/departmanlar yönetimi için tam yığın proje.

### Teknolojiler
- Backend: Ruby on Rails (API-only), REST `/api/v1/*`
- Frontend: Vite + React + Tailwind CSS + React Router + @tanstack/react-query
- E2E: Cypress (videos/screenshots ignore edildi)
- Acceptance: Cucumber (Gherkin feature dosyaları)

---

### Gereksinimler
- Ruby ve Bundler
- Node.js (>=18) ve npm
- PostgreSQL/SQLite (Rails database tercihinize göre)

### Backend (Rails API)
```bash
# proje kökünde
bundle install
bin/rails db:setup   # veya db:create db:migrate
bin/rails s          # http://localhost:3000
```

### Frontend (Vite/React)
```bash
cd frontend
cp .env.example .env   # gerekirse düzenleyin

---
npm install
npm run dev             # http://localhost:3001
```

Notlar:
- Frontend 3001 portunda, Backend 3000 portunda çalışır.
Modern vardiya/çalışan/izin/çizelge yönetimi için tam yığın (monorepo) proje.

### Teknolojiler
- Backend: Ruby on Rails (API-only), REST `/api/v1/*`
- Frontend: Vite + React + Tailwind CSS + React Router + @tanstack/react-query
- E2E: Cypress (videos/screenshots ignore edildi)
- Acceptance: Cucumber (Gherkin feature dosyaları)

---

## Proje Yapısı

```
shift_management_api/
├─ app/, config/, db/, ...             # Rails API
├─ frontend/                           # Vite + React frontend
│  ├─ src/                             # React kaynakları
│  ├─ cypress/                         # Cypress testleri (e2e)
│  ├─ package.json                     # Frontend bağımlılıkları/komutları
│  └─ .env                             # VITE_API_BASE_URL (ignore)
├─ features/                           # Cucumber feature dosyaları
├─ .gitignore                          # Büyük/üretilen klasörler ignore
└─ README.md
```

---

## Hızlı Başlangıç

### Gereksinimler
- Ruby ve Bundler
- Node.js (>=18) ve npm
- PostgreSQL/SQLite (Rails database tercihinize göre)

### Backend (Rails API)
```bash
# proje kökünde
bundle install
bin/rails db:setup   # veya db:create db:migrate
bin/rails s          # http://localhost:3000
```

### Frontend (Vite/React)
```bash
cd frontend
cp .env.example .env   # gerekirse düzenleyin
# .env içerisinde:
# VITE_API_BASE_URL=http://localhost:3000

npm install
npm run dev             # http://localhost:3001
```

Notlar:
- Frontend 3001 portunda, Backend 3000 portunda çalışır.
- CORS `config/initializers/cors.rb` ile 3001’e izinli.

---

## Testler

### Cucumber (Acceptance)
Proje kökünde Gherkin feature dosyaları `features/` altındadır.
```bash
# Backend özellik testleri (Cucumber)
bundle exec cucumber
```

### Cypress (E2E)
Frontend altında E2E testleri mevcuttur.
```bash
cd frontend
npm run cypress:open   # GUI
npm run cypress:run    # CI/CLI
```
Not: `frontend/cypress/videos` ve `frontend/cypress/screenshots` repo dışında tutulur.

---

## Çevresel Değişkenler (Frontend)
- `frontend/.env`
  - `VITE_API_BASE_URL` (örn: `http://localhost:3000`)

---

## API Örnek Uçlar
Rails `config/routes.rb`:
- `GET /api/v1/departments`
- `GET /api/v1/users`
- `GET /api/v1/shifts`
- `GET /api/v1/schedules`
- `GET /api/v1/leafes` (izinler)

CRUD uçları REST standartlarına uygundur.

---

## Faydalı Komutlar
```bash
# Backend
bin/rails db:migrate
bin/rails s

# Frontend
cd frontend
npm run dev
npm run build && npm run preview

# Cypress videolarını WSL üzerinde birleştirme (örnek)
find ./cypress/videos -type f -name '*.mp4' | sort | sed "s/^/file '/;s/$/'/" > videos.txt
ffmpeg -f concat -safe 0 -i videos.txt -c copy ./cypress/videos/merged.mp4
```

---

## Notlar
- `.gitignore` büyük/üretilen klasörleri (node_modules, dist, .vite, Cypress videos/screenshots, `.env`) ignore eder.
- İsteğe bağlı CI ayarları `.github` altında tutulabilir; repo politikanıza göre etkinleştirin.

---

## Lisans
Bu depodaki kodlar proje sahibinin lisans politikasına tabidir.
>>>>>>> d90ffd8 (Ignore .github and clean tracked workflows; update README and .gitignore)
