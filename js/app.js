// back to top button code
let backToTop = document.getElementById("back-to-top")

window.onscroll = () => {

  if (document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block"
  }
  else {
    backToTop.style.display = "none"
  }
}

backToTop.addEventListener("click", () => {
  document.documentElement.scrollTo(0, 0)
})

// homepage slide show code
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(()=>{
  plusSlides(1);
},3000)

// footer dynamic year code
var date = new Date();
document.getElementById("year").innerHTML = "Copyright &copy; " + date.getFullYear() + " Computer Technology | Designed by MIT Web Team";

var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});
