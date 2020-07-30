$(document).ready(function(){
  // menu
  $('a[data-menu-open]').click(function(event) {
    $('.menu').addClass('open');
  });

  $('a[data-menu-close]').click(function(event) {
    $('.menu').removeClass('open');
  });
});