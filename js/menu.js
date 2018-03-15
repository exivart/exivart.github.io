$(document).ready(function() {
  var menuContainer = $('#menu');
  $('.menu--trigger').click(function() {
    $('.modal--overlay').fadeIn();
    $('#menu').css('left', 0);
  });
  $('.modal--overlay').click(function(e) {
    if (!menuContainer.is(e.target) && menuContainer.has(e.target).length === 0) {
        $('#menu').css('left', '-100%');
        $('.modal--overlay').fadeOut();
    }
  });
  $('.menu--close').click(function() {
    $('#menu').css('left', '-100%');
    $('.modal--overlay').fadeOut();
  });

$('#submenu-trigger').click(function() {
  $(this).toggleClass('submenu-trigger-active');
  $('.submenu--direction').toggleClass('up');
  $('.menu--sublist').toggleClass('menu--sublist-show');
});

$('.scroll').click(function() {
  $('#menu').css('left', '-100%');
  $('.modal--overlay').fadeOut();
});

});
