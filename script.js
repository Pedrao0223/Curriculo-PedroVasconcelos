// Inicializa ícones Lucide e alternância de tema dentro da paleta oficial
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem('cv-theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      localStorage.setItem('cv-theme', nextTheme);
    });
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (themeLabel) {
      themeLabel.textContent = theme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
    }
  }
});
