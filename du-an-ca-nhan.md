# Dự án cá nhân — Nguyễn Văn Phú

> Nguồn: thư mục trên máy (`/var/www/html/Learner`, `/var/www/html/myTool`), GitHub `phuphu0981`, `phunv244`, `phunvMagenest`, và portfolio cũ.
> Sắp xếp theo mức độ hoàn thiện. Dự án trước Magenest xem `kinh-nghiem-truoc-magenest.md`.

## 1. Dự án lớn (có kiến trúc, tài liệu, deploy)

### Preme — Shop bán tài khoản số / AI (09/2026 – nay)
Live: https://kerrax.com · `Learner/Ecom` · repo riêng tư `phunvMagenest/Preme` · 157 commit, đang phát triển
- **Backend:** Go 1.26, Gin, MySQL 8 + sqlc + goose migration, Redis 7, validator, rate limit.
- **Frontend:** Next.js 16, React 19, next-intl (đa ngôn ngữ), shadcn/Radix, Tailwind 4, MDX.
- **Hạ tầng:** Docker Compose (MySQL, Redis, Nginx), Cloudflare tunnel, script setup VPS Ubuntu 24.04, deploy, backup/restore, systemd.
- **Tính năng:**
  - Catalog đa nhà cung cấp (Thatim, ResellMe) qua API; tự tắt sản phẩm khi giá vốn ≥ giá bán.
  - Ví nạp tiền qua Binance Pay USDT.
  - Đơn hàng, trang admin, báo cáo kế toán, chặn/proxy provider, log hệ thống.
- **Tài liệu:** 19 file kế hoạch (`plan/01–19`: DB, pricing, ví, đơn hàng, public API, bảo mật, rủi ro, test plan, kiến trúc module…), handbook admin, DB schema, runbook backup, `DEPLOY.md`, khảo sát thị trường nhà cung cấp tài khoản AI.

### E-Learning Platform — LMS (03/2026 – 05/2026)
Live: https://e-learningg.click/ · *(không có source trên máy, thông tin từ portfolio)*
- PHP 8.4, Laravel 11, MySQL, Redis, Tailwind CSS 4, Python AI worker.
- Modular Monolith, 7 module (Auth, Admin, TeacherCourse, StudentLearning, Marketplace, Comment, Shared), có route loader tự quét module.
- Pipeline audio AI: Faster-Whisper (STT), dịch, TTS ElevenLabs/OpenAI qua Redis queue; HLS nhiều track âm thanh EN/FR/VI.
- Sinh quiz từ phụ đề bằng LLM (Ollama qwen2.5:7b local, fallback Gemini/OpenAI), parser tự sửa JSON lỗi.
- 2FA Google Authenticator + 8 recovery code, reCAPTCHA v3, throttle đăng nhập; thanh toán PayOS (webhook checksum, DB transaction).

### Web360 — "The Opaline Gazette", nền tảng tin tức headless (08/2026 – 09/2026)
`Learner/Web360` · `phunv244/web360_be`, `web360_fe`
- **BE:** Go 1.26, Gin, Uber FX (DI), gqlgen GraphQL + DataLoader, GORM + PostgreSQL 16 (JSONB cho SEO), Redis 7, GoAdmin, crawler RSS (gofeed), bluemonday sanitize, GeoIP (Cloudflare header, fallback MaxMind), zap log.
- **SEO:** sitemap index > 50k URL, JSON-LD; mục tiêu CLS 0, LCP < 0.8s.
- **FE:** Next.js 16, React 19, Vitest.
- **Tài liệu:** PRD + ma trận phân quyền, kiến trúc, DB schema, Postman, spec từng tính năng, 11 hướng dẫn vận hành, master plan.

### learnCode — Clone LeetCode / Online Judge (07/2026 – 08/2026)
`Learner/learnCode`
- **BE:** Go + Gin, GORM + MySQL, Redis, Judge0 sandbox chạy code, admin HTMX, JWT + OTP 2FA + Google OAuth2.
- **FE:** Next.js 16, React 19, Monaco editor, panel kéo giãn.
- **Tài liệu:** phân tích LeetCode (tính năng cốt lõi, kiến trúc), kế hoạch BE/FE, script kiểm tra môi trường.

### OpenDox — SaaS dịch tài liệu & công cụ PDF (09/2026)
Live: https://opendox.vercel.app/ · `Learner/OpenDox`, `Learner/Opendox-client` · `phunv244/Opendox`
- **BE:** Python 3.12, FastAPI, SQLAlchemy 2 + Alembic, argon2, PaddleOCR, pdfplumber, pypdf, python-docx, reportlab; quản lý bằng uv. Module: accounts, billing, documents, jobs, locking, pipeline, quota, storage.
- **FE:** Next.js 15 static export, pdf.js, pdf-lib, GSAP; giao diện kiểu Smallpdf, 13 icon SVG tự vẽ, thanh toán VietQR (49k/30 ngày).
- Opendox-client: bản chỉ chạy trên trình duyệt, không cần backend.

## 2. Template & công cụ

| Dự án | Stack | Nội dung |
|---|---|---|
| **CodeBaseGo** (`Toancanh360`) — [demo](https://code-base-go-eight.vercel.app) | Go, Gin, Google Wire, gqlgen, JWT, SQLite, goose, swag | Template backend module hóa, `make setup` tự đăng ký module; tài liệu `GUIDE.md`, `request_lifecycle.md` (6 bước xử lý request) |
| **courseraTranslate** | Chrome extension (JS) | Dịch phụ đề Coursera EN → VI không cần API key (parser VTT, render phụ đề) |
| **crawVNnews** — [demo](https://crawvnnews.onrender.com) | Python, BeautifulSoup, Docker, Render | Crawler VnExpress, Dân Trí, VietNamNet + báo Đức Süddeutsche Zeitung |
| **PasteImage** | Shell | Dán ảnh từ clipboard vào chat Antigravity CLI |
| **YT-Downloader** | — | Tải video YouTube |
| **n8nDemo** | n8n, Docker | Workflow tự động: RSS → AI tóm tắt → Google Docs; hướng dẫn cài n8n |
| **VectCutAPI** (fork) | Python, Docker | API chỉnh sửa draft CapCut |
| **animaton** (fork automaton) | TypeScript, Python | Agent AI tự vận hành: thêm bridge engine local, dashboard theo dõi, giới hạn chi tiêu, chống lặp, hướng dẫn sử dụng |

## 3. Portfolio & 3D

| Dự án | Stack | Nội dung |
|---|---|---|
| **Portfoliov2** (repo này) — [phunv.vercel.app](https://phunv.vercel.app) | Next.js 16, React 19, three.js | Portfolio mới |
| **ThreeJS portfolio** (`phuphu0981/portfoliov2`) | three.js 0.186, Vite, Blender (Python) | Phòng neon 3D, bake ánh sáng bằng script Blender, camera bay khi click, EN/VI; `HUONG_DAN_BLENDER.md` |
| **Portfolio-ADv** | three.js | Phân tích portfolio "Ramen Shop" (`ramen-shop-report.html`) |
| **myPortfolio.github.io** | HTML/CSS/JS | Portfolio cũ (07/2025) |

## 4. Tự học

- **Go:** bài tập cơ bản (iota, slice/map/struct, goroutine/channel/sync, JSON/file IO) — `Learner/GoLang`.
- **Docker:** Express + Redis, ghi chú giao tiếp container (DNS nội bộ, port nội bộ vs publish) — `Learner/LearnDocker`.
- **Linux:** lệnh file, hard link vs symlink — `Learner/LearnLinux`.
- **AI agent workflow:** kế hoạch setup multi-skill agent (clarification gate, skill routing, TDD, debug loop, post-mortem) — `Learner/SETUP-AGENT`.
- **Tài liệu tham khảo (fork):** Adobe Commerce PHP guide, Symfony docs; nhiều tool AI video (remotion, hyperframes, OpenMontage, browser-use…).

## 5. Kỹ năng rút ra từ dự án cá nhân

- **Go backend:** Gin, GoFr, Wire / Uber FX, gqlgen + DataLoader, GORM, sqlc, goose.
- **Python:** FastAPI, SQLAlchemy, OCR/PDF, crawler, AI worker.
- **Laravel:** Modular Monolith, queue, 2FA, payment gateway.
- **Frontend:** Next.js 15/16, React 19, Tailwind 4, shadcn, next-intl, three.js, Blender.
- **DB & cache:** MySQL, PostgreSQL (JSONB), SQLite, Redis.
- **DevOps:** Docker Compose, Nginx, VPS Ubuntu, systemd, Cloudflare tunnel, backup/restore, Vercel, Render.
- **Thanh toán:** Binance Pay, PayOS, VietQR.
- **AI:** LLM (Ollama, Gemini, OpenAI), STT/TTS, n8n, AI agent orchestration.
- **Tài liệu:** PRD, kế hoạch, runbook, hướng dẫn vận hành — viết song song với code.
