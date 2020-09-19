
document.querySelector('.toggle').addEventListener("click",function(){
    document.querySelector('.navbar').classList.toggle('showing')
    document.querySelector('.navbar').classList.toggle('hidden')
    console.log('clicked')
    console.log(document.querySelector('.navbar').getElementsByClassName.transform)
});

// slide show js

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

} 

setInterval(function(){
  plusSlides(1);
},7000)

var date = new Date()
document.getElementById("year").innerHTML = "Copyright &copy; "+date.getFullYear()+ " Computer Technology | Designed by MIT Web Team"