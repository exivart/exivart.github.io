$(document).ready(function() {
  var menuContainer = $('#catalog');
  $('.category--trigger').click(function() {
    $('.modal--overlay').fadeIn();
    $('#catalog').css('left', 0);
  });
  $('.modal--overlay').click(function(e) {
    if (!menuContainer.is(e.target) && menuContainer.has(e.target).length === 0) {
        $('#catalog').css('left', '-100%');
        $('.modal--overlay').fadeOut();
    }
  });
  $('.menu--close').click(function() {
    $('#catalog').css('left', '-100%');
    $('.modal--overlay').fadeOut();
  });

});
