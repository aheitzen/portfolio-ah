new WOW().init();

var animation = lottie.loadAnimation({
  container: document.getElementById('test-animation'), 
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'assets/data.json' 
});


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



       
