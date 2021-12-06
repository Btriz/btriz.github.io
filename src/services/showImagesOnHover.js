export function over({ target: { className } }) {
  const img = document.querySelector(`.${className}-img`)
  if (img) img.style.visibility = 'visible';
};

export function out({ target: { className } }) {
  const img = document.querySelector(`.${className}-img`)
  if (img) img.style.visibility = 'hidden';
};

