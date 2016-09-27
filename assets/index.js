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


var controller = new ScrollMagic.Controller();

 $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1",
     duration: 700,
     reverse: true})
            .setPin("#pin1")
            .addTo(controller);
  });

  $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger2",
     duration: 400,
     reverse: true})
            .setPin("#pin2")
            .addTo(controller);
  });

    $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger3",
     duration: 1000,
     reverse: true})
            .setPin("#pin3")
            .addTo(controller);
  });

    $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger4",
     duration: 450,
     reverse: true})
            .setPin("#pin4")
            .addTo(controller);
  });

    $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger5",
     duration: 700,
     reverse: true})
            .setPin("#pin5")
            .addTo(controller);
  });

    $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger6",
     duration: 450,
     reverse: true})
            .setPin("#pin6")
            .addTo(controller);
  });

    $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger7",
     duration: 450,
     reverse: true})
            .setPin("#pin7")
            .addTo(controller);
  });

    $(function () {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger8",
     duration: 900,
     reverse: true})
            .setPin("#pin8")
            .addTo(controller);
  });

