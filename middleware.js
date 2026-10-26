// Password gate for the whole site (Vercel Routing Middleware).
// The password itself is not stored here — only a hash of a hash, so reading
// this file doesn't reveal it or let anyone forge the login cookie.
//
// To change the password, run:
//   node -e 'const c=require("crypto"),p="NEW PASSWORD".normalize("NFC");const k=c.createHash("sha256").update("es-cookie:"+p).digest("hex");console.log(c.createHash("sha256").update(k).digest("hex"))'
// and paste the result into CHECK below.
// To remove the password entirely, delete this file.

const CHECK = '629fcc510629dcf9bf18d31ab0502f2c72f2975fa3ff15e2624042d13c0d5047';
const COOKIE = 'es_access';
const LOGIN_PATH = '/__login';

// Files that stay public so link previews (WhatsApp, LinkedIn…) still show the cover.
const PUBLIC = ['/assets/img/og-image.png', '/favicon.svg', '/assets/img/apple-touch-icon.png', '/robots.txt'];

export const config = { matcher: '/:path*' };

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('');
}

function readCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return '';
}

function safeNext(value) {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') ? value : '/';
}

export default async function middleware(request) {
  const url = new URL(request.url);

  if (PUBLIC.includes(url.pathname)) return;

  // Login form submission
  if (url.pathname === LOGIN_PATH && request.method === 'POST') {
    const form = await request.formData();
    const password = String(form.get('password') || '').trim().normalize('NFC');
    const next = safeNext(String(form.get('next') || '/'));
    const token = await sha256('es-cookie:' + password);
    if ((await sha256(token)) === CHECK) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: next,
          'Set-Cookie': `${COOKIE}=${token}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return loginPage(next, true);
  }

  // Already unlocked?
  const token = readCookie(request, COOKIE);
  if (token && (await sha256(token)) === CHECK) {
    if (url.pathname === LOGIN_PATH) return Response.redirect(new URL('/', url), 303);
    return; // continue to the site
  }

  return loginPage(url.pathname === LOGIN_PATH ? '/' : url.pathname + url.search, false);
}

function loginPage(next, failed) {
  const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Eliana Sachs · אליענה זקס</title>
<meta property="og:title" content="Eliana Sachs — Leadership for a new generation">
<meta property="og:image" content="https://elianasachs.com/assets/img/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#091e5c">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  html,body{height:100%}
  body{margin:0;min-height:100svh;display:grid;place-items:center;padding:24px 16px;background:#091e5c;color:#fff;font-family:"Google Sans",system-ui,-apple-system,"Segoe UI",sans-serif;
    background-image:radial-gradient(800px 500px at 80% 10%,rgba(100,185,225,.22),transparent 60%),radial-gradient(700px 500px at 10% 100%,rgba(20,80,220,.35),transparent 60%)}
  .card{width:100%;max-width:420px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:32px;padding:40px 32px;text-align:center;backdrop-filter:blur(10px)}
  .mark{width:64px;height:64px;margin:0 auto 22px;border-radius:50%;border:1.5px solid #64b9e1;display:grid;place-items:center;color:#64b9e1;font-weight:700;font-size:22px;letter-spacing:-1px}
  h1{margin:0;font-size:34px;font-weight:700;letter-spacing:-.02em;line-height:1.05}
  h1 span{color:#64b9e1}
  p{margin:14px 0 0;color:#aebfdd;font-size:16px;line-height:1.5}
  form{margin-top:28px;display:grid;gap:12px}
  input{font-family:inherit;font-size:18px;font-weight:500;line-height:1.3;width:100%;padding:16px 18px;border-radius:16px;border:1.5px solid transparent;background:rgba(255,255,255,.08);color:#fff;text-align:center;outline:none}
  input:focus{border-color:#64b9e1;background:rgba(255,255,255,.11)}
  input::placeholder{color:rgba(255,255,255,.4)}
  button{font-family:inherit;font-size:17px;font-weight:700;line-height:1;padding:17px 24px;border-radius:999px;border:0;background:#fff;color:#091e5c;cursor:pointer}
  button:hover{background:#64b9e1}
  .err{color:#ffb4b4;font-size:15px;margin:4px 0 0}
  .en{display:block;direction:ltr;margin-top:4px}
</style>
</head>
<body>
  <main class="card">
    <div class="mark">ES</div>
    <h1>אליענה <span>זקס</span></h1>
    <p>האתר עדיין פרטי. הזינו סיסמה כדי להיכנס.<span class="en">This site is private. Enter the password to continue.</span><span class="en">Сайт пока закрыт. Введите пароль.</span></p>
    <form method="post" action="${LOGIN_PATH}">
      <input type="password" name="password" placeholder="סיסמה · Password · Пароль" autocomplete="current-password" autofocus required>
      <input type="hidden" name="next" value="${esc(next)}">
      <button type="submit">כניסה · Enter · Войти</button>
      ${failed ? '<p class="err">הסיסמה שגויה · Wrong password · Неверный пароль</p>' : ''}
    </form>
  </main>
</body>
</html>`;
  return new Response(html, {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  });
}
