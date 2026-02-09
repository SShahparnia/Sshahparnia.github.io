// Smooth scroll for anchor links (respects nav height)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id === '#') return;
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const STORAGE_KEY = 'shervan-site-theme';

function setDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
  try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (_) {}
}

function initTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') setDarkMode(true);
    else if (saved === 'light') setDarkMode(false);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDarkMode(true);
  } catch (_) {}
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark'));
  });
}

initTheme();
