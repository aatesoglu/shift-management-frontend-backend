## Shift Management (Rails API + React Frontend)

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

---
