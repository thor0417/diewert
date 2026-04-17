/**
 * Gordon L. Diewert Foundation — Student Hunger Canada
 * JS: scroll reveal, FAQ accordion, donation amount selector
 * Proof points from CLAUDE.md — all copy is real, not placeholder.
 */

/* ── Scroll Reveal ── */
(function initScrollReveal() {
  const targets = document.querySelectorAll('.fade-up');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => observer.observe(el));
})();


/* ── FAQ Accordion ── */
(function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all
      items.forEach((other) => {
        other.classList.remove('is-open');
        const a = other.querySelector('.faq-answer');
        if (a) a.style.maxHeight = '0';
        const b = other.querySelector('.faq-question');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      // Toggle open
      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();


/* ── Donation Amount Selector ── */
(function initDonation() {
  const amountBtns = document.querySelectorAll('.amount-btn');
  const impactEl   = document.getElementById('donate-impact-text');
  const donateBtn  = document.getElementById('btn-donate-main');
  const donateLabel = document.getElementById('donate-btn-label');
  if (!amountBtns.length) return;

  // Real proof points from CLAUDE.md
  const impactMap = {
    5:   'provides <strong>a nutritious grocery order</strong> for a student in need.',
    25:  'funds <strong>5 grocery orders</strong> — one per school day for a week.',
    50:  'covers <strong>a student\'s groceries for two weeks</strong>, chosen by them.',
    100: 'supports <strong>a student\'s food for a full month</strong> — with dignity.',
    250: 'helps <strong>50 students</strong> with a nourishing grocery order each.',
  };

  let selected = 50;

  function updateImpact(amount) {
    if (!impactEl) return;
    const copy = impactMap[amount];
    impactEl.innerHTML = copy
      ? '$' + amount + ' ' + copy
      : 'Every dollar goes directly to student grocery support.';
  }

  function updateDonateLink(amount) {
    if (!donateBtn) return;
    const base = donateBtn.dataset.baseUrl || 'https://diewert.org/donations/fundraising-campaign/';
    const sep  = base.includes('?') ? '&' : '?';
    donateBtn.href = base + sep + 'amount=' + amount;
    donateBtn.setAttribute('aria-label', 'Donate $' + amount + ' to the Diewert Foundation');
    if (donateLabel) donateLabel.textContent = 'Donate $' + amount;
  }

  // Init
  amountBtns.forEach((btn) => {
    const val = parseInt(btn.dataset.amount, 10);
    btn.setAttribute('aria-pressed', val === selected ? 'true' : 'false');
    if (val === selected) btn.classList.add('is-active');

    btn.addEventListener('click', () => {
      selected = val;
      amountBtns.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      updateImpact(selected);
      updateDonateLink(selected);
    });
  });

  updateImpact(selected);
  updateDonateLink(selected);
})();


/* ── Logo image fallback ── */
(function initLogoFallback() {
  const logoImg = document.getElementById('logo-img');
  const logoFallback = document.getElementById('logo-fallback');
  if (!logoImg || !logoFallback) return;

  logoImg.addEventListener('error', () => {
    logoImg.style.display = 'none';
    logoFallback.style.display = 'block';
  });
})();


/* ── Smooth anchor scroll with sticky header offset ── */
(function initSmoothScroll() {
  const HEADER_OFFSET = 72; // matches sticky header height

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id     = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
})();


/* ── Footer year ── */
(function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();