

var nav = document.querySelector('.header__navbar');
var navbar = document.querySelector('.navbar');
var logo = document.querySelector('.navbar__logo');
var servicio = document.querySelector('.servicio');

var logoG = document.querySelector('.header__logo');
var titulo = document.querySelector('.home__serprevent');
var texto = document.querySelector('.home__descripcion');
var boton = document.querySelector('.servicio2');
var item = document.querySelectorAll('.navbar');

var agilidad = document.querySelector('#agilidad');
var integridad = document.querySelector('#integridad');
var experiencia = document.querySelector('#experiencia');

var servicios = document.querySelectorAll('.servicios__uno');
var temas = document.querySelectorAll('.interes__tema');

var quienesImg =  document.querySelector('.quienes__imagen');
var quienesTitulo = document.querySelector('.quienes__titulo');
var quienesDes = document.querySelector('.quienes__descripcion');


var espera = 500;

ScrollReveal().reveal(logoG, { duration: 800 });
ScrollReveal().reveal(item, {delay: 300});
ScrollReveal().reveal(titulo);
ScrollReveal().reveal(texto);
ScrollReveal().reveal(boton);
ScrollReveal().reveal(agilidad);
ScrollReveal().reveal(integridad, {delay: espera});
ScrollReveal().reveal(experiencia, {delay: (espera*2)});
ScrollReveal().reveal(servicios, { interval: 400 });
ScrollReveal().reveal(temas, { interval: 200 });

ScrollReveal().reveal(quienesImg);
ScrollReveal().reveal(quienesTitulo);
ScrollReveal().reveal(quienesDes);

window.onscroll = function () {


      if (window.pageYOffset > 550 && window.innerWidth<600) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.backgroundColor = 'rgb(47, 46, 65, 0.7)';
        nav.style.transition = '0.5s';
        
        navbar.style.margin = 'auto';
        
        logo.style.display = 'block';
        servicio.style.display = 'block';
        
        logo.style.transition = '0.5s';
        servicio.style.transition = '0.5s';
        
      } else if(window.pageYOffset < 550 && window.innerWidth<600) {
        nav.style.backgroundColor = 'transparent';
        nav.style.position = 'relative';
        
        navbar.style.margin = '0 auto 0 237px';
        
        logo.style.display = 'none';
        servicio.style.display = 'none';
        
      }
  }
  
  var imgServicio = document.querySelector('.servicios__uno-imagen');
  var carServicios = document.querySelector('.servicios__uno-cars');

function recorrerServicios(serv, index) {

  console.log("Hola funciona ");
 // console.log(serv);

  serv.addEventListener('click', ()=>{

    servicios.forEach((ser)=>{

      
      if(ser.className.includes("servicio__desplegar") && serv != ser){
        ser.classList.remove('servicio__desplegar');
        ser.style.backgroundColor = 'rgb(132, 220, 184)';
       // serv.style.height = 'auto';
        
      }
    });

    serv.classList.toggle('servicio__desplegar');
    serv.style.backgroundColor = 'white';
    serv.style.borderBottom = '3px solid rgb(132, 220, 184)'; 
    serv.style.transition = 'all 0.5s ease 0s';
  });
}

servicios.forEach(recorrerServicios);







//ScrollReveal({ reset: true });