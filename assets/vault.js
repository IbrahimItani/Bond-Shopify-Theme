$(document).ready(function(){

    $('#vault').css('overflow-y', 'hidden');


    $(".vaultImage").click(function(){
      $(".vaultHoverImages").hide();
    });

    $("#yachtyPic").click(function(){
      $('.vault-slider').hide();
      $('#yachty-slider').show();
      $('#yachty-slider').css('visibility', 'visible');
      $('#vault').css('overflow-y', 'visible');
    });

    $("#shamPic").click(function(){
      $('.vault-slider').hide();
      $('#sham-slider').show();
      $('#sham-slider').css('visibility', 'visible');
      $('#vault').css('overflow-y', 'visible');
    });

    $("#ryanPic").click(function(){
      $('.vault-slider').hide();
      $('#ryan-slider').show();
      $('#ryan-slider').css('visibility', 'visiwble');
      $('#vault').css('overflow-y', 'visible');
    });

    $("#dustPic").click(function(){
      $('.vault-slider').hide();
      $('#dust-slider').show();
      $('#dust-slider').css('visibility', 'visible');
      $('#vault').css('overflow-y', 'visible');
    });

    $("#cyberPic").click(function(){
      $('.vault-slider').hide();
      $('#cyber-slider').show();
      $('#cyber-slider').css('visibility', 'visible');
      $('#vault').css('overflow-y', 'visible');
    });

    $("#southsidePic").click(function(){
      $('.vault-slider').hide();
      $('#southside-slider').show();
      $('#southside-slider').css('visibility', 'visible');
      $('#vault').css('overflow-y', 'visible');
    });

    $("#jakobPic").click(function(){
      $('.vault-slider').hide();
      $('#jakob-slider').show();
      $('#jakob-slider').css('visibility', 'visible');
      $('#vault').css('overflow-y', 'visible');
    });

    $(".sliderPic").click(function(){
      $('.vault-slider').hide();
      $('.vault-slider').css('visibility', 'hidden');
      $('#vault').css('overflow-y', 'hidden');
      $(".vaultHoverImages").show();

    });




    var slider = $('.vault-slider').unslider({
    autoplay: true,
    infinite: true,
    nav: false,
    arrows: false,
    delay: 3500,
    keys: {
      prev: 37,
      next: 39
    },
    });
  $(".prev").click(function() {
    slider.unslider('prev');
  });
  $(".next").click(function() {
    slider.unslider('next');
  });


});