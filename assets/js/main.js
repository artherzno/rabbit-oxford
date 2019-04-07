$(document).ready(function(){
  if (isIE()){
    console.log('It is InternetExplorer');
    $('body').addClass('ie');
    $('body').removeClass('not-ie');

  }else{
    console.log('It is NOT InternetExplorer');
    $('body').removeClass('ie');
    $('body').addClass('not-ie');
  }

  // Animate Brain /////////////////////////////////////////////////////////////
  var brain = $(".brain"),
      intro = $("#intro"),
      elementX = 0,
      elementY = 0,
      elementW = 0,
      elementH = 0,
      mouseX = 0,
      mouseY = 0;
  intro.mousemove(function(e) {
    var position = brain.offset(),
    obj = brain;
    elementX = position.left;
    elementY = position.top;

    elementW = obj.width();
    elementH = obj.height();

    var halfW = elementW/2;
    var halfH = elementH/2;

    mouseX = (e.pageX - elementX - halfW)/halfW;
    mouseY = (e.pageY - elementY - halfH)/halfH;
    mouseX = Math.round(mouseX * 100)/100;
    mouseY = Math.round(mouseY * 100)/120;

    // console.log(mouseX);

    if(mouseX < -3) {
      // console.log('max : '+mouseX);
      mouseX = -3;
    }

    // brain.css("transform", "rotateX("+mouseY*-10+"deg) rotateY("+mouseX*10+"deg)");
    brain.css("transform", "rotateY("+mouseX*10+"deg)");
  });



  // Config Modal //////////////////////////////////////////////////////////////
  var locattionBtn = $('#locations .button-modal');
  locattionBtn.on('click', function(event) {
    $('.close').trigger('click');
    $('body').removeAttr('style');
    $('#locations .button-modal').removeClass('active');
    $(this).addClass('active');
  });



  // Remove modal //////////////////////////////////////////////////////////////
  $('.modal .close').on('click', function() {
      $('#locations .button-modal').removeClass('active');
      $('#locations .button-head').removeClass('sub-active');

  });
  // var closeModal = function() {
  //   $('.close').trigger('click');
  //   $('#locations .button-modal').removeClass('active');
  // }
  // $('#locations').on('mouseleave', function(){
  //   closeModal();
  // });



 // Window scroll //////////////////////////////////////////////////////////////
  $( window ).scroll(function() {
    // Animate nav
     var scroll = $(window).scrollTop();
     if(scroll>=10) {
      $('#nav-main').addClass('active');
    } else {
      $('#nav-main').removeClass('active');
    }

    // Animate intro section
    if(scroll>1) {
      $('#intro').addClass('fade-out');
      $('#banner .cloud, #banner .city, #banner .content').addClass('fade-in');
    } else {
      $('#intro').removeClass('fade-out');
      $('#banner .cloud, #banner .city, #banner .content').removeClass('fade-in');
    }
  });

  // Initial ///////////////////////////////////////////////////////////////////
  // Intro logo
  // $('#intro .logo').addClass('fade-in');


  // Nav dropdown
  $('#navbar-practics-dt').hover(function() {
    $('#navbar-practics-dt .dropdown-menu').toggleClass('hover');
  });

  $('#ft-navbar-practics-dt').hover(function() {
    $('#ft-navbar-practics-dt .dropdown-menu').toggleClass('hover');
  });


  // Careers dropdown
  $('#careers-page .dropdown-list .dropdown-toggle').on('click', function() {
    $('#careers-page .overlay').toggleClass('show');
  });

  $('#careers-page .dropdown-list .dropdown-item').on('click', function(event) {
    $('.overlay').removeClass('show');

    var zoneName = $(this).attr('id').replace('zone-','');
    $('.careers-list .column').hide();
    $('.careers-list .column[data-zone="'+zoneName+'"]').show();

    console.log(zoneName);
  });

  // Careers apply
  $('#careers-apply').on('click', function() {
    var duration = 500;
    $('#careers-apply-form').slideToggle(duration, function(){
      duration = $(this).is(":visible") ? 800 : 500;
    });

    $('.section-apply').toggleClass('fade-in');
  });

  $('.overlay').on('click', function() {
    $(this).removeClass('show');
  });

  // Careers file upload name
  var input = $('#filetoupload');
  var infoArea = $('#filetouploadname');
  input.on( 'change', showFileName );
  function showFileName( event ) {
    // console.log(event);
    // console.log(event.currentTarget.value);
    var input = event.currentTarget.value;
    var fileName = input.match(/[^\\/]*$/)[0];
    // console.log(fileName);
    infoArea.show().val(fileName);

    // Dynamic input
    infoArea.attr('size', (infoArea.val().length));
  }


  // Carousel hidden on blogsdetail page - mobile
  $('.navbar-toggler').on('click', function() {
    $('#blogsdetail-page .carouselBlogDetail-dot-container').toggleClass('hide-dot');
    $('.navbar-toggler-logo').toggleClass('hide-dot');
  });

  // Carousel stop autoplay
  $('#carouselCaptions.carousel').carousel({
    // interval: false
  });


  // Locatios accordion - desktop
  $('#accordionLocation-dt .button-modal').on('click', function() {
    var $thisAttr = $(this).attr('aria-expanded');
    var $collapseBoxButtonParent = $(this).parent('.collapse').prev('.button-head');
    //
    if($thisAttr == 'true') {
    console.log($thisAttr);
      $collapseBoxButtonParent.removeClass('sub-active');
    } else {
    console.log($thisAttr);
      $collapseBoxButtonParent.addClass('sub-active');
    }
  });

  // Locations accordion - mobile
  $('.collapse-box button').on('click', function() {
    var $thisAttr = $(this).attr('aria-expanded');
    var $collapseBoxButtonParent = $(this).parent('.collapse').prev('.button-head');
    //
    if($thisAttr == 'true') {
    console.log($thisAttr);
      $collapseBoxButtonParent.removeAttr('style', 'color: #fff').removeClass('sub-active');
    } else {
    console.log($thisAttr);
      $collapseBoxButtonParent.attr('style', 'color: #fff').addClass('sub-active');
    }
  });

  $('#accordionLocation-mb .button-head').on('click', function(){
    var $this = $(this);
    var $buttonNon = $this.next('.collapse-box').children('.buttonNone');
    var $collaspe = $buttonNon.next('.collapse');

    $this.removeAttr('style').removeClass('sub-active');
    $buttonNon.attr('aria-expanded', 'false');
    $collaspe.removeClass('show');
  });

  // Banner content animation
  // setInterval(function(){$('#banner .oxford-mb .box-content').toggleClass('fade-in')}, 4000);



  // ScrollMagic ///////////////////////////////////////////////////////////////
  var controller = new ScrollMagic.Controller();

  function classToggle($triggerElement, $triggerHook, $duration, $classtarget, $classname) {
    var scrollToggleClass = new ScrollMagic.Scene({
      triggerElement: $triggerElement,
      triggerHook: $triggerHook,
      duration: $duration
    })
    // .addIndicators({ name: 'debug indicators'})
    .setClassToggle($classtarget, $classname)
    .addTo(controller);
  }

  function pin($triggerElement, $triggerHook, $duration, $classtarget) {
    var scrollPin = new ScrollMagic.Scene({
      triggerElement: $triggerElement,
      triggerHook: $triggerHook,
      duration: $duration
    })
    // .addIndicators({ name: 'debug indicators'})
    .setPin($classtarget)
    .addTo(controller);
  }


  // Intro  -------------------------------------------------- //
  var scrollToggleClass = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: 0
  })
  // .addIndicators({ name: 'debug indicators'})
  .setClassToggle('#intro .logo', 'fade-in')
  .addTo(controller);

  // Pin banner ----------------------------------------- //
  pin('#banner', 0, '80%', '#banner');

  // Second content banner ----------------------------------------- //
  classToggle('#banner', 0, '80%', '#banner', 'fade-in');

  // Second content banner ----------------------------------------- //
  // classToggle('#banner', 0, '80%', '#banner .box.oxford-dt', 'fade-in');

  // Second content banner ----------------------------------------- //
  // classToggle('#banner', 0, '80%', '#banner .box.oxford-mb .box-content', 'fade-in');

  // What we do - img ----------------------------------------- //
  classToggle('#whatwedo', 0.8, '', '#whatwedo img', 'fade-in');

  // What we do - content ----------------------------------------- //
  classToggle('#whatwedo', 0.75, '', '#whatwedo .content', 'fade-in');

  // practics - city ----------------------------------------- //
  classToggle('#practics', 0.75, '', '#practics .city', 'fade-in');

  // practics - content ----------------------------------------- //
  classToggle('#practics', 0.3, '', '#practics .content', 'fade-in');

  // Hospitality - img ----------------------------------------- //
  classToggle('#hospitality', 0.8, '', '#hospitality img', 'fade-in');

  // Hospitality - content ----------------------------------------- //
  classToggle('#hospitality', 0.7, '', '#hospitality .figcaption', 'fade-in');

  // Hospitality - nav ----------------------------------------- //
  classToggle('#hospitality', 0.35, '', '#hospitality .carouselHospitality-indicators', 'fade-in');

  // locations - bg  ----------------------------------------- //
  classToggle('#locations', 0.85, '', '#locations', 'fade-in');

  // locations - content  ----------------------------------------- //
  classToggle('#locations', 0.45, '', '#locations .content', 'fade-in');

  // Blog ----------------------------------------- //
  classToggle('#blog', 0.70, '', '#blog', 'fade-in');

  // Get in touch ----------------------------------------- //
  classToggle('#getintouch', 0.75, '', '#getintouch', 'fade-in');


  // Blogs page - header ----------------------------------------- //
  classToggle('#blogs-page', 0.5, '', '#blogs-page', 'fade-in');

  // Blogs page - row ----------------------------------------- //
  classToggle('#blogs-page .row_1', 1, '', '#blogs-page .row_1', 'fade-in');

  classToggle('#blogs-page .row_2', 0.9, '', '#blogs-page .row_2', 'fade-in');

  classToggle('#blogs-page .row_3', 0.9, '', '#blogs-page .row_3', 'fade-in');

  classToggle('#blogs-page .row_4', 0.9, '', '#blogs-page .row_4', 'fade-in');

  // Blogs page - pagination ----------------------------------------- //
  // classToggle('#blogs-page .pagi', 0.75, '', '#blogs-page .pagi', 'fade-in');


  // Blogs detail - header ----------------------------------------- //
  classToggle('#blogsdetail-page', 0.5, '', '#blogsdetail-page', 'fade-in');

  // Blogs detail - content ----------------------------------------- //
  classToggle('#blogsdetail-page .detail', 0.7, '', '#blogsdetail-page .detail', 'fade-in');

  // Blogs detail - related ----------------------------------------- //
  classToggle('#blogsdetail-page .related', 0.8, '', '#blogsdetail-page .related', 'fade-in');


  // Team - banner ----------------------------------------- //
  classToggle('#team-page', 0.8, '', '#team-page .banner', 'fade-in');

  // Team - header ----------------------------------------- //
  classToggle('#team-page .content', 0.7, '', '#team-page .content', 'fade-in');

  // Team - row ----------------------------------------- //
  classToggle('#team-page .oxford-dt .row_1', 0.9, '', '#team-page .oxford-dt .row_1', 'fade-in');

  classToggle('#team-page .oxford-dt .row_2', 0.9, '', '#team-page .oxford-dt .row_2', 'fade-in');

  classToggle('#team-page .oxford-tl .row_1', 0.9, '', '#team-page .oxford-tl .row_1', 'fade-in');

  classToggle('#team-page .oxford-tl .row_2', 0.9, '', '#team-page .oxford-tl .row_2', 'fade-in');

  classToggle('#team-page .oxford-tl .row_3', 0.9, '', '#team-page .oxford-tl .row_3', 'fade-in');

  classToggle('#team-page .oxford-mb .row_1', 0.9, '', '#team-page .oxford-mb .row_1', 'fade-in');

  classToggle('#team-page .oxford-mb .row_2', 0.9, '', '#team-page .oxford-mb .row_2', 'fade-in');

  classToggle('#team-page .oxford-mb .row_3', 0.9, '', '#team-page .oxford-mb .row_3', 'fade-in');

  classToggle('#team-page .oxford-mb .row_4', 0.9, '', '#team-page .oxford-mb .row_4', 'fade-in');


  // Team detail - banner ----------------------------------------- //
  classToggle('#teamdetail-page', 0.8, '', '#teamdetail-page .banner', 'fade-in');

  // Team detail - content ----------------------------------------- //
  classToggle('#teamdetail-page .detail', 0.8, '', '#teamdetail-page .detail', 'fade-in');

  // Team detail - paragrah ----------------------------------------- //
  classToggle('#teamdetail-page .paragraph._1', 0.8, '', '#teamdetail-page .detail .paragraph', 'fade-in');


  // Locations - banner ----------------------------------------- //
  classToggle('#locations-page', 0.8, '', '#locations-page .banner', 'fade-in');

  // Locations - header ----------------------------------------- //
  classToggle('#locations-page .content', 0.7, '', '#locations-page .content', 'fade-in');

  // Locations - row ----------------------------------------- //
  classToggle('#locations-page .row_1', 0.8, '', '#locations-page .row_1 .column', 'fade-in');

  classToggle('#locations-page .row_2', 0.8, '', '#locations-page .row_2 .column', 'fade-in');

  classToggle('#locations-page .row_3', 0.8, '', '#locations-page .row_3 .column', 'fade-in');

  classToggle('#locations-page .row_4', 0.8, '', '#locations-page .row_4 .column', 'fade-in');


  // Careers - banner ----------------------------------------- //
  classToggle('#careers-page', 0.8, '', '#careers-page .banner', 'fade-in');

  // Careers - header ----------------------------------------- //
  classToggle('#careers-page .content', 0.7, '', '#careers-page .content', 'fade-in');

  // Careers - row ----------------------------------------- //
  classToggle('#careers-page .row_1', 0.8, '', '#careers-page .row_1', 'fade-in');

  classToggle('#careers-page .row_2', 0.8, '', '#careers-page .row_2', 'fade-in');

  classToggle('#careers-page .row_3', 0.8, '', '#careers-page .row_3', 'fade-in');

  classToggle('#careers-page .row_4', 0.8, '', '#careers-page .row_4', 'fade-in');

  classToggle('#careers-page .row_0', 0.8, '', '#careers-page .row_0', 'fade-in');

  // classToggle('#careers-page .section-apply', 0.8, '', '#careers-page .section-apply', 'fade-in');


  // Demandfulfillment - banner ----------------------------------------- //
  classToggle('#demandfulfillment-page', 0.8, '', '#demandfulfillment-page .banner', 'fade-in');

  // Demandfulfillment - header ----------------------------------------- //
  classToggle('#demandfulfillment-page .content', 0.7, '', '#demandfulfillment-page .content', 'fade-in');

  // Demandfulfillment - carousel ----------------------------------------- //
  classToggle('#demandfulfillment-page .carousel-section', 0.7, '', '#demandfulfillment-page .carousel-section', 'fade-in');


  // Strategy - banner ----------------------------------------- //
  classToggle('#strategy-page', 0.8, '', '#strategy-page .banner', 'fade-in');

  // Strategy - header ----------------------------------------- //
  classToggle('#strategy-page .content', 0.7, '', '#strategy-page .content', 'fade-in');

  // Strategy - carousel ----------------------------------------- //
  classToggle('#strategy-page .carousel-section', 0.7, '', '#strategy-page .carousel-section', 'fade-in');


  // Financial Transformation - banner ----------------------------------------- //
  classToggle('#financialtransformation-page', 0.8, '', '#financialtransformation-page .banner', 'fade-in');

  // Financial Transformation - header ----------------------------------------- //
  classToggle('#financialtransformation-page .content', 0.7, '', '#financialtransformation-page .content', 'fade-in');

  // Financial Transformation - carousel ----------------------------------------- //
  classToggle('#financialtransformation-page .carousel-section', 0.7, '', '#financialtransformation-page .carousel-section', 'fade-in');


  // Organisational Optimisation - banner ----------------------------------------- //
  classToggle('#organisationaloptimisation-page', 0.8, '', '#organisationaloptimisation-page .banner', 'fade-in');

  // Organisational Optimisation - header ----------------------------------------- //
  classToggle('#organisationaloptimisation-page .content', 0.7, '', '#organisationaloptimisation-page .content', 'fade-in');

  // Organisational Optimisation - carousel ----------------------------------------- //
  classToggle('#organisationaloptimisation-page .carousel-section', 0.7, '', '#organisationaloptimisation-page .carousel-section', 'fade-in');

});
