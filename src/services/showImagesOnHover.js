export function over({ target: { className } }) {
  console.log(`${className}-img`);
  const img = document.querySelector(`.${className}-img`)
  if (img) img.style.visibility = 'visible';
};

export function out({ target: { className } }) {
  console.log(`${className}-img`);
  const img = document.querySelector(`.${className}-img`)
  if (img) img.style.visibility = 'hidden';
};

