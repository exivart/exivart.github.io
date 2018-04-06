$(document).ready(function(){
  $('#hero-slider').owlCarousel({
    items: 1,
    margin: 10,
    loop: true
  });
});

for (var i = 1; i < 4; i++) {
  $('.item:nth-child(' + i + ')').css('background-image', 'url("images/hero-slider/slide-' + i + '.jpg")');
}
