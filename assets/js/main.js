/* Eliana Sachs — site behaviour */

// ---------------------------------------------------------------
// SETTINGS — edit these
// ---------------------------------------------------------------
const SETTINGS = {
  // Where inquiries go. Works immediately via the visitor's email app.
  email: 'contact@elianasachs.com',

  // Optional: paste a Formspree (https://formspree.io) form URL here,
  // e.g. 'https://formspree.io/f/abcdwxyz', and the form will send
  // directly without opening the visitor's email app.
  formEndpoint: '',

  // Optional: full Instagram URL. Leave empty to hide the link.
  instagram: '',
};

// ---------------------------------------------------------------
// MEDIA — newest first. tags: interview | politics | fashion | english
// ---------------------------------------------------------------
const MEDIA = [
  {
    date: { en: 'Sep 2026', he: 'ספטמבר 2026' },
    outlet: 'The Jerusalem Post', kind: { en: 'Politics', he: 'פוליטיקה' },
    title: { en: 'Yashar party unveils youth platform targeting living costs and IDF pay', he: 'ישר! חושפת את תוכנית הצעירים: יוקר המחיה ושכר החיילים' },
    url: 'https://www.jpost.com/israel-election-2026/article-910016', lang: 'EN', tags: ['politics', 'english'],
  },
  {
    date: { en: 'Sep 2026', he: 'ספטמבר 2026' },
    outlet: 'JNS', kind: { en: 'Politics', he: 'פוליטיקה' },
    title: { en: 'Eisenkot unveils Yashar electoral list ahead of Oct. 27 vote', he: 'איזנקוט חושף את רשימת ישר! לקראת הבחירות' },
    url: 'https://www.jns.org/news/israel-news/eisenkots-yashar-unveils-electoral-list-ahead-of-oct-27-vote', lang: 'EN', tags: ['politics', 'english'],
  },
  {
    date: { en: 'Aug 2026', he: 'אוגוסט 2026' },
    outlet: 'Walla!', kind: { en: 'Podcast interview', he: 'ראיון פודקאסט' },
    title: { en: '"I\'ll give everything to make it good here" — Walla Ishi with Maor Ben Harosh', he: '"אתן הכל שיהיה פה טוב" — וואלה אישי עם מאור בן הרוש' },
    url: 'https://celebs.walla.co.il/item/3861618', lang: 'HE', tags: ['interview', 'politics'],
  },
  {
    date: { en: 'Aug 2026', he: 'אוגוסט 2026' },
    outlet: 'Ynet', kind: { en: 'Interview', he: 'ראיון' },
    title: { en: 'Model Eliana Sachs enters politics: "I want to feel my tragedy was not in vain"', he: 'הדוגמנית אליענה זקס נכנסה לפוליטיקה: "רוצה להרגיש שהאסון שעברתי לא היה לחינם"' },
    url: 'https://www.ynet.co.il/fashion/article/yokra14866260', lang: 'HE', tags: ['interview', 'politics'],
  },
  {
    date: { en: 'Aug 2026', he: 'אוגוסט 2026' },
    outlet: 'Walla!', kind: { en: 'Interview', he: 'ראיון' },
    title: { en: '"It gives me drive to prove otherwise" — on the reactions to her appointment', he: '"זה נותן לי דרייב להוכיח אחרת" — על התגובות למינוי' },
    url: 'https://celebs.walla.co.il/item/3861678', lang: 'HE', tags: ['interview', 'politics'],
  },
  {
    date: { en: 'Jul 2026', he: 'יולי 2026' },
    outlet: 'Israel Hayom', kind: { en: 'Politics', he: 'פוליטיקה' },
    title: { en: 'Eisenkot\'s newest recruit: the 25-year-old who lost her mother and brother to an Iranian strike', he: 'המצטרפת הטרייה לאיזנקוט: בת ה־25 שאיבדה את אמה ואחיה בתקיפה איראנית' },
    url: 'https://www.israelhayom.co.il/news/politics/article/21069574', lang: 'HE', tags: ['politics'],
  },
  {
    date: { en: 'Jul 2026', he: 'יולי 2026' },
    outlet: 'Walla!', kind: { en: 'First report', he: 'פרסום ראשון' },
    title: { en: 'Model Eliana Sachs, who lost her mother and brother in the war with Iran, joins Gadi Eisenkot', he: 'הדוגמנית אליענה זקס, שאיבדה את אמה ואחיה במלחמה מול איראן, מצטרפת לגדי איזנקוט' },
    url: 'https://celebs.walla.co.il/item/3856386', lang: 'HE', tags: ['politics'],
  },
  {
    date: { en: 'Jul 2026', he: 'יולי 2026' },
    outlet: 'Maariv', kind: { en: 'Politics', he: 'פוליטיקה' },
    title: { en: 'After losing her mother and brother: Eliana Sachs joins Gadi Eisenkot', he: 'אחרי שאיבדה את אמה ואחיה במלחמה מול איראן: הדוגמנית אליענה זקס מצטרפת לגדי איזנקוט' },
    url: 'https://tmi.maariv.co.il/celebs-news/article-1349240', lang: 'HE', tags: ['politics'],
  },
  {
    date: { en: 'Jul 2026', he: 'יולי 2026' },
    outlet: 'Davar', kind: { en: 'Politics', he: 'פוליטיקה' },
    title: { en: 'Eliana Sachs joins Eisenkot\'s party and will head its youth headquarters', he: 'אליענה זקס מצטרפת למפלגתו של איזנקוט ותעמוד בראש מטה הצעירים' },
    url: 'https://www.davar1.co.il/690527/', lang: 'HE', tags: ['politics'],
  },
  {
    date: { en: 'Jul 2026', he: 'יולי 2026' },
    outlet: 'Channel 14', kind: { en: 'Politics', he: 'פוליטיקה' },
    title: { en: 'The model and social activist joining Eisenkot\'s party', he: 'הדוגמנית והפעילה החברתית שמצטרפת למפלגתו של איזנקוט' },
    url: 'https://www.c14.co.il/article/1635505', lang: 'HE', tags: ['politics'],
  },
  {
    date: { en: 'Mar 2026', he: 'מרץ 2026' },
    outlet: 'Channel 12 News', kind: { en: 'TV interview · Morning News with Niv Raskin', he: 'ראיון טלוויזיה · חדשות הבוקר עם ניב רסקין' },
    title: { en: 'The model who lost her mother and brother in the previous attack — and this time her home was hit', he: 'הדוגמנית שאיבדה את אימה ואחיה במתקפה הקודמת — והפעם ביתה נפגע' },
    url: 'https://www.mako.co.il/entertainment-celebs/local-2026/Article-b94efca0e56dc91026.htm', lang: 'HE', tags: ['interview'],
  },
  {
    date: { en: 'Mar 2026', he: 'מרץ 2026' },
    outlet: 'Ynet News', kind: { en: 'Feature', he: 'כתבה' },
    title: { en: 'Her mother and brother were killed by an Iranian missile, now her home is hit: "Why would this happen to me twice?"', he: 'אמה ואחיה נהרגו מטיל איראני, ועכשיו ביתה נפגע' },
    url: 'https://www.ynetnews.com/magazine/article/bj4czx3tzg', lang: 'EN', tags: ['interview', 'english'],
  },
  {
    date: { en: 'Oct 2025', he: 'אוקטובר 2025' },
    outlet: 'Ynet', kind: { en: 'Fashion Week', he: 'שבוע האופנה' },
    title: { en: 'A tribute on the runway: Eliana walks Shenkar\'s show in her brother Eitan\'s last design', he: 'מחווה על המסלול: אליענה צועדת בתצוגת שנקר בדגם האחרון של אחיה איתן' },
    url: 'https://www.ynet.co.il/fashion/article/s1xyxyryk11x', lang: 'HE', tags: ['fashion'],
  },
  {
    date: { en: 'Oct 2025', he: 'אוקטובר 2025' },
    outlet: 'Ynet News', kind: { en: 'Weekend Magazine', he: 'מוסף סוף השבוע' },
    title: { en: '"Half my family was wiped out": Model Eliana Sachs rebuilds life after losing mother, brother to Iranian missile', he: '"חצי מהמשפחה שלי נמחקה" — הגרסה האנגלית' },
    url: 'https://www.ynetnews.com/magazine/article/bkimh8oagx', lang: 'EN', tags: ['interview', 'fashion', 'english'],
  },
  {
    date: { en: 'Oct 2025', he: 'אוקטובר 2025' },
    outlet: 'Ynet', kind: { en: 'Weekend Magazine', he: 'מוסף סוף השבוע' },
    title: { en: '"Half my family was wiped out. I wake up every morning with a hole in my heart"', he: 'אליענה זקס: "חצי מהמשפחה שלי נמחקה. אני מתעוררת בכל בוקר עם חור בלב"' },
    url: 'https://www.ynet.co.il/fashion/article/b16ge48rex', lang: 'HE', tags: ['interview', 'fashion'],
  },
  {
    date: { en: 'Editorial', he: 'הפקה' },
    outlet: 'Fashion Gone Rogue', kind: { en: 'Fashion editorial', he: 'הפקת אופנה' },
    title: { en: '"Blue Your Mind" — Eliana Sachs by Shilat Mizrahi', he: '"Blue Your Mind" — אליענה זקס בעדשת שילת מזרחי' },
    url: 'https://fashiongonerogue.com/eliana-sachs-shilat-mizrahi-exclusive', lang: 'EN', tags: ['fashion', 'english'],
  },
];

// ---------------------------------------------------------------

(function () {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const TITLES = {
    en: 'Eliana Sachs — Speaker, Public Leader, Voice of Israel\'s Next Generation',
    he: 'אליענה זקס — מרצה, מנהיגה ציבורית, קול הדור הבא של ישראל',
  };

  // ---------- Language ----------
  function setLang(lang, save) {
    root.lang = lang;
    root.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.title = TITLES[lang];
    $$('[data-set-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setLang === lang)));
    $$('[data-ph-en]').forEach(el => { el.placeholder = el.dataset['ph' + (lang === 'he' ? 'He' : 'En')]; });
    $$('option[data-en]').forEach(o => { o.textContent = o.dataset[lang]; });
    renderMedia();
    if (save) { try { localStorage.setItem('es-lang', lang); } catch (e) {} }
  }
  $$('[data-set-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.setLang, true)));

  // ---------- Media list ----------
  let mediaFilter = 'all';
  function renderMedia() {
    const list = $('#media-list');
    if (!list) return;
    const lang = root.lang === 'he' ? 'he' : 'en';
    const arrow = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 13L13 5M6 5h7v7"/></svg>';
    list.innerHTML = MEDIA.map(m => {
      const hidden = mediaFilter !== 'all' && !m.tags.includes(mediaFilter);
      return `<li class="media-item"${hidden ? ' hidden' : ''}>
        <a href="${m.url}" target="_blank" rel="noopener">
          <span class="media-date">${m.date[lang]}</span>
          <span class="media-outlet">${m.outlet}<small>${m.kind[lang]}</small></span>
          <span class="media-title">${m.title[lang]}<span class="lang-note">${m.lang}</span></span>
          <span class="media-go">${arrow}</span>
        </a></li>`;
    }).join('');
  }
  $$('[data-filter]').forEach(b => b.addEventListener('click', () => {
    mediaFilter = b.dataset.filter;
    $$('[data-filter]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    renderMedia();
  }));

  // ---------- Header & menu ----------
  const header = $('.header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const menuBtn = $('.menu-btn');
  const closeMenu = () => { document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  $$('.nav a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // Active nav link
  const navLinks = $$('.nav a[href^="#"]:not(.btn)');
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach(a => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });
  }

  // ---------- Reveal on scroll ----------
  const reveals = $$('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  // ---------- Photos: show monogram until a real photo loads ----------
  $$('[data-photo]').forEach(frame => {
    const img = $('img', frame);
    const ok = () => frame.classList.add('has-img');
    const bad = () => { img.remove(); };
    if (img.complete && img.naturalWidth) ok();
    else { img.addEventListener('load', ok); img.addEventListener('error', bad); }
    if (img.complete && !img.naturalWidth) bad();
  });

  // Gallery appears only once at least one photo exists
  const portfolio = $('#portfolio');
  if (portfolio) {
    $$('.gallery img', portfolio).forEach(img => {
      const show = () => { portfolio.hidden = false; };
      const drop = () => img.closest('figure').remove();
      if (img.complete) { img.naturalWidth ? show() : drop(); }
      else { img.addEventListener('load', show); img.addEventListener('error', drop); }
    });
  }

  // ---------- Quotes ----------
  const quotes = $$('.quote');
  const dots = $('.quote-dots');
  let qi = 0, timer;
  function showQuote(i) {
    qi = (i + quotes.length) % quotes.length;
    quotes.forEach((q, k) => q.classList.toggle('is-active', k === qi));
    $$('button', dots).forEach((d, k) => d.setAttribute('aria-current', String(k === qi)));
  }
  quotes.forEach((_, k) => {
    const d = document.createElement('button');
    d.type = 'button';
    d.setAttribute('aria-label', 'Quote ' + (k + 1));
    d.addEventListener('click', () => { showQuote(k); restart(); });
    dots.appendChild(d);
  });
  function restart() { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => showQuote(qi + 1), 6500); }
  showQuote(0); restart();

  // ---------- Contact form ----------
  const form = $('#contact-form');
  const status = $('#form-status');
  const eventFields = $('#event-fields');
  const t = (en, he) => (root.lang === 'he' ? he : en);

  function syncInquiry() {
    const v = form.inquiry.value;
    eventFields.hidden = v !== 'Lecture booking';
  }
  $$('input[name="inquiry"]', form).forEach(r => r.addEventListener('change', syncInquiry));

  // Links like "Book a lecture" preselect the inquiry type
  $$('[data-inquiry]').forEach(a => a.addEventListener('click', () => {
    const map = { lecture: 'Lecture booking', media: 'Media' };
    const r = $(`input[name="inquiry"][value="${map[a.dataset.inquiry]}"]`, form);
    if (r) { r.checked = true; syncInquiry(); }
  }));

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form._gotcha.value) return; // bot
    const data = Object.fromEntries(new FormData(form).entries());
    delete data._gotcha;

    if (!data.name.trim() || !/^\S+@\S+\.\S+$/.test(data.email) || !data.message.trim()) {
      status.textContent = t('Please fill in your name, a valid email and a message.', 'נא למלא שם, אימייל תקין והודעה.');
      return;
    }

    const btn = $('button[type="submit"]', form);
    btn.disabled = true;

    if (SETTINGS.formEndpoint) {
      try {
        const res = await fetch(SETTINGS.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...data, _subject: `[elianasachs.com] ${data.inquiry} — ${data.name}` }),
        });
        if (!res.ok) throw new Error(res.status);
        form.reset(); syncInquiry();
        status.textContent = t('Thank you — your message has been sent. Eliana\'s team will be in touch soon.', 'תודה! ההודעה נשלחה, והצוות של אליענה יחזור אליכם בהקדם.');
      } catch (err) {
        status.textContent = t('Something went wrong. Please email us directly at ', 'משהו השתבש. אפשר לכתוב לנו ישירות ל־') + SETTINGS.email;
      }
      btn.disabled = false;
      return;
    }

    // No endpoint set: open the visitor's email app with everything filled in.
    const labels = { inquiry: 'Inquiry', name: 'Name', email: 'Email', organization: 'Organization', phone: 'Phone', event_date: 'Event date', location: 'Location', audience: 'Audience', audience_size: 'Audience size', message: 'Message' };
    const body = Object.keys(labels).filter(k => data[k]).map(k => `${labels[k]}: ${data[k]}`).join('\n');
    const subject = `${data.inquiry} — ${data.name}${data.organization ? ' (' + data.organization + ')' : ''}`;
    window.location.href = `mailto:${SETTINGS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = t('Your email app should open with the message ready to send.', 'אפליקציית המייל אמורה להיפתח עם ההודעה מוכנה לשליחה.');
    btn.disabled = false;
  });

  // ---------- Misc ----------
  $$('.js-email').forEach(a => { a.href = 'mailto:' + SETTINGS.email; a.textContent = SETTINGS.email; });
  if (SETTINGS.instagram) $$('.js-instagram').forEach(a => { a.href = SETTINGS.instagram; a.hidden = false; });
  $('#year').textContent = new Date().getFullYear();

  setLang(root.lang === 'he' ? 'he' : 'en', false);
  syncInquiry();
})();
