let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.getElementsByClassName("slider__dot");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

window.onload = function() { 
    showSlides();
    setInterval(function() {
        nextSlide();
    },5000);
};


let hamburger = document.querySelector(".hamburger");
let header = document.querySelector(".header");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    header.classList.toggle("is-active");
});
