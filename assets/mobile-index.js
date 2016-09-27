$('body').css('overflow-x', 'hidden');

$(window).scroll(function() {
    $(".site-nav, .logo-navbar").css({
    'opacity' : 1-(($(this).scrollTop())/50)
    });
});


$(window).scroll(function() {

  if ($(this).scrollTop() > 0) {
    $(".vertical-menu").css({
    'opacity' : (($(this).scrollTop())/50),
    'visibility' : 'visible'
    });
  } else {
    $(".vertical-menu").css({
    'visibility' : 'hidden'
    });
  }


});