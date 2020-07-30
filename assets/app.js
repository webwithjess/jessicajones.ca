$(document).ready(function(){
  // menu
  $('a[data-menu-open]').click(function(event) {
    $('.menu').addClass('open');
  });

  $('a[data-menu-close]').click(function(event) {
    $('.menu').removeClass('open');
  });

  // work

  $('a[data-work]').on('mouseenter', function(event) {
    var $this = $(this);
    var imageURL = $this.data('work-img-url');
    var caption = $this.data('work-img-caption');

    $('[data-work-img]').css("background-image", "url(" + imageURL + ")");
    $('[data-work-caption]').text(caption);
  });
});

