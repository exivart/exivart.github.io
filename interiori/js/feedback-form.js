$(document).ready(function() {
  $('.feedback-input').focusin(function() {
    $(this).parent().css('border', '1px solid #ffe31e');
  }).focusout(function() {
    if(!$(this).val() && $(this).prop('required')) {
      $(this).parent().css('border', '1px solid #ff0000');
    } else {
      $(this).parent().css('border', '1px solid #11c511');
    }
  });
});
