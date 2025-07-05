function applyTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  root.setAttribute('data-theme', savedTheme);
  if (toggle) {
    toggle.checked = savedTheme === 'dark';
  }
}

function toggleDarkMode() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const isDark = toggle.checked;

  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('change', toggleDarkMode);
  }
});


// theme.js

// Apply saved theme as early as possible to prevent FOUC
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.checked = savedTheme === 'dark';

  toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});
