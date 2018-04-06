$(document).ready(function() {
  $.ajaxSetup({cache: false});
  var thumbItem = $('.work--item'),
      worksBelt = $('.works--inner'),
      workDescription = $('.work--description'),
      backBtn = $('.works--back'),
      descriptionOffset = $('.works--container').offset().top,
      clickedOffset;
  thumbItem.click(function() {
   $('html, body').animate({scrollTop: descriptionOffset - 100}, 1000);
    worksBelt.css('margin-left', '-100%');
    workDescription.show();
    var folder = $(this).data('folder'),
        title = $(this).data('title'),
        html = 'include/works/' + folder + '.html',
        loader = '<div class="loader">Loading...</div>';
    clickedOffset = $(this).offset().top;
    $('#title').text(title);
    $('.description--main').html(loader).load(html);
  });
  backBtn.click(function() {
    worksBelt.css('margin-left', 0);
    if($(window).width() > 768) {
      $('html, body').animate({
                       scrollTop: descriptionOffset - 100
                     }, 500);
    } else {
      $('html, body').animate({
                       scrollTop: clickedOffset - 100
                     }, 500);
    }
    workDescription.hide(400);
  });
});
