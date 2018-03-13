$(document).ready(function() {
  $.ajaxSetup({cache: false});
  // comment
  $('.work--item').click(function() {
    $('.works--inner').css('margin-left', '-100%');
    $('.work--description').show();
    var folder = $(this).data('folder'),
        title = $(this).data('title'),
        html = 'include/works/' + folder + '.html',
        loader = '<div class="loader">Loading...</div>';
    $('#title').text(title);
    $('.description--main').html(loader).load(html);
  });
  $('#worksBack').click(function() {
    $('.works--inner').css('margin-left', 0);
    $('.work--description').hide(300);
  });
});
