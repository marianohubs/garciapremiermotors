/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.height = "6rem";
  } else {
    document.getElementById("navbar").style.height = "4.5rem";
  }
  prevScrollpos = currentScrollPos;
};

window.onload = function () {
  var image = document.getElementById("fullScreenGradient");

  //var screenWidth = window.innerWidth;
  //var screenWidth = document.body.scrollWidth;
  var screenHeight = window.innerHeight;

  // Establecer el ancho y alto de la imagen según las dimensiones de la pantalla
  //image.style.width = screenWidth + 'px';
  image.style.height = screenHeight + "px";
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var x = window.innerWidth;
const min_width = 1000;

function openNav() {
  x = window.innerWidth;
  if (x > min_width) {
    document.getElementById("fullScreenGradient").style.display = "block";
    document.getElementById("mySidenav").style.width = "30%";
    document.getElementById("main").style.marginLeft = "30%";
  } else {
    document.getElementById("myNav").style.height = "100%";
  }
}

function closeNav() {
  x = window.innerWidth;
  if (x > min_width) {
    document.getElementById("fullScreenGradient").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("myNav").style.height = "0%";
  }
}
/* JvliDev */