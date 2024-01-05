$(document).ready(function(){
  // animation

  $('[data-title-accent]').addClass('loaded');
  $('[data-fade-in]').addClass('loaded');

  // menu

  $('a[data-menu-open]').click(function(event) {
    $('.menu').addClass('open');
    $('.body').addClass('fixed');
  });

  $('a[data-menu-close]').click(function(event) {
    $('.menu').removeClass('open');
    $('.body').removeClass('fixed');
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

