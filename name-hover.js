(() => {
  const name = document.querySelector('.index-page .profile h1');
  if (!name) return;
  name.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = name.getBoundingClientRect();
    name.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
    name.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    name.classList.add('pointer-highlight');
  });
  const reset = () => name.classList.remove('pointer-highlight');
  name.addEventListener('pointerleave', reset);
  name.addEventListener('pointercancel', reset);
  window.addEventListener('blur', reset);
})();
