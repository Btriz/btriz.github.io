function aos() {
  const elem = document.querySelector('#carousel-wrap');

  AOS.init();

  new Flickity( elem, {
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false,
    pauseAutoPlayOnHover: false
  });
}

function scrollButton() {
  const btn = document.querySelector('#scrl');
  
  btn.addEventListener('click', () => {
      document.body.scroll = 250; // For Safari
      document.documentElement.scrollTop = 250; // For Chrome, Firefox, IE and Opera
  });
}

function parallax() {
  let topmain = document.getElementById("topmain");
  // let text = document.getElementById("hero-title-container");
  
  window.addEventListener('scroll', () => {
      let value = window.scrollY;
      topmain.style.top = -value * 0.5 + 'px';
      // text.style.bottom = value * 1 + 'px';
  });
}

function hoverShowsAnimations() {
  const gitPic = document.querySelector('#git-1');
  const gitLink = document.querySelector('#git-link');
  const linPic = document.querySelector('#lin-1');
  const linLink = document.querySelector('#lin-link');
  
  gitLink.addEventListener('mouseover', () => {
    gitPic.style.visibility = 'visible';
  })
  gitLink.addEventListener('mouseout', () => {
    gitPic.style.visibility = 'hidden';
  })
  linLink.addEventListener('mouseover', () => {
    linPic.style.visibility = 'visible';
  })
  linLink.addEventListener('mouseout', () => {
    linPic.style.visibility = 'hidden';
  })
}

window.onload = () => {
  aos();
  scrollButton();
  parallax();
  hoverShowsAnimations();
}
