const previewButton = document.getElementById('show-cv-preview');
previewButton?.addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.className = 'cv-preview';
  frame.title = 'CV - Sunny Huiqing Tian';
  frame.src = 'cv.pdf#zoom=100';
  frame.width = '920';
  frame.height = '1100';
  previewButton.closest('.cv-preview-frame').replaceChildren(frame);
}, { once: true });
