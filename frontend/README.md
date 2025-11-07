# Shift Wise Flow — Frontend

Bu repo Vite + React + TypeScript kullanılarak hazırlanmış bir frontend uygulamasıdır.

Hızlı başlangıç

1. .env.example dosyasını kopyalayın ve backend API URL'inizi ayarlayın:

   - Windows PowerShell:

```powershell
copy .env.example .env
# Düzenleyin: VITE_API_BASE_URL=http://localhost:3000 (backend adresiniz)
```

2. Bağımlılıkları yükleyin:

```powershell
npm install
```

3. Geliştirme sunucusunu çalıştırın:

```powershell
npm run dev
```

API entegrasyonu

- API istemcisi `src/lib/api.ts` içinde bulunur. Base URL olarak `import.meta.env.VITE_API_BASE_URL` kullanır.
- Eğer Rails API'niz endpoint prefix (ör. `/api` veya `/api/v1`) kullanıyorsa, `VITE_API_BASE_URL` değerine bunu ekleyin (ör. `http://localhost:3000/api/v1`).
- Örnek olarak `src/hooks/useEmployees.tsx` ile çalışan listeleme yapılır ve `src/pages/Employees.tsx` bu hook'u kullanır.

Cypress ile test

- Proje Cypress ile basit E2E testi iskeleti içerir (`cypress/e2e/employees.cy.ts`).
- Cypress'i çalıştırmak için önce bağımlılıkları yükleyin (`npm install`), sonra:

```powershell
npm run cypress:open    # interaktif
npm run cypress:run     # headless
```

Notlar

- Postman koleksiyonunuzun içindeki gerçek endpoint yolunu paylaşırsanız `src/lib/api.ts` içindeki yolları (örn `/employees`) otomatik olarak güncelleyebilirim.
- Eğer backend CORS veya auth gerektiriyorsa backend tarafında CORS izinlerini ve kimlik doğrulama token akışını yapılandırmanız gerekebilir.
