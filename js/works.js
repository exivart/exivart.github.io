$(document).ready(function() {

  $.ajaxSetup({cache: false});

  var thumbItem = $('.work--item'),
      worksBelt = $('.works--inner'),
      workDescription = $('.work--description'),
      descriptionOffset = $('.works--container').offset().top;
  thumbItem.click(function() {
    console.log(descriptionOffset);
    $('html, body').animate({
                      scrollTop: descriptionOffset - 100
                    }, 1000);
    worksBelt.css('margin-left', '-100%');
    workDescription.show();
    var folder = $(this).data('folder'),
        title = $(this).data('title'),
        html = 'include/works/' + folder + '.html',
        loader = '<div class="loader">Loading...</div>';
    $('#title').text(title);
    $('.description--main').html(loader).load(html);
  });
  $('#worksBack').click(function() {
    worksBelt.css('margin-left', 0);
    workDescription.hide(400);
  });



});
