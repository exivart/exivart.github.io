$(document).ready(function() {
  var modalContainer = $('#requestcall-modal');
  $('.modal-trigger').click(function() {
    $('.modal--overlay').fadeIn();
    $('#requestcall-modal').css('top', $(window).scrollTop() + 100 + 'px').fadeIn();
    $()
  });
  $('.modal--overlay').click(function(e) {
    if (!modalContainer.is(e.target) && modalContainer.has(e.target).length === 0) {
          $(this).fadeOut();
          modalContainer.fadeOut();
    }
  });
  $('.modal--input').focusin(function() {
    $(this).parent().css('border', '1px solid #ffe31e');
  }).focusout(function() {
    if(!$(this).val() && $(this).prop('required')) {
      $(this).parent().css('border', '1px solid #ff0000');
    } else {
      $(this).parent().css('border', '1px solid #11c511');
    }
  });
});
