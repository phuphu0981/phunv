// Single source of truth for the page copy. Sourced from cv-nguyen-van-phu-v2.md, kinh-nghiem-*.md and du-an-ca-nhan.md.
// Copy rules: each point opens with a concrete verb, says what was built, how, and why it mattered;
// numbers only where the source notes back them; no first-person voice, no hype adjectives.

export const PROFILE = {
  name: 'Nguyen Van Phu',
  role: 'Backend Developer',
  company: 'Magenest',
  location: 'Ha Noi, Vietnam',
  email: 'phu0908204@gmail.com',
  github: 'https://github.com/phuphu0981',
  linkedin: 'https://www.linkedin.com/in/nguyen-phu-5514a8412/',
  zalo: '0976914076',
  stack: ['Magento 2', 'Laravel', 'Go', 'WordPress', 'GraphQL', 'Kafka', 'Docker'],
};

// About slide rows: short- and long-term goals (the bio above them covers the current role); `vi` overrides apply when Vietnamese is on (see loc in lang.js)
export const TIMELINE = [
  {
    label: 'Short term', title: 'End-to-end ownership', period: '1–2 yrs',
    place: 'Lead Magento 2 and Go modules solo, from API design to production.',
    vi: {
      label: 'Ngắn hạn', title: 'Làm chủ trọn tính năng', period: '1–2 năm',
      place: 'Tự dẫn dắt module Magento 2 và Go từ thiết kế API đến production.',
    },
  },
  {
    label: 'Long term', title: 'Commerce at scale', period: '3–5 yrs',
    place: 'Own system design, performance and security for large commerce platforms.',
    vi: {
      label: 'Dài hạn', title: 'Thương mại quy mô lớn', period: '3–5 năm',
      place: 'Vững thiết kế hệ thống, hiệu năng và bảo mật cho nền tảng thương mại lớn.',
    },
  },
];

// Oldest first: the Experience helix carries them up one by one as the page scrolls down.
// metrics: [value, suffix, label]; counted up when the milestone comes into view
export const EXPERIENCE = [
  {
    company: 'UTT', role: 'B.Sc. Information Technology', period: '2022 —',
    line: 'University of Transport Technology. Holds a 3.6 / 4.0 GPA and earned the Excellent-grade scholarship in three semesters.',
    metrics: [[3.6, '', 'GPA / 4.0'], [3, '', 'scholarship semesters']],
    vi: {
      role: 'Cử nhân Công nghệ Thông tin',
      line: 'Đại học Công nghệ Giao thông Vận tải. GPA 3.6 / 4.0, ba học kỳ giành học bổng loại Xuất sắc.',
      metrics: [[3.6, '', 'GPA / 4.0'], [3, '', 'kỳ học bổng']],
    },
  },
  {
    company: 'CoreSys', role: 'Backend Developer — Laravel', period: '01/2025',
    line: 'Built coresyscompany.com on Laravel MVC, with Cloudinary media storage, automated emails and a content admin.',
    metrics: [],
    vi: { line: 'Xây dựng coresyscompany.com trên Laravel MVC: lưu media trên Cloudinary, email tự động và trang quản trị nội dung.' },
  },
  {
    company: 'HQ Group', role: 'Backend Developer — Laravel', period: '02/2025 — 10/2025',
    line: 'Automated weekly reporting end to end and cut manual payroll work by 80%, with Laravel tools for KPIs, salaries and stock.',
    metrics: [[100, '%', 'weekly reports automated'], [80, '%', 'less manual payroll work']],
    vi: {
      line: 'Tự động hóa toàn bộ báo cáo tuần và cắt 80% thao tác tính lương bằng các công cụ Laravel cho KPI, lương và kho.',
      metrics: [[100, '%', 'báo cáo tuần tự động'], [80, '%', 'bớt thao tác tính lương']],
    },
  },
  {
    company: 'Magenest', role: 'Backend Developer', period: '11/2025 — Now',
    line: 'Takes client modules from API design to production across Magento 2, headless WordPress and Go microservices.',
    metrics: [[7, '', 'client projects'], [3, '', 'platforms']],
    vi: {
      period: '11/2025 — nay',
      line: 'Đưa module cho khách hàng từ thiết kế API đến production trên Magento 2, WordPress headless và microservice Go.',
      metrics: [[7, '', 'dự án khách hàng'], [3, '', 'nền tảng']],
    },
  },
];

// [group, items]; group names are translated through UI.skillGroups
export const SKILLS = [
  ['Commerce', ['Magento 2', 'Adobe Commerce', 'PWA Studio', 'Plugins & observers', 'Queues & indexers']],
  ['Backend', ['PHP 8.4 · Laravel 11', 'Go · Gin · GoFr', 'Python · FastAPI', 'Node.js · MCP', 'REST · GraphQL']],
  ['Data', ['MySQL', 'PostgreSQL', 'Redis', 'Kafka', 'OpenSearch']],
  ['Ops & Quality', ['Docker Compose', 'Nginx · Linux VPS', 'Cloudflare Tunnel', 'GitLab CI · SonarQube', 'PHPStan · PHPCS']],
];

// UI copy. Rich lines are [text, emphasis] pairs so they can carry <em>/<b> without JSX here
export const UI = {
  en: {
    currently: 'Currently', basedIn: 'Based in', location: 'Ha Noi, Vietnam',
    nav: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact' },
    talk: 'Let’s talk', closeArchive: 'Close', explore: 'View projects',
    title: ['Backend', 'Developer'],
    quote: [['Builds commerce and CMS backends in '], ['PHP and Go', true], [', from API design to production.']],
    about: 'About',
    statement: [[['Code that ships,']], [['holds up in production', true]], [['and explains itself.']]],
    bio: 'I’m Phu, a backend developer in Ha Noi with nearly two years in PHP and Go. At Magenest I build Magento 2 modules, headless WordPress and Go microservices for clients. On the side I run my own store, Kerrax, live in production. I study IT at the University of Transport Technology, GPA 3.6 / 4.0.',
    work: 'Selected work', caseDetails: 'Details', architecture: 'How it works',
    experience: 'Experience',
    capabilities: 'Skills', capsTitle: [['Tools in '], ['daily use.', true]],
    skillGroups: ['Commerce', 'Backend', 'Data', 'Ops & Quality'],
    lab: 'Side projects',
    archive: 'All projects', projects: 'projects',
    archiveSub: 'Client work and side projects, some of them live. Drag to look around.',
    openArchive: 'See all projects',
    contact: 'Contact', backToTop: 'Back to top ↑',
    visitLive: 'Visit site', close: 'Close', downloadCv: 'Download CV (PDF)',
  },
  vi: {
    currently: 'Hiện tại', basedIn: 'Sống tại', location: 'Hà Nội, Việt Nam',
    nav: { work: 'Dự án', about: 'Giới thiệu', experience: 'Kinh nghiệm', contact: 'Liên hệ' },
    talk: 'Liên hệ', closeArchive: 'Đóng', explore: 'Xem dự án',
    title: ['Lập trình', 'Backend'],
    quote: [['Xây dựng backend thương mại điện tử và CMS bằng '], ['PHP và Go', true], [', từ thiết kế API đến production.']],
    about: 'Giới thiệu',
    statement: [[['Code lên production,']], [['chạy vững vàng,', true]], [['đọc vào là hiểu.']]],
    bio: 'Tôi là Phú, lập trình viên backend tại Hà Nội với gần hai năm làm PHP và Go. Ở Magenest, tôi xây dựng module Magento 2, WordPress headless và microservice Go cho khách hàng. Ngoài giờ, tôi tự vận hành Kerrax, một shop đang chạy thật. Tôi đang học Cử nhân CNTT tại Đại học Công nghệ Giao thông Vận tải, GPA 3.6 / 4.0.',
    work: 'Dự án tiêu biểu', caseDetails: 'Chi tiết', architecture: 'Cách hoạt động',
    experience: 'Kinh nghiệm',
    capabilities: 'Kỹ năng', capsTitle: [['Công cụ '], ['dùng hằng ngày.', true]],
    skillGroups: ['Thương mại điện tử', 'Backend', 'Dữ liệu', 'Vận hành & Chất lượng'],
    lab: 'Dự án cá nhân',
    archive: 'Tất cả dự án', projects: 'dự án',
    archiveSub: 'Dự án khách hàng và dự án cá nhân, có sản phẩm đang chạy thật. Kéo để xem.',
    openArchive: 'Xem tất cả dự án',
    contact: 'Liên hệ', backToTop: 'Lên đầu trang ↑',
    visitLive: 'Xem trang', close: 'Đóng', downloadCv: 'Tải CV (PDF)',
  },
};

// img: cover art slug in public/works/<img>-{400,640,1200}.webp (the gallery always uses it)
// shots: real screenshots in public/shots/<shot>-{800,1600}.webp, 1440×900 viewport; first one leads
// Featured cases show only their first three points on the Work slide, so the strongest go first
export const PROJECTS = [
  {
    title: 'Oroca B2B Commerce', featured: true, flow: ['Headless storefront', 'GraphQL', 'Magento 2.4.8', 'MySQL queues', 'Indexers'], year: 2026, kind: 'Magenest · Magento 2', img: 'obsidian-flow',
    summary: 'A Magento 2.4.8 store that sells to businesses and retail customers alike, with B2B checkout built on GraphQL.',
    points: [
      'Delivered B2B VAT invoicing over GraphQL, auto-filled from the buyer’s company account.',
      'Moved product-label indexing onto a message queue, taking the heavy lifting off the indexer.',
      'Built the Clinic Setup lead module end to end: REST + GraphQL APIs, file upload, admin grid and email alerts.',
      'Enforced stock-aware quantity limits for bundle, grouped and configurable products, plus back-in-stock alerts.',
      'Rebuilt the invoice PDF and added Vietnamese URL keys with 301 redirects, so old links still land on the right page.',
    ],
    stack: ['Magento 2.4.8', 'PHP 8.4', 'GraphQL', 'MySQL queues', 'dompdf'],
    vi: {
      summary: 'Web bán hàng Magento 2.4.8 phục vụ cả doanh nghiệp lẫn khách lẻ, luồng thanh toán B2B chạy trên GraphQL.',
      points: [
        'Triển khai hóa đơn VAT B2B qua GraphQL, tự điền từ tài khoản công ty của khách.',
        'Chuyển việc index nhãn sản phẩm sang message queue, gỡ phần việc nặng khỏi indexer.',
        'Xây dựng trọn module lead Clinic Setup: API REST + GraphQL, upload file, admin grid và email báo.',
        'Giới hạn số lượng đặt theo tồn kho cho sản phẩm bundle, grouped, configurable, kèm nút “báo khi có hàng”.',
        'Thiết kế lại PDF hóa đơn; thêm URL tiếng Việt không dấu kèm redirect 301, link cũ vẫn dẫn đúng trang.',
      ],
    },
  },
  {
    title: 'AI Bought Together', featured: true, flow: ['Storefront events', 'Observers', 'CSV feed', 'AI engine', 'Recommendations'], year: 2026, kind: 'Magenest · AI Cypher', img: 'neon-mirage',
    summary: 'Engineered the “Frequently Bought Together” Magento module end to end, from storefront tracking to AI suggestions.',
    points: [
      'Exported session, cart and order data as a CSV feed for the AI recommender.',
      'Hardened the sync with cron jobs, retries, a dead-letter queue, alerts and audit logs.',
      'Added an in-stock best-seller fallback for whenever the AI has no answer yet.',
      'Gave admins pin, block and manual-sync controls over every suggestion.',
    ],
    stack: ['Magento 2', 'Cron', 'Message queue', 'Dead-letter queue', 'AI API'],
    vi: {
      summary: 'Phát triển trọn module Magento “Thường được mua cùng”, từ tracking trên storefront đến gợi ý bằng AI.',
      points: [
        'Xuất dữ liệu phiên, giỏ hàng và đơn hàng thành feed CSV cho AI gợi ý.',
        'Gia cố đồng bộ bằng cron, retry, dead-letter queue, cảnh báo và audit log.',
        'Bổ sung dự phòng hàng bán chạy còn tồn kho cho lúc AI chưa có kết quả.',
        'Cho admin ghim, chặn và đồng bộ thủ công từng gợi ý.',
      ],
    },
  },
  {
    title: 'Vivy', year: 2026, kind: 'Magenest · Headless Magento', img: 'solar-veil',
    summary: 'A headless Magento 2.4.9 store whose GraphQL prices follow the daily Vietcombank USD rate.',
    points: [
      'Built the Vietcombank USD-rate module: daily cron sync, admin grid and prices served over GraphQL.',
      'Cut cache churn by purging GraphQL cache by tag, and only when the rate actually changes.',
      'Exposed policy pages and storefront popup settings through GraphQL.',
    ],
    stack: ['Magento 2.4.9', 'GraphQL', 'Cron', 'Cache tags'],
    vi: {
      kind: 'Magenest · Magento headless',
      summary: 'Web bán hàng Magento 2.4.9 headless, giá trả qua GraphQL bám theo tỷ giá USD Vietcombank mỗi ngày.',
      points: [
        'Xây dựng module tỷ giá USD Vietcombank: cron đồng bộ hằng ngày, admin grid và giá trả qua GraphQL.',
        'Giảm tải cache: chỉ purge cache GraphQL theo tag, và chỉ khi tỷ giá thật sự thay đổi.',
        'Mở GraphQL cho trang chính sách và cấu hình popup storefront.',
      ],
    },
  },
  {
    title: 'VietMap Service', year: 2026, kind: 'Magenest · Extension', img: 'lunar-echo',
    summary: 'A pluggable Magento map module: Vietmap and Goong sit behind one contract and swap in settings.',
    points: [
      'Designed one provider contract so Vietmap and Goong plug in side by side, chosen from admin.',
      'Shipped address search, autocomplete and route distance on the Vietmap API.',
      'Added Vietmap v4 as a third provider in the Google Map API extension, beside Google and Goong.',
      'Stored API keys encrypted and gave admins a live map preview before saving.',
    ],
    stack: ['Magento 2', 'DI / Strategy', 'Vietmap', 'Goong', 'RequireJS'],
    vi: {
      summary: 'Module bản đồ dạng plugin cho Magento: Vietmap và Goong dùng chung một contract, đổi ngay trong cài đặt.',
      points: [
        'Thiết kế một contract chung để Vietmap và Goong cắm song song, chọn nhà cung cấp từ admin.',
        'Triển khai tìm địa chỉ, gợi ý khi gõ và tính quãng đường bằng Vietmap API.',
        'Bổ sung Vietmap v4 làm nhà cung cấp thứ ba trong extension Google Map API, cạnh Google và Goong.',
        'Mã hóa API key và cho admin xem trước bản đồ trực tiếp trước khi lưu.',
      ],
    },
  },
  {
    title: 'Magento Extensions', year: 2026, kind: 'Magenest · Extensions', img: 'crystal-dawn',
    summary: 'Kept Magenest’s Magento extensions secure and current on Magento 2.4.8 and PHP 8.4, from security patches to releases.',
    points: [
      'Closed 3DS account-takeover and forged-payment holes in Moneris Payment v2.5.2.',
      'Migrated Abandoned Cart off the retired Mandrill SDK to Mailchimp Transactional.',
      'Upgraded Gift Card Plus to Magento 2.4.8 / PHP 8.4 and shipped release 1.1.3.',
      'Fixed admin priority validation in Popup and shipped the PHP 8.4-ready release 1.2.4.',
      'Reproduced a client’s Event Ticket bugs and traced them to a Magento version mismatch.',
    ],
    stack: ['Magento 2.4.7 – 2.4.8', 'PHP 8.4', 'Moneris 3DS', 'Mailchimp Transactional'],
    vi: {
      summary: 'Giữ các extension Magento của Magenest an toàn và luôn chạy trên Magento 2.4.8, PHP 8.4, từ vá bảo mật đến phát hành.',
      points: [
        'Vá lỗ hổng chiếm tài khoản 3DS và giả mạo thanh toán trong Moneris Payment v2.5.2.',
        'Chuyển Abandoned Cart khỏi SDK Mandrill đã ngừng hỗ trợ sang Mailchimp Transactional.',
        'Nâng cấp Gift Card Plus lên Magento 2.4.8 / PHP 8.4 và phát hành bản 1.1.3.',
        'Sửa validate độ ưu tiên ở admin của Popup, phát hành bản 1.2.4 sẵn sàng cho PHP 8.4.',
        'Tái hiện lỗi Event Ticket của khách và xác định nguyên nhân do lệch phiên bản Magento.',
      ],
    },
  },
  {
    title: 'Fulbright Page Builder', featured: true, flow: ['Editors', 'WordPress + ACF', 'WPGraphQL', 'Page Builder', 'Next.js'], year: 2026, kind: 'Magenest · Headless WordPress', img: 'glass-reverie',
    summary: 'Headless WordPress for Fulbright University Vietnam: editors build pages in WordPress, Next.js renders them.',
    points: [
      'Co-built the Page Builder backend: revisions, slug locks and rate limiting.',
      'Secured the editor so revoking a builder token also ends the admin session.',
      'Added a translation API that copies any page on demand with its own per-language slug.',
      'Delivered GraphQL types for courses, majors, people and events.',
      'Mapped roles and permissions for Microsoft Entra SSO sign-in.',
    ],
    stack: ['WordPress', 'WPGraphQL', 'ACF Pro', 'Polylang', 'Entra SSO', 'Next.js'],
    vi: {
      summary: 'WordPress headless cho Đại học Fulbright Việt Nam: biên tập viên dựng trang trong WordPress, Next.js hiển thị.',
      points: [
        'Đồng phát triển backend Page Builder: lưu phiên bản, khóa slug và giới hạn tần suất.',
        'Bảo mật trình soạn thảo: thu hồi token builder là phiên admin cũng bị đăng xuất.',
        'Thêm API dịch trang, tạo bản ngôn ngữ mới theo yêu cầu với slug riêng cho từng ngôn ngữ.',
        'Cung cấp GraphQL cho khóa học, ngành, giảng viên và sự kiện.',
        'Thiết lập vai trò và phân quyền cho đăng nhập Microsoft Entra SSO.',
      ],
    },
  },
  {
    title: 'OpsCore', year: 2026, kind: 'Magenest · WordPress', img: 'velvet-flux',
    summary: 'A company website on WordPress, built as a custom theme with dedicated site and leads plugins.',
    points: [
      'Built editable Elementor widgets and a case-study post type with filters.',
      'Wired the contact form into Odoo CRM, with validation on every field.',
    ],
    stack: ['WordPress', 'Elementor', 'PHP', 'Odoo CRM'],
    vi: {
      summary: 'Website công ty trên WordPress, gồm theme riêng và hai plugin chuyên cho site và leads.',
      points: [
        'Tạo widget Elementor chỉnh được trong admin và post type case study có bộ lọc.',
        'Kết nối form liên hệ với Odoo CRM, kiểm tra lỗi theo từng trường.',
      ],
    },
  },
  {
    title: 'Search Service', featured: true, flow: ['Upstream service', 'Kafka', 'Go consumer', 'OpenSearch', 'Search API'], year: 2026, kind: 'Magenest · Go microservice', img: 'silent-orbit',
    summary: 'A Go search service for the ACE platform that streams Kafka events into OpenSearch 2.19.',
    points: [
      'Built the Kafka consumer that keeps the OpenSearch index in step with upstream data.',
      'Shipped search and suggest REST APIs, plus an admin endpoint to rebuild the index.',
      'Held the code to an 80% coverage gate with unit and integration suites in GitLab CI.',
      'Wrote a CLI for status checks, reindexing and dead-letter retries.',
    ],
    stack: ['Go', 'GoFr', 'Kafka', 'OpenSearch', 'PostgreSQL'],
    vi: {
      summary: 'Dịch vụ tìm kiếm bằng Go cho nền tảng ACE, đưa sự kiện Kafka vào OpenSearch 2.19.',
      points: [
        'Xây dựng consumer Kafka giữ chỉ mục OpenSearch luôn khớp với dữ liệu nguồn.',
        'Cung cấp REST API search và suggest, cùng endpoint cho admin dựng lại chỉ mục.',
        'Giữ ngưỡng coverage 80% với bộ unit và integration test trên GitLab CI.',
        'Viết CLI kiểm tra trạng thái, reindex và gửi lại tin lỗi trong dead-letter queue.',
      ],
    },
  },
  {
    title: 'SM Markets PWA', year: 2026, kind: 'Magenest · Adobe Commerce', img: 'prism-haze',
    summary: 'A large Philippine grocery chain on Adobe Commerce and PWA Studio, with around 110 custom modules.',
    points: [
      'Revived the legacy PWA storefront on local machines so the whole team could build against it.',
      'Documented about 200 legacy modules in short notes, so new developers get up to speed faster.',
    ],
    stack: ['Adobe Commerce', 'PWA Studio', 'UPWARD', 'React'],
    vi: {
      summary: 'Chuỗi siêu thị lớn ở Philippines chạy Adobe Commerce và PWA Studio, khoảng 110 module riêng.',
      points: [
        'Khôi phục storefront PWA cũ chạy được trên máy local để cả team phát triển tiếp.',
        'Viết ghi chú ngắn cho khoảng 200 module cũ, giúp người mới nắm dự án nhanh hơn.',
      ],
    },
  },
  {
    title: 'Kerrax', link: 'https://kerrax.com', year: 2026, kind: 'Personal · Full stack', img: 'radiant-void',
    shots: ['preme', 'preme-product'],
    summary: 'A live store for digital and AI accounts, built and run solo, from database schema to VPS deploy.',
    points: [
      'Synced a multi-supplier catalog that auto-disables any item once its cost reaches the selling price.',
      'Integrated bank QR payments, a Binance Pay USDT wallet, the order flow and admin accounting reports.',
      'Exposed a TypeScript MCP server so AI agents can look up products and orders.',
      'Self-hosted on a VPS with Docker Compose, Nginx and Cloudflare Tunnel, with written backup and restore runbooks.',
    ],
    stack: ['Go', 'Gin', 'MySQL', 'Redis', 'Next.js 16', 'MCP'],
    vi: {
      kind: 'Cá nhân · Full stack',
      summary: 'Shop tài khoản số và AI đang chạy thật, một mình làm và vận hành, từ thiết kế database đến deploy VPS.',
      points: [
        'Đồng bộ catalog từ nhiều nhà cung cấp, tự tắt sản phẩm ngay khi giá vốn chạm giá bán.',
        'Tích hợp thanh toán QR ngân hàng, ví USDT qua Binance Pay, luồng đơn hàng và báo cáo kế toán cho admin.',
        'Cung cấp MCP server TypeScript để AI agent tra cứu sản phẩm và đơn hàng.',
        'Tự host trên VPS với Docker Compose, Nginx và Cloudflare Tunnel, có runbook sao lưu và khôi phục.',
      ],
    },
  },
  {
    title: 'Opaline Gazette', year: 2026, kind: 'Personal · Go GraphQL', img: 'eternal-glow', shots: ['web360'],
    summary: 'A headless news site that pulls articles from RSS feeds and is built to be found on Google.',
    points: [
      'Served a Go GraphQL API with batched loading, so one page never fires a query per item.',
      'Generated a sitemap index covering 50,000+ URLs, plus JSON-LD on every article.',
      'Wrote the PRD, architecture and 11 operations guides alongside the code.',
    ],
    stack: ['Go', 'gqlgen', 'PostgreSQL', 'Redis', 'Next.js'],
    vi: {
      kind: 'Cá nhân · Go GraphQL',
      summary: 'Trang tin tức headless tự lấy bài từ RSS, tối ưu SEO để Google dễ tìm thấy.',
      points: [
        'Dựng API GraphQL bằng Go có nạp dữ liệu theo lô, mỗi trang không phải truy vấn lặp từng bài.',
        'Sinh sitemap index cho hơn 50.000 URL, kèm JSON-LD trên mọi bài viết.',
        'Viết PRD, tài liệu kiến trúc và 11 hướng dẫn vận hành song song với code.',
      ],
    },
  },
  {
    title: 'learnCode', year: 2026, kind: 'Personal · Online judge', img: 'echo-bloom', shots: ['learncode-ide', 'learncode'],
    summary: 'A LeetCode-style judge: write code in the browser, run it in a sandbox, get graded instantly.',
    points: [
      'Ran every submission inside a Judge0 sandbox, isolated from the main server.',
      'Built a Monaco editor workspace with resizable panels, Google login and OTP two-step verification.',
    ],
    stack: ['Go', 'Gin', 'MySQL', 'Judge0', 'Next.js'],
    vi: {
      kind: 'Cá nhân · Online judge',
      summary: 'Trang chấm code kiểu LeetCode: viết code trên trình duyệt, chạy trong sandbox, có điểm ngay.',
      points: [
        'Chạy mọi bài nộp trong sandbox Judge0, cách ly khỏi server chính.',
        'Xây dựng khu viết code Monaco với panel kéo giãn, đăng nhập Google và xác thực hai bước OTP.',
      ],
    },
  },
  {
    title: 'OpenDox', link: 'https://opendox.vercel.app/', year: 2026, kind: 'Personal · Document SaaS', img: 'solar-veil', shots: ['opendox'],
    summary: 'Shipped 20+ PDF tools that run entirely in the browser, so files never leave the user’s device.',
    points: [
      'Merge, split, sign, redact and protect PDFs with pdf.js and pdf-lib, without a single upload.',
      'Built a FastAPI translation backend with OCR that keeps the original PDF or Word layout.',
    ],
    stack: ['Next.js 15', 'pdf.js', 'pdf-lib', 'FastAPI', 'PaddleOCR'],
    vi: {
      kind: 'Cá nhân · Document SaaS',
      summary: 'Ra mắt hơn 20 công cụ PDF chạy hoàn toàn trên trình duyệt, file không bao giờ rời máy người dùng.',
      points: [
        'Gộp, tách, ký, che và khóa PDF bằng pdf.js và pdf-lib, không cần tải file lên server.',
        'Xây dựng backend dịch tài liệu bằng FastAPI có OCR, giữ nguyên bố cục file PDF hoặc Word.',
      ],
    },
  },
  {
    title: 'Second Brain', year: 2026, kind: 'Personal · AI tooling', img: 'celestial-drift',
    summary: 'A team wiki that every member’s AI agent can feed and query over MCP.',
    points: [
      'Prevented lost edits with version-checked writes and full git history.',
      'Shipped full-text search on SQLite FTS5, a knowledge-graph view and a one-line installer.',
    ],
    stack: ['Node.js', 'Express', 'MCP', 'SQLite FTS5'],
    vi: {
      kind: 'Cá nhân · Công cụ AI',
      summary: 'Wiki cho team, AI agent của từng thành viên nạp và hỏi kiến thức qua MCP.',
      points: [
        'Chống mất nội dung: ghi có kiểm tra phiên bản, lưu toàn bộ lịch sử bằng git.',
        'Tích hợp tìm kiếm full-text trên SQLite FTS5, đồ thị kiến thức và cài đặt bằng một lệnh.',
      ],
    },
  },
  {
    title: 'HQ Group Systems', year: 2025, kind: 'HQ Group · Laravel', img: 'velvet-flux',
    summary: 'Internal Laravel tools that automated reporting and payroll and kept stock in sync.',
    points: [
      'Automated 100% of weekly reports by syncing ClickUp tasks into a KPI dashboard.',
      'Cut manual payroll work by 80% with a salary and affiliate revenue-share module.',
      'Designed stock-in / stock-out tracking kept in sync across the main warehouse and branches.',
      'Turned designs into responsive pages in Scrum sprints alongside BA and QA.',
    ],
    stack: ['Laravel', 'MySQL', 'ClickUp API'],
    vi: {
      summary: 'Bộ công cụ Laravel nội bộ tự động hóa báo cáo, tính lương và đồng bộ kho hàng.',
      points: [
        'Tự động hóa 100% báo cáo tuần bằng cách đồng bộ task ClickUp vào dashboard KPI.',
        'Cắt 80% thao tác tính lương với module lương cứng và chia doanh thu affiliate.',
        'Thiết kế quản lý Nhập – Xuất – Tồn đồng bộ giữa kho tổng và các chi nhánh.',
        'Chuyển thiết kế thành trang responsive theo sprint Scrum, phối hợp cùng BA và QA.',
      ],
    },
  },
  {
    title: 'News Crawler', year: 2026, kind: 'Personal · Python', img: 'shadow-tide', shots: ['crawl'],
    link: 'https://crawvnnews.onrender.com',
    summary: 'Brings headlines from Vietnamese and German newsrooms into one place.',
    points: ['Scrapes VnExpress, Dân Trí, VietNamNet and Süddeutsche Zeitung with parallel workers and date filters.'],
    stack: ['Python', 'BeautifulSoup', 'Docker'],
    vi: {
      kind: 'Cá nhân · Python',
      summary: 'Gom tin từ báo Việt Nam và báo Đức về một chỗ.',
      points: ['Thu thập tin từ VnExpress, Dân Trí, VietNamNet và Süddeutsche Zeitung, chạy song song nhiều luồng, lọc theo ngày đăng.'],
    },
  },
].map((p) => ({ ...p, src: (w) => `/works/${p.img}-${w}.webp`, shot: (s, w) => `/shots/${s}-${w}.webp` }));
