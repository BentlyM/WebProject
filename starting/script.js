// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("hRziEjnaZion").style.top = "0";
  } else {
    document.getElementById("hRziEjnaZion").style.top = "1px";
  }
}
