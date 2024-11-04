document.addEventListener('DOMContentLoaded', function() {

  const themeBtn = document.getElementById('themeBtn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  function setTheme(isDark) {
      document.body.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
      setTheme(storedTheme === 'dark');
  } else {
      setTheme(prefersDark.matches);
  }  
  themeBtn.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('dark'));
  });
})  
