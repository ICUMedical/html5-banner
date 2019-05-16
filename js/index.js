function usBanner() {
  $('#image1').delay(3000).fadeOut(600).delay(3000).fadeIn(600);
  $('#image2').delay(3000).fadeIn(600).delay(3000).fadeOut(600);
};
setInterval("usBanner()", 100);
