# CV — Nguyen Van Phu (EN / VI)

## English CV

**Nguyễn Văn Phú**

Backend Developer · PHP & Go

Ha Noi, Vietnam · +84 976 914 076 · phu0908204@gmail.com · [github.com/phuphu0981](https://github.com/phuphu0981) · [LinkedIn](https://www.linkedin.com/in/nguyen-phu-5514a8412/) · [phunv-delta.vercel.app](https://phunv-delta.vercel.app/)

Backend developer with nearly two years building e-commerce and CMS systems in PHP (Magento 2, Laravel, WordPress) and Go. At Magenest I take client modules from API design to production, and on the side I run my own products live. My goal is to grow into a backend engineer who owns system design, performance and security at scale.

### SKILLS

- **Languages:** PHP, Go, TypeScript / JavaScript, Python
- **Backend:** Magento 2 / Adobe Commerce, Laravel 11, WordPress (WPGraphQL), Gin, GoFr, FastAPI, Node.js
- **APIs & Database:** GraphQL, REST, MCP, MySQL, PostgreSQL, Redis, Kafka, Elasticsearch
- **DevOps:** Docker Compose, Nginx, Linux VPS, Cloudflare Tunnel
- **Frontend & AI:** Next.js, React, Tailwind CSS, Claude Code

### WORK EXPERIENCE

**Magenest** — Backend Developer — Nov 2025 – Present

- **Vivy (Magento 2.4.9, headless GraphQL):** built a module that pulls the daily Vietcombank USD rate by cron into GraphQL prices; swapped full-page cache flushes for tag-based purges that fire only when the rate changes.
- **Oroca (Magento 2.4.8, B2B/B2C):** built a clinic lead module (REST + GraphQL, admin grid, alerts) and B2B VAT invoicing; queued product-label indexing; added stock-aware limits for bundle, grouped, configurable items.
- **AI Cypher (Magento AI add-on):** built “Frequently Bought Together” end to end: cart and order tracking, CSV feed to the AI recommender, best-seller fallback, cron sync with retries, dead-letter queue with alerts.
- **ACE Platform (Go microservice):** built a search service that streams Kafka events into OpenSearch 2.19: search / suggest API, CLI for reindex and DLQ retry, tests gated at 80% coverage in GitLab CI.
- **Fulbright University Vietnam (headless WordPress):** co-built the Page Builder backend (revisions, slug locks, rate limiting, token-revoke logout), a translation API and GraphQL schema for courses, majors, people, events.
- **OpsCore (WordPress / Elementor):** built the company site as a theme and two plugins: editable Elementor widgets, a filterable case-study post type, and a lead form that validates per field and sends leads to the Odoo CRM API.
- **Magento extensions:** Moneris Payment v2.5.2 (fixed 3DS account takeover and forged payment confirmation from a client security report; 2.4.7 support) · Abandoned Cart, Gift Card Plus, Popup (to 2.4.8 / PHP 8.4; Mandrill to Mailchimp Transactional) · Vietmap API, Google Map API (Vietmap, Goong) · Event Ticket (client support).

**HQ Group JSC** — Backend Developer, Intern to Junior — Feb 2025 – Oct 2025

- Linked the ClickUp API to a Laravel KPI dashboard, automating 100% of weekly progress reports.
- Built a payroll module (base salary + affiliate revenue share), cutting manual calculation work by 80%.
- Built stock-in, stock-out and balance tracking kept in sync across the main warehouse and branches.

**CoreSys Company** — Backend Developer, Laravel — Jan 2025

- Built [coresyscompany.com](https://coresyscompany.com) on Laravel MVC: Cloudinary media storage, automated emails, content admin.

---

### PROJECTS

- **Kerrax** ([kerrax.com](https://kerrax.com)) — Go, Gin, MySQL, Redis, Next.js 16, Docker. Live store for digital and AI accounts: multi-supplier catalog that auto-disables items once cost reaches price, Binance Pay USDT wallet, admin accounting reports, a TypeScript MCP server for AI agents; self-hosted on VPS with Nginx and Cloudflare Tunnel.
- **Second Brain** — Node.js, Express, MCP, SQLite FTS5, Docker. Team knowledge base: each member's AI agent ingests and queries a shared Markdown wiki over MCP; git-versioned writes with version checks so no one overwrites another's edits; full-text search and a knowledge graph UI.

### EDUCATION

**University of Transport Technology** — B.Sc. Information Technology · GPA 3.6/4.0 · Merit scholarship — 2022 – Present

## CV tiếng Việt

**Nguyễn Văn Phú**

Lập trình viên Backend · PHP & Go

Hà Nội, Việt Nam · +84 976 914 076 · phu0908204@gmail.com · [github.com/phuphu0981](https://github.com/phuphu0981) · [LinkedIn](https://www.linkedin.com/in/nguyen-phu-5514a8412/) · [phunv-delta.vercel.app](https://phunv-delta.vercel.app/)

Lập trình viên backend với gần hai năm kinh nghiệm xây dựng hệ thống thương mại điện tử và CMS bằng PHP (Magento 2, Laravel, WordPress) và Go. Tại Magenest, tôi phát triển module cho khách hàng từ khâu thiết kế API đến khi chạy production, đồng thời tự vận hành các sản phẩm riêng đang hoạt động thực tế. Mục tiêu của tôi là trở thành một backend engineer vững vàng về thiết kế hệ thống, hiệu năng và bảo mật cho các nền tảng thương mại quy mô lớn.

### KỸ NĂNG

- **Ngôn ngữ:** PHP, Go, TypeScript / JavaScript, Python
- **Backend:** Magento 2 / Adobe Commerce, Laravel 11, WordPress (WPGraphQL), Gin, GoFr, FastAPI, Node.js
- **API & Database:** GraphQL, REST, MCP, MySQL, PostgreSQL, Redis, Kafka, Elasticsearch
- **DevOps:** Docker Compose, Nginx, VPS Linux, Cloudflare Tunnel
- **Frontend & AI:** Next.js, React, Tailwind CSS, Claude Code

### KINH NGHIỆM LÀM VIỆC

**Magenest** — Lập trình viên Backend — 11/2025 – nay

- **Vivy (Magento 2.4.9, headless GraphQL):** làm module lấy tỷ giá USD Vietcombank hằng ngày bằng cron và đưa vào giá GraphQL; thay việc xóa toàn bộ full-page cache bằng purge theo cache tag, chỉ chạy khi tỷ giá đổi.
- **Oroca (Magento 2.4.8, B2B/B2C):** làm module lead phòng khám (REST + GraphQL, admin grid) và hóa đơn VAT doanh nghiệp; đưa index nhãn sản phẩm vào queue; giới hạn mua theo tồn kho cho bundle, grouped, configurable.
- **AI Cypher (add-on AI cho Magento):** làm trọn module “Thường được mua cùng”: theo dõi giỏ và đơn hàng, feed CSV cho AI gợi ý, dự phòng bằng sản phẩm bán chạy, đồng bộ cron có retry, dead-letter queue kèm cảnh báo.
- **ACE Platform (microservice Go):** làm dịch vụ tìm kiếm nhận sự kiện Kafka đưa vào OpenSearch 2.19, có API search / suggest, CLI reindex và gửi lại tin lỗi, test chạy trên GitLab CI với ngưỡng coverage 80%.
- **Đại học Fulbright Việt Nam (WordPress headless):** cùng xây backend Page Builder (revision, khóa slug, rate limit, đăng xuất khi thu hồi token), API dịch trang và dữ liệu GraphQL cho khóa học, ngành, giảng viên, sự kiện.
- **OpsCore (WordPress / Elementor):** dựng website công ty gồm một theme và hai plugin: widget Elementor chỉnh được trong admin, post type case study có bộ lọc, form lead kiểm tra từng trường và đẩy lead sang API Odoo CRM.
- **Extension Magento:** Moneris Payment v2.5.2 (vá lỗi chiếm tài khoản qua 3DS và giả mạo xác nhận thanh toán theo báo cáo bảo mật của khách; hỗ trợ 2.4.7) · Abandoned Cart, Gift Card Plus, Popup (lên 2.4.8 / PHP 8.4; Mandrill sang Mailchimp Transactional) · Vietmap API, Google Map API (Vietmap, Goong) · Event Ticket (hỗ trợ khách).

**Công ty Cổ phần HQ Group** — Lập trình viên Backend, Thực tập đến Junior — 02/2025 – 10/2025

- Kết nối ClickUp API với dashboard KPI trên Laravel, tự động hóa 100% báo cáo tiến độ hằng tuần.
- Làm module tính lương (lương cứng + chia doanh thu affiliate), giảm 80% thao tác tính tay.
- Làm quản lý kho Nhập–Xuất–Tồn, đồng bộ giữa kho tổng và các chi nhánh.

**CoreSys Company** — Lập trình viên Backend, Laravel — 01/2025

- Làm [coresyscompany.com](https://coresyscompany.com) trên Laravel MVC: lưu media qua Cloudinary, email tự động, trang quản trị nội dung.

---

### DỰ ÁN

- **Kerrax** ([kerrax.com](https://kerrax.com)) — Go, Gin, MySQL, Redis, Next.js 16, Docker. Shop tài khoản số và tài khoản AI đang chạy thật: catalog nhiều nhà cung cấp tự tắt sản phẩm khi giá vốn chạm giá bán, ví USDT qua Binance Pay, báo cáo kế toán cho admin, MCP server TypeScript cho AI agent; tự vận hành trên VPS với Nginx và Cloudflare Tunnel.
- **Second Brain** — Node.js, Express, MCP, SQLite FTS5, Docker. Kho kiến thức cho team: AI agent của từng người nạp và hỏi wiki Markdown chung qua MCP; mỗi lần ghi được version bằng git và kiểm tra phiên bản để không ai ghi đè nội dung của người khác; tìm kiếm full-text và đồ thị kiến thức.

### HỌC VẤN

**ĐH Công nghệ Giao thông Vận tải** — Cử nhân Công nghệ Thông tin · GPA 3.6/4.0 · Học bổng — 2022 – nay
