# Kinh nghiệm & kỹ năng tại Magenest — Nguyễn Văn Phú (phunv)

> Tổng hợp từ các repo/thư mục trên máy làm việc (`/var/www/html`, `/home/phu`), dựa trên git log của tác giả `phunv` / `phunguyen204` và tài liệu tự viết.
> Thời gian: **11/2025 – nay**. Commit sớm nhất tìm thấy trên máy: 04/2026 (code trước đó nằm ở repo không có trên máy).
> Chỉ ghi nhận phần việc của chính mình; module do đồng nghiệp viết được ghi rõ là "không phải của tôi".

## Tóm tắt

Backend Developer đa nền tảng tại Magenest:
- **Magento 2 / Adobe Commerce** (chính): module custom, GraphQL/REST, queue, indexer, nâng cấp 2.4.8 / PHP 8.4, tích hợp bản đồ VN, AI recommendation.
- **WordPress headless**: WPGraphQL + Page Builder cho Next.js (Fulbright).
- **Go microservices**: Kafka + OpenSearch search service (ACE Platform).
- Viết tài liệu kỹ thuật (SRS, kế hoạch, báo cáo, user guide) bằng tiếng Việt/Anh; làm việc cùng AI agent (Claude Code, CLAUDE.md/AGENTS.md).

---

## 1. Dự án khách hàng & sản phẩm

### 1.1 Oroca — Magento B2B/B2C (05/2026 – 09/2026, ~105 commit)
`gitlab.magenest.com:M2P/oroca` · Magento Open Source 2.4.8-p4, headless GraphQL, Amasty B2B, composer-patches, GitLab CI, phpstan/phpmd/php-cs-fixer.

| Module | Việc đã làm |
|---|---|
| `Magenest_ClinicSetup` (mới) | Landing page Clinic Setup: entity Lead + repository, REST `POST /V1/clinicsetup/lead/submit` (chuyển từ controller sang Web API) + CORS, upload file, admin grid, email thông báo, GraphQL schema, blog clinic + resolver bài nổi bật |
| `Magenest_VatInformation` | Quản lý địa chỉ VAT / hóa đơn điện tử: GraphQL `vatInformation`, `setVatInformationOnCart`, `updateVatInformation`, `deleteVatAddress`; validate, ACL `Magento_Sales::actions_edit`, tự điền từ company account; fix copy VAT quote → order |
| `Magenest_ProductLabel` (O-760) | Tối ưu hiệu năng: chuyển message queue sang default exchange, cache + preload category condition, giảm repository call khi index, log hiệu năng indexer/consumer |
| `CustomCheckout`, `QuickOrder` (O-287, SD-679) | Validate tồn kho/số lượng cho bundle, grouped, configurable; auto-cap `max_sale_qty`; salable qty ≤ 0 = hết hàng; giới hạn tổng theo cả giỏ; "Báo khi có hàng"; fix resolver BuyNow/MoveToCart |
| `InvoicePdf` (O-489) | Làm lại PDF hóa đơn (dompdf): template, ngắt trang bundle item, nhãn quà tặng, thông tin công ty, customer attribute |
| `TranslitUrlKey` (O-795), `Seo` (SD-663) | Chuyển tự URL key tiếng Việt, phát hiện trùng, redirect 301; script migration `update_product_url_keys.php`, `update_category_url_keys.php`, `fix_seo_redirects.php`, `update_megamenu_*.php` |
| Core patch | `m2-hotfixes/O-1203-bundle-duplicate-keep-original-selections.patch` |
| Khác | Fix CompanyPermission, CompanyAccount, Category, CatalogGraphQl, Ahamove, refund order status; resolver bắt `Throwable` |

### 1.2 AI Cypher — Magento AI commerce add-ons (04/2026 – 07/2026, 22 commit)
`gitlab.magenest.com:base/ai-cypher` · Magento 2.4.8-p4.

**`Magenest_FrequentlyBoughtTogether`** (AI-088, AI-147) — gần như toàn bộ module:
- Tracking session / add-to-cart / mua hàng (observer `SaveQuoteSessionId`, `TransferSessionIdToOrder`, cột `fbt_session_id`).
- Sinh feed CSV (`fbt_cart.csv`), tích hợp AI endpoint gợi ý.
- Controller gợi ý frontend + fallback theo độ phổ biến + snapshot tồn kho.
- Admin: pin / blacklist / sync, validate Data Sync Configuration.
- Cron: full sync, monitor trạng thái 5 phút, retry sync config 1 phút.
- Queue topic `magenest.fbt.data.update` (DB connection), dead-letter manager, alert service, audit logger.
- Refactor strict typing, constructor property promotion.
- Dữ liệu test: SQL seed quote/order, `scripts/create_orders.php`.

`VirtualTryOn` (AI-070): validate SKU khi upload. *(Core VirtualTryOn, SizeChart, AiSizeRecommender, ProductFeed do đồng nghiệp viết.)*

### 1.3 Magento Extension / Base project — m248 (04/2026 – 06/2026)
Magento 2.4.8-p4, PHP 8.4 — base project của phòng, mỗi module là 1 repo riêng.

- **Magenest_AbandonedCart** 1.1.2 → 1.1.3 (M2_ABACAR-069, 72 file, +1293/-983): tương thích 2.4.8-p4 / PHP 8.4; thay SDK deprecated `mandrill/mandrill` bằng `mailchimp/transactional` (viết lại `MandrillConnector`, thêm `Tracking`); refactor tab rule admin (General, EmailChain, SMS), tracking click/email/restore, unsubscribe/resubscribe, guest capture.
- **Magenest_GiftCardPlus** → 1.1.3 (M2_GCP-097): tương thích 2.4.8-p4 / PHP 8.4.
- **Magenest_Popup** → 1.2.4 (M2PU-214): fix validate trường priority ở form admin + tương thích PHP 8.4.
- **Magenest_GoogleMapApi**: mở rộng thêm provider Vietmap v4 (bên cạnh Google, Goong). Tài liệu: `VIETMAP_INTEGRATION_PLAN.md`, `VIETMAP_TESTING_GUIDE.md`.
- **Magenest_VietMapApi** (mới): module bản đồ VN độc lập
  - Service contract `MapServiceInterface` (khoảng cách theo tọa độ/địa chỉ, geocode) → DI preference `MapServiceCompose`.
  - Strategy pattern: chọn provider theo config `map_service/general/chosen_service`, provider inject qua mảng `di.xml` (`goong_map`, `vietmap_map`).
  - Vietmap API: autocomplete/search/reverse/place v4, route v3, tile style, satellite.
  - `ApiRequestBuilder` (curl wrapper + debug), Curl client hỗ trợ PUT, logger virtualType riêng `var/log/magenest/viet_maps_api.log`.
  - Admin config: API key dùng Encrypted backend model, preview bản đồ trực tiếp (vietmap-gl qua requirejs), i18n `vi_VN`.

### 1.4 SM Markets / SuperValue — Adobe Commerce 2.4.7-p1 + PWA Studio (05/2026)
Onboarding dự án grocery e-commerce Philippines (~110 module custom, Paynamics/PayRex, GrabMart, Shopee, Pandamart…).
- Dựng môi trường local cho Adobe Commerce Cloud + PWA Studio (peregrine/venia/upward-js).
- Fix PWA chạy với backend HTTP local: chọn agent http/https theo protocol (`graphQL.js`, `ProxyResolver.js`), xử lý lỗi GraphQL/HTTP/non-JSON, null-safe `server.js`, đăng ký package `pwa-sample` trong webpack, null check ở talon `useProduct`.
- Sinh tài liệu phân tích ~200 module legacy (`app/code/*/*/info.md`: logic, bảng DB, API ngoài, config key).

### 1.5 Fulbright University Vietnam — WordPress headless (08/2026, 29 commit)
`gitlab.magenest.com/fulbright/fulbright-wp` · WordPress + WPGraphQL + ACF Pro + Polylang, frontend Next.js. Đồng tác giả plugin `fulbright-builder-bridge` (17/35 commit), đóng góp `fulbright-graphql`, `fulbright-tracking`.

| Ticket | Nội dung |
|---|---|
| Ful-103 (13 commit) | Backend Page Builder: revision, rate limiter, validate + lock slug, hủy session admin khi revoke builder token, Translation API, field language/linkedPageSlug, offsetPagination pageInfo, breadcrumb/sidebar Person, mutation `submitDonorForm` |
| Ful-102 | GraphQL Course / Major / People / Event |
| Ful-162, Ful-163 | Tạo trang dịch lazy, chuyển ngôn ngữ theo slug, dedupe slug theo ngôn ngữ; API danh sách template |
| Ful-039 | Quản lý role/permission (Microsoft Entra SSO) |
| Ful-083, Ful-119 | Footer menu locations; cấu hình form GA4 |
| — | Fix SonarQube & WPCS (CI chỉ check diff MR: PHPCS/WPCS, Gitleaks, SonarQube; husky + lint-staged) |

Postman: bộ "Fulbright — GraphQL API (Staging)" ~API-001…027 (site config, menu, news, world map, cost estimator, degree planner, course, major, people, event, page, page builder, form).

### 1.6 ACE Platform — Go microservices (09/2026 – nay)
Go 1.26, GoFr, PostgreSQL, Redis/Valkey, Kafka, transactional outbox, OTLP → Jaeger, Docker Compose, GitLab CI, SonarQube, coverage gate 80%.

**`golang-search-service-base`** (PJB-075):
- Kafka consumer entitlement từ M1 → index vào **OpenSearch 2.19** (client, index, mapping).
- REST API search + suggest, admin reindex.
- CLI: status, reindex, retry DLQ; DLQ/backlog publisher.
- Unit + integration test, GitLab CI, README, tài liệu cấu hình & search, draft ingestion package entity.

### 1.7 AEON MALL Thanh Hóa — WordPress / Elementor (09/2026)
- Script migrate landing page "Về xứ Thanh" từ local lên UAT/production không sửa code: `export.php` / `import.php` chạy bằng `wp eval-file`, idempotent, tái sử dụng attachment, rewrite ID/URL media, lưu header/footer/page qua Elementor Document API.
- README hướng dẫn 2 cách (wp-admin và WP-CLI) + QA checklist.
- Script test ký request API thiết bị kiosk (openssl/curl, ECDSA).
- Có tham gia truy cập server / deploy.

---

## 2. Tài liệu đã viết

| Dự án | Tài liệu |
|---|---|
| Fulbright | SRS Page Builder (`YEU_CAU_CHUC_NANG_PAGE_BUILDER.md`), báo cáo trạng thái (`BAO_CAO_PAGE_BUILDER.md`), kế hoạch Single Log-Out Next.js ↔ WP (`KE_HOACH_DONG_BO_LOGOUT.md`), kế hoạch tối ưu Person GraphQL, API chuyển ngôn ngữ + hướng dẫn FE, đánh giá & kế hoạch tracking GA4/SEO, FRD SSO Entra + user guide VI/EN, hướng dẫn Footer/Social, user guide CMS/Forms/Salesforce, `SETUP.md` |
| m248 | `VIETMAP_INTEGRATION_PLAN.md`, `VIETMAP_TESTING_GUIDE.md`, `CLAUDE.md` của project |
| SM Markets | ~200 file `info.md` phân tích module legacy |
| ACE | `docs/configuration-and-technical.md`, `docs/search.md`, draft ingestion |
| AEON | README migrate landing page |
| n8n | Hướng dẫn cài n8n bằng Docker, workflow tóm tắt tin tự động |

---

## 3. Kỹ năng

### Magento 2 / Adobe Commerce
- Kiến trúc module: DI, preference, virtualType, plugin (interceptor), observer, repository / service contract.
- Declarative schema (`db_schema.xml`), data/schema patch.
- GraphQL resolver & schema, REST Web API (`webapi.xml`), ACL, CORS.
- Message queue (`queue_*.xml`, consumer, dead-letter), cron, indexer/mview — tối ưu hiệu năng.
- Admin: system config (encrypted field), UI component grid/form, requirejs JS.
- Checkout & tồn kho: salable qty, bundle/grouped/configurable, max sale qty.
- PDF (dompdf), email template, i18n `vi_VN`, SEO URL rewrite + 301.
- Nâng cấp phiên bản (2.4.8-p4 / PHP 8.4), thay SDK deprecated, composer-patches cho core.
- PWA Studio (peregrine, venia, UPWARD), Adobe Commerce Cloud.
- Tích hợp: Vietmap, Goong, Google Maps, Mailchimp Transactional, AI recommendation API.

### WordPress
- Headless WP: WPGraphQL, ACF Pro, Polylang, custom plugin, mutation.
- Page Builder backend: revision, lock, rate limit, token/session security.
- Microsoft Entra SSO, role/permission; Elementor Document API, WP-CLI.

### Go
- Microservice: GoFr / Gin, Kafka consumer, idempotency, outbox, DLQ.
- OpenSearch: index, mapping, search/suggest.
- CLI tool, unit/integration test, Wire / Uber FX DI, gqlgen, GORM, sqlc, goose.

### Hạ tầng & chất lượng
- Docker / Docker Compose, Nginx, Linux, mkcert HTTPS local, VPS deploy (systemd, Cloudflare tunnel, backup).
- GitLab CI, SonarQube, PHPCS/WPCS, phpstan, Gitleaks, husky.
- MySQL, PostgreSQL, Redis; Postman.

### Quy trình & AI
- Làm việc theo ticket (Jira-style), branch per ticket, MR review.
- Viết SRS / FRD / kế hoạch / báo cáo / user guide.
- AI-assisted development: Claude Code, CLAUDE.md / AGENTS.md, skill, multi-agent review; n8n automation.

---

## 4. Tự học & dự án cá nhân (cùng giai đoạn)

| Dự án | Stack | Ghi chú |
|---|---|---|
| **Preme** (Ecom) | Go + Gin, MySQL, Redis, sqlc, goose; Next.js 16, shadcn, Tailwind 4; Docker, Nginx, Cloudflare tunnel | Shop bán tài khoản số/AI: catalog provider, ví Binance Pay USDT, đơn hàng, admin, báo cáo kế toán; 19 file kế hoạch + runbook. 157 commit (09–10/2026) |
| **Web360** — The Opaline Gazette | Go, Uber FX, gqlgen + DataLoader, PostgreSQL JSONB, Redis, RSS crawler; Next.js 16 | Nền tảng tin tức headless, sitemap > 50k URL, JSON-LD; PRD + 11 hướng dẫn vận hành |
| **CodeBaseGo** (Toancanh360) | Go, Gin, Wire, gqlgen, JWT | Template backend module hóa, tự discover module |
| **learnCode** | Go + Gin, GORM, Redis, Judge0; Next.js + Monaco | Clone LeetCode / online judge, JWT + OTP 2FA + Google OAuth |
| **OpenDox** / Opendox-client | FastAPI, SQLAlchemy, PaddleOCR; Next.js 15, pdf.js, pdf-lib | SaaS dịch tài liệu / công cụ PDF trên trình duyệt |
| **ThreeJS portfolio** | three.js, Vite, Blender (Python bake) | Phòng neon 3D, hướng dẫn Blender |
| **courseraTranslate** | Chrome extension | Dịch phụ đề Coursera EN → VI |
| **VNNewsCrawler** | Python, BeautifulSoup, Render | Thêm crawler báo Đức |
| Khác | Go cơ bản, Docker, Linux, n8n, AI agent (automaton fork, SETUP-AGENT) | Học tập / thử nghiệm |
