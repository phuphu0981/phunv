#!/usr/bin/env python3
"""Render cv-nguyen-van-phu.md into public/cv/nguyen-van-phu-cv-{en,vi}.pdf (single-column, ATS-friendly).

Usage: python3 scripts/build-cv.py [cv-nguyen-van-phu-v2.md]   (needs google-chrome on PATH and network for Google Fonts)
  A source named cv-nguyen-van-phu<suffix>.md writes nguyen-van-phu-cv-{en,vi}<suffix>.pdf.

Source format per language section:
  **NAME** / title line / contact line / summary, then `### SECTION` blocks.
  Role line:   **Org** — role · place — dates
  Skill item:  - **Label:** values
  Project:     - **Name** ([link](url)) — stack. Description
  Job item:    - **Project (context):** what was done
  Table:       | Head | Head | rows; `<br>` in the first cell puts the rest on muted lines,
               in other cells it splits the text into bullets
  Page break:  a `---` line
"""
import html, re, subprocess, sys, tempfile, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / (sys.argv[1] if len(sys.argv) > 1 else 'cv-nguyen-van-phu.md')
OUT = ROOT / 'public' / 'cv'

FONTS = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=block'

CSS = """
:root {
  --ink: #16202a;
  --text: #2f3943;
  --muted: #6c7682;
  --accent: #1d5c63;
  --rule: #d9dfe4;
}
@page { size: A4; margin: 12mm 15mm 11mm; }
* { box-sizing: border-box; }
body {
  margin: 0; color: var(--text);
  font: 400 8.9pt/1.5 'Be Vietnam Pro', 'Noto Sans', sans-serif;
  font-feature-settings: 'tnum' 0, 'kern' 1;
  -webkit-print-color-adjust: exact;
}
b { font-weight: 600; color: var(--ink); }
a { color: inherit; text-decoration: none; }

header { padding-bottom: 8pt; margin-bottom: 8pt; border-bottom: 1.2pt solid var(--accent); }
h1 { margin: 0; padding-top: 2pt; font-size: 23pt; line-height: 1.3; font-weight: 600; letter-spacing: .01em; color: var(--ink); }
.title { margin: 3pt 0 6pt; font-size: 10pt; font-weight: 500; color: var(--accent); letter-spacing: .02em; }
.contact { margin: 0; font-size: 8pt; color: var(--muted); }
.contact .link { color: var(--text); font-weight: 400; }
.contact .sep { color: var(--rule); margin: 0 3pt; }
.summary { margin: 0; color: var(--text); text-align: justify; }

h2 {
  display: flex; align-items: center; gap: 8pt;
  margin: 11.5pt 0 5pt; font-size: 7.8pt; font-weight: 600;
  letter-spacing: .16em; text-transform: uppercase; color: var(--accent);
}
h2::after { content: ''; flex: 1; border-top: .6pt solid var(--rule); }

.role { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; margin: 8pt 0 2pt; }
.role .what { color: var(--muted); }
.role .what b { font-size: 9.2pt; }
.role .when { flex: none; font-size: 8pt; color: var(--muted); font-variant-numeric: tabular-nums; }
h2 + .role { margin-top: 0; }

ul { list-style: none; margin: 0 0 2pt; padding: 0; }
li { position: relative; padding-left: 10pt; margin: 0 0 1.8pt; }
li::before {
  content: ''; position: absolute; left: 1pt; top: .52em;
  width: 3pt; height: 3pt; border-radius: 50%; background: var(--accent);
}
.ctx { color: var(--muted); font-weight: 400; }
.stack { color: var(--muted); }
.link { color: var(--accent); font-weight: 500; }

.skills li { display: grid; grid-template-columns: 29mm 1fr; padding-left: 0; margin-bottom: 1.2pt; }
.skills li::before { display: none; }
.nw { white-space: nowrap; }
.page-break { break-before: page; }
.page-break + h2 { margin-top: 0; }
h2, .role, thead { break-after: avoid; }
li, tr, .role { break-inside: avoid; }

table { width: 100%; border-collapse: collapse; margin: 2pt 0 0; }
th {
  text-align: left; padding: 0 0 2pt; line-height: 1.2; border-bottom: .8pt solid var(--accent);
  font-size: 7pt; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--muted);
}
td { vertical-align: top; padding: 2.8pt 0; font-size: 8.8pt; line-height: 1.43; border-bottom: .5pt solid var(--rule); }
tr:last-child td { border-bottom: none; }
th:first-child, td:first-child { width: 38mm; padding-right: 9pt; }
td:first-child .ctx { font-size: 7.4pt; }
td li { margin: 0 0 .8pt; }
td li:last-child { margin-bottom: 0; }
"""


def inline(text):
    text = html.escape(text, quote=False)
    text = re.sub(r'\[(.+?)\]\((.+?)\)', r'<a class="link" href="\2">\1</a>', text)
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    # keep hyphenated words (multi-supplier) on one line; leave tag attributes alone
    return re.sub(r'(<[^>]+>)|(\w+(?:-\w+)+)', lambda m: m[1] or f'<span class="nw">{m[2]}</span>', text)


def item(line, section):
    m = re.match(r'\*\*(.+?):\*\* (.*)', line)
    if section == 'skills' and m:
        return f'<li><b>{inline(m[1])}</b><span>{inline(m[2])}</span></li>'
    m = re.match(r'\*\*(.+?) \((.+)\):\*\* (.*)', line)
    if m:  # job item: muted context in parentheses
        return f'<li><b>{inline(m[1])}</b> <span class="ctx">({inline(m[2])})</span>: {inline(m[3])}</li>'
    m = re.match(r'(\*\*.+?\*\*(?: \(\[.+?\]\(.+?\)\))?) — (.+?)\. (.*)', line)
    if m:  # project: muted tech stack
        return f'<li>{inline(m[1])} <span class="stack">· {inline(m[2])}</span> — {inline(m[3])}</li>'
    return f'<li>{inline(line)}</li>'


def cell(text, tag, col=0):
    parts = [inline(p) for p in text.split('<br>')]
    if col and len(parts) > 1:  # later columns: one bullet per <br>-separated part
        return f'<{tag}><ul>' + ''.join(f'<li>{p}</li>' for p in parts) + f'</ul></{tag}>'
    return f'<{tag}>{parts[0]}' + ''.join(f'<br><span class="ctx">{p}</span>' for p in parts[1:]) + f'</{tag}>'


def table(lines):
    rows = [[c.strip() for c in l.strip().strip('|').split('|')] for l in lines]
    head = ''.join(cell(c, 'th') for c in rows[0])
    body = ''.join('<tr>' + ''.join(cell(c, 'td', i) for i, c in enumerate(r)) + '</tr>' for r in rows[2:])
    return f'<table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table>'


def render(md):
    blocks = md.strip().split('\n\n')
    name, title, contact, summary, rest = blocks[0], blocks[1], blocks[2], blocks[3], blocks[4:]
    sep = '<span class="sep">|</span>'
    out = ['<header>', f'<h1>{html.escape(name.strip("*"))}</h1>',
           f'<p class="title">{inline(title)}</p>',
           f'<p class="contact">{sep.join(f"<span class=nw>{inline(c)}</span>" for c in contact.split(" · "))}</p>',
           '</header>']
    out.append(f'<p class="summary">{inline(summary)}</p>')
    section = ''
    for block in rest:
        lines = block.splitlines()
        if block == '---':
            out.append('<div class="page-break"></div>')
        elif block.startswith('### '):
            section = 'skills' if block[4:] in ('SKILLS', 'KỸ NĂNG') else ''
            out.append(f'<h2>{inline(block[4:])}</h2>')
        elif lines[0].startswith('|'):
            out.append(table(lines))
        elif lines[0].startswith('- '):
            out.append(f'<ul class="{section}">' + ''.join(item(l[2:], section) for l in lines) + '</ul>')
        elif m := re.fullmatch(r'(\*\*.+?\*\*) — (.+) — (.+)', block):
            out.append(f'<div class="role"><span class="what">{inline(m[1])} · {inline(m[2])}</span>'
                       f'<span class="when">{inline(m[3])}</span></div>')
        else:
            out.append(f'<p>{inline(block)}</p>')
    return '\n'.join(out)


def main():
    # "## English CV" and "## CV tiếng Việt" sections, in that order
    parts = re.split(r'^## .+$', SRC.read_text(), flags=re.M)[1:]
    OUT.mkdir(parents=True, exist_ok=True)
    for lang, md in zip(('en', 'vi'), parts):
        doc = (f'<!doctype html><html lang="{lang}"><meta charset="utf-8"><title>Nguyễn Văn Phú — CV</title>'
               f'<link rel="stylesheet" href="{FONTS}"><style>{CSS}</style><body>{render(md)}</body></html>')
        with tempfile.NamedTemporaryFile('w', suffix='.html', delete=False) as f:
            f.write(doc)
        pdf = OUT / f'nguyen-van-phu-cv-{lang}{SRC.stem.removeprefix("cv-nguyen-van-phu")}.pdf'
        # virtual time budget lets the web font finish loading before printing
        subprocess.run(['google-chrome', '--headless', '--disable-gpu', '--no-pdf-header-footer',
                        '--virtual-time-budget=10000', f'--print-to-pdf={pdf}', f'file://{f.name}'],
                       check=True, capture_output=True)
        print(pdf.relative_to(ROOT))


if __name__ == '__main__':
    main()
