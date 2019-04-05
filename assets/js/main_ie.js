$(document).ready(function(){

  /* Create an alert to show if the browser is IE or not */
  if (isIE()){
    console.log('It is InternetExplorer');
    $('body').addClass('ie');
    $('body').removeClass('not-ie');

    $('#carouselHospitality').owlCarousel({
      slideTransition: 'ease-in-out',
      items: 1,
      dots: 0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 0
    });

    $('#locations').mouseleave(function(event) {

        $('.modal-dialog .close').trigger('click');
    });

  }else{
    console.log('It is NOT InternetExplorer');
    $('body').removeClass('ie');
    $('body').addClass('not-ie');
  }
});
