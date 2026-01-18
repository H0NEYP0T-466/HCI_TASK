document.addEventListener('DOMContentLoaded', () => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const form = $('#studentForm');
  const results = $('#results');
  const emptyState = $('#emptyState');
  const submitBtn = $('#submitBtn');
  const clearAllBtn = $('#clearAllBtn');
  const resultsCount = $('#resultsCount');
  const toast = $('#toast');
  const themeToggle = $('#themeToggle');

  const savedTheme = localStorage.getItem('sgc-theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
  updateToggleAria();

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('sgc-theme', next);
    updateToggleAria();
  });
  function updateToggleAria() {
    const isLight = (document.documentElement.getAttribute('data-theme') || 'dark') === 'light';
    themeToggle.setAttribute('aria-pressed', String(isLight));
  }

  function makeRipple(e, target) {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--rx', `${x}px`);
    target.style.setProperty('--ry', `${y}px`);
    target.classList.add('rippling');
    setTimeout(() => target.classList.remove('rippling'), 300);
  }
  ['click', 'keydown'].forEach(evt => {
    submitBtn.addEventListener(evt, (e) => {
      if (evt === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      if (evt === 'keydown') e.preventDefault();
      makeRipple(e instanceof MouseEvent ? e : { clientX: submitBtn.offsetWidth / 2, clientY: submitBtn.offsetHeight / 2 }, submitBtn);
    });
  });

  const nameInput = $('#name');
  const ageInput = $('#age');
  const marksInput = $('#marks');

  function setError(el, msg) {
    const err = (el.id === 'name') ? $('#nameError') : (el.id === 'age') ? $('#ageError') : $('#marksError');
    err.textContent = msg || '';
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }

  function validate() {
    let ok = true;
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const marksVal = marksInput.value.trim();

    if (!name) { setError(nameInput, 'Name is required.'); ok = false; }
    else if (name.length < 2) { setError(nameInput, 'Name is too short.'); ok = false; }
    else { setError(nameInput, ''); }

    if (!age) { setError(ageInput, 'Age is required.'); ok = false; }
    else if (!/^[a-z0-9\-_.]+$/i.test(age)) { setError(ageInput, 'Only letters, numbers, "-", "_" and "."'); ok = false; }
    else { setError(ageInput, ''); }

    if (marksVal === '') { setError(marksInput, 'Marks are required.'); ok = false; }
    else {
      const m = Number(marksVal);
      if (!Number.isFinite(m)) { setError(marksInput, 'Enter a valid number.'); ok = false; }
      else if (m < 0 || m > 100) { setError(marksInput, 'Marks must be 0 - 100.'); ok = false; }
      else { setError(marksInput, ''); }
    }
    return ok;
  }

  [nameInput, ageInput, marksInput].forEach(el => {
    el.addEventListener('input', () => setError(el, ''));
    el.setAttribute('placeholder', ' ');
  });

  function computeGrade(marks) {
    if (marks >= 90) return { grade: 'A+', note: 'Outstanding performance', badge: 'Top 10%' };
    if (marks >= 80) return { grade: 'A',  note: 'Excellent work',          badge: 'Distinction' };
    if (marks >= 70) return { grade: 'B',  note: 'Very good',                badge: 'Merit' };
    if (marks >= 60) return { grade: 'C',  note: 'Good',                     badge: 'Pass' };
    if (marks >= 50) return { grade: 'D',  note: 'Satisfactory',             badge: 'Pass' };
    return { grade: 'F', note: 'Needs improvement', badge: 'Retake' };
  }

  function initialsFromName(name) {
    const parts = name.trim().split(/\s+/).slice(0, 2);
    return parts.map(p => p[0]).join('').toUpperCase();
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2000);
  }

  function updateEmptyState() {
    const count = results.children.length;
    emptyState.setAttribute('aria-hidden', String(count > 0));
    emptyState.style.display = count > 0 ? 'none' : '';
    clearAllBtn.disabled = count === 0;
    resultsCount.textContent = count === 0 ? 'No results yet' : `${count} ${count === 1 ? 'result' : 'results'}`;
  }

  function createConfetti(container, color = 'var(--accent)', pieces = 12) {
    const wrap = document.createElement('div');
    wrap.className = 'confetti';
    for (let i = 0; i < pieces; i++) {
      const p = document.createElement('i');
      const left = 10 + Math.random() * 80;
      const delay = Math.random() * 0.2;
      const rotate = (Math.random() * 360) | 0;
      const size = 6 + (Math.random() * 6);
      p.style.left = `${left}%`;
      p.style.top = '10%';
      p.style.width = `${size}px`;
      p.style.height = `${size + 2}px`;
      p.style.background = i % 3 === 0 ? '#22d3ee' : (i % 3 === 1 ? '#f59e0b' : color);
      p.style.opacity = '0';
      p.animate([
        { transform: `translateY(-10px) rotate(${rotate}deg)`, opacity: 0 },
        { transform: `translateY(80px) rotate(${rotate + 120}deg)`, opacity: 1, offset: 0.2 },
        { transform: `translateY(120px) rotate(${rotate + 260}deg)`, opacity: 0.9, offset: 0.6 },
        { transform: `translateY(180px) rotate(${rotate + 420}deg)`, opacity: 0 }
      ], { duration: 1200 + Math.random()*300, delay: delay * 1000, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });
      wrap.appendChild(p);
    }
    container.appendChild(wrap);
    setTimeout(() => wrap.remove(), 1600);
  }

  function createCard({ name, age, marks, grade, note, badge }) {
    const card = document.createElement('article');
    card.className = 'student-card';
    card.dataset.grade = grade;

    const accent = document.createElement('div');
    accent.className = 'card-accent';
    card.appendChild(accent);

    const row = document.createElement('div');
    row.className = 'card-row';

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = initialsFromName(name);

    const main = document.createElement('div');
    main.className = 'card-main';
    const h3 = document.createElement('h3');
    h3.textContent = name;
    const sub = document.createElement('p');
    sub.className = 'card-sub';
    sub.textContent = `Age: ${age}`;
    main.append(h3, sub);

    const aside = document.createElement('div');
    aside.className = 'card-aside';
    const ring = document.createElement('div');
    ring.className = 'ring';
    ring.dataset.grade = grade;
    ring.style.setProperty('--progress', `${marks}%`);
    aside.appendChild(ring);

    row.append(avatar, main, aside);

    const meta = document.createElement('div');
    meta.className = 'meta';
    const marksEl = document.createElement('span');
    marksEl.textContent = `Marks: ${marks}`;
    const badgeEl = document.createElement('span');
    badgeEl.className = 'badge';
    badgeEl.textContent = `${grade} • ${badge}`;
    meta.append(marksEl, badgeEl);

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const celebrateBtn = document.createElement('button');
    celebrateBtn.className = 'icon-btn celebrate';
    celebrateBtn.type = 'button';
    celebrateBtn.setAttribute('aria-label', 'Celebrate');
    celebrateBtn.innerHTML = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 22l6-2 9-9-4-4-9 9-2 6zm14-14l3-3 3 3-3 3-3-3z" fill="currentColor"/></svg>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'icon-btn delete';
    deleteBtn.type = 'button';
    deleteBtn.setAttribute('aria-label', 'Delete');
    deleteBtn.innerHTML = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12l-1 14H7L6 7zm3-3h6l1 2H8l1-2z" fill="currentColor"/></svg>`;

    actions.append(celebrateBtn, deleteBtn);

    const noteEl = document.createElement('p');
    noteEl.className = 'card-sub';
    noteEl.style.marginTop = '4px';
    noteEl.textContent = note;

    card.append(row, meta, noteEl, actions);

    celebrateBtn.addEventListener('click', () => {
      createConfetti(card);
    });
    deleteBtn.addEventListener('click', () => {
      card.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(0.98)' }], { duration: 180, easing: 'ease' })
        .onfinish = () => {
          card.remove();
          updateEmptyState();
          showToast('Result removed');
        };
    });

    if (grade === 'A' || grade === 'A+') {
      setTimeout(() => createConfetti(card), 250);
    }

    return card;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fix the errors');
      return;
    }
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const marks = Number(marksInput.value.trim());

    const { grade, note, badge } = computeGrade(marks);
    const card = createCard({ name, age, marks, grade, note, badge });
    results.prepend(card);
    updateEmptyState();
    showToast(`Added ${name} • Grade ${grade}`);

    form.reset();
    [nameInput, ageInput, marksInput].forEach(el => el.blur());
  });

  clearAllBtn.addEventListener('click', () => {
    if (results.children.length === 0) return;
    const items = $$('.student-card', results);
    items.forEach((card, idx) => {
      card.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(6px)' }], { duration: 160 + idx * 30, easing: 'ease' })
        .onfinish = () => card.remove();
    });
    setTimeout(() => {
      updateEmptyState();
      showToast('All results cleared');
    }, 220 + items.length * 30);
  });

  updateEmptyState();
});