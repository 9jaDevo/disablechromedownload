document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' && e.ctrlKey && e.altKey) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
  