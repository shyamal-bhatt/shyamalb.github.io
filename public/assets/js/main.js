let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Nav Bar for Mobile
// Toggel Open 
document.getElementById("toggel").addEventListener("click", function(){
  document.getElementById("menuMobile").classList.toggle("pointer-events-none");
  document.getElementById("menuMobile").classList.toggle("pointer-events-auto");

  document.getElementById("menuMobile").classList.toggle("opacity-0");
  document.getElementById("menuMobile").classList.toggle("opacity-100");
})
// Toggel Close
document.getElementById("toggelClose").addEventListener("click", function(){
  document.getElementById("menuMobile").classList.toggle("pointer-events-none");
  document.getElementById("menuMobile").classList.toggle("pointer-events-auto");

  document.getElementById("menuMobile").classList.toggle("opacity-0");
  document.getElementById("menuMobile").classList.toggle("opacity-100");
})

// Scroll Element into view Mobile
function intoView(element){
  document.getElementById(element).scrollIntoView();
}