

var nav = document.querySelector('.header__navbar');
var navbar = document.querySelector('.navbar');
var logo = document.querySelector('.navbar__logo');
var servicio = document.querySelector('.servicio');

window.onscroll = function () {
  if (window.pageYOffset > 550) {
    nav.style.position = 'fixed';
    nav.style.top = 0;
    nav.style.backgroundColor = 'rgb(47, 46, 65, 0.7)';
    nav.style.transition = '0.5s';

    navbar.style.margin = 'auto';

    logo.style.display = 'block';
    servicio.style.display = 'block';

    logo.style.transition = '0.5s';
    servicio.style.transition = '0.5s';

  } else if(window.pageYOffset < 550) {
    nav.style.backgroundColor = 'transparent';
    nav.style.position = 'relative';
    
    navbar.style.margin = '0 auto 0 237px';

    logo.style.display = 'none';
    servicio.style.display = 'none';

  }
}