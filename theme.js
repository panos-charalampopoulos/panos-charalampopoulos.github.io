(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}

  function apply(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      if (btn) btn.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      if (btn) btn.textContent = '🌙';
    }
  }

  apply(saved === 'light' ? 'light' : 'dark');

  if (btn) {
    btn.addEventListener('click', function () {
      var isLight = root.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      apply(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
})();
