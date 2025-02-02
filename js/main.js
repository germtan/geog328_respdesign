
let icon = document.getElementsByClassName("icon")[0];
icon.addEventListener('click', responsive_control);

function responsive_control() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// initial slideshow
let slideIndex = 0; 


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  
  slideIndex++;
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }

  
  slides[slideIndex - 1].style.display = "block";

 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  
  dots[slideIndex - 1].className += " active";


  setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
  let icon = document.getElementsByClassName("icon")[0];
  icon.addEventListener('click', responsive_control);

  showSlides();
});
