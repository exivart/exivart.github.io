jQuery( document ).ready(function($) {
  $('.video')
  .on('mouseover', function() {
    $('.video--play').css('opacity', '1');
  })
  .on('mouseout', function() {
    $('.video--play').css('opacity', '0');
  });
    $('.video').click(function() {
      if(this.paused) {
        this.play();
        $('.video--play img').attr('src', 'images/icons/pause.svg');
        setTimeout(function() {
          $('.video--play').css('opacity', '0');
        }, 500);
      } else {
        this.pause();
        $('.video--play img').attr('src', 'images/icons/play.svg');
        $('.video--play').css('opacity', '1');
        setTimeout(function() {
          $('.video--play').css('opacity', '0');
        }, 500);
      }
        // this.paused ? this.play() : this.pause();
    });
});
