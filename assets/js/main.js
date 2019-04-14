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

  window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    console.log(window.orientation);
    $('body').toggleClass('orientationchange');
  }, false);

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
    $('#careers-page .overlay.oxford-mb').toggleClass('show');
  });

  $('#careers-page .dropdown-list .dropdown-item').on('click', function(event) {
    $('.overlay').removeClass('show');

    var zoneName = $(this).attr('id').replace('zone-','');

    if(zoneName == 'all') {
      $('.careers-list .column').removeClass('disabled').fadeIn(300);
    } else {
      $('.careers-list .column').addClass('disabled').fadeOut(200);
      $('.careers-list .column[data-zone="'+zoneName+'"]').removeClass('disabled').fadeIn(300);
    }

    var jobItem = $('.careers-list .row .column');
    var jobItemDisabled = $('.careers-list .row .column.disabled');
    var jobItemAmount = jobItem.length;
    var jobItemDisabledAmount = jobItemDisabled.length;

    if(jobItemDisabledAmount == jobItemAmount) {
      $('.notice-nojob').fadeIn(300);
      // $('.row_0').fadeOut(200);
    } else {
      $('.notice-nojob').fadeOut(200);
      // $('.row_0').fadeIn(300);
    }

    $('#dropdownMenuButton').text($(this).text());
  });

  // Careers apply
  $('#careers-apply').on('click', function() {
    var duration = 500;
    $('#careers-apply-form').slideToggle(duration, function(){
      duration = $(this).is(":visible") ? 800 : 500;
    });

    $('.section-apply').toggleClass('fade-in');

    // scroll to section apply
    var navHeight = $('#nav-main').height();
    $('html, body').animate({
        scrollTop: $(".section-apply").offset().top + -navHeight
    }, 400);
  });

  $('.overlay').on('click', function() {
    $(this).removeClass('show');
  });

  // Careers file upload name
  var input = $('#filetoupload');
  var infoArea = $('.uploadname');
  var infoName = $('#filetouploadname');
  var delName = $('#deluploadname');
  input.on( 'change', showFileName );

  delName.on('click', function(){
      infoName.val('');
      infoArea.hide();
  });

  function showFileName( event ) {
    var input = event.currentTarget.value;
    var fileName = input.match(/[^\\/]*$/)[0];
    var lastDotIndex = fileName.lastIndexOf('.');
    var fileNameOnly = fileName.slice(0, lastDotIndex);

    infoName.val(fileNameOnly);
    infoArea.show();

    // Dynamic input
    infoName.attr('size', (infoName.val().length));
  }


  // Carousel hidden on blogsdetail page - mobile
  $('.navbar-toggler').on('click', function() {
    $('#blogsdetail-page .carouselBlogDetail-dot-container').toggleClass('hide-dot');
    $('.navbar-toggler-logo').toggleClass('hide-dot');
  });

  // Carousel stop autoplay
  $('#carouselCaptions.carousel').carousel({
    interval: false
  });

  // $('#carouselCaptions').viewportChecker({
  //   offset: 650,
  //
  //   callbackFunction: function(elem, action){
  //
  //
  //     // setTimeout(function(){
  //       console.log(elem)
  //       $('#carouselCaptions.carousel').carousel("dispose");
  //       $('#carouselCaptions.carousel').carousel(
  //         {
  //           interval: 3000
  //         }
  //       );
  //     // }, 500);
  //   }
  // });


  // Locatios accordion - desktop
  $('#accordionLocation-dt .button-head').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#locations").offset().top
    }, 400);
    $('.modal-dialog .close').trigger('click');
    $('#locations .button-modal').removeClass('active');

  });

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

  // Locations Config Modal //////////////////////////////////////////////////////////////
    var locattionBtn = $('#locations .button-modal');
    locattionBtn.on('click', function(event) {
      $('.modal-dialog .close').trigger('click');
      $('body').removeAttr('style');
      $('#locations .button-modal').removeClass('active');
      $(this).addClass('active');
    });

    // Locations Remove modal //////////////////////////////////////////////////////////////
    $('.modal .close').on('click', function() {
        $('#locations .button-modal').removeClass('active');
        $('#locations .button-head').removeClass('sub-active');

    });
    // var closeModal = function() {
    //   $('.modal-dialog .close').trigger('click');
    //   $('#locations .button-modal').removeClass('active');
    // }
    // $('#locations').on('mouseleave', function(){
    //   $('.modal-dialog .close').trigger('click');
    // });

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

  var blogsDesktopRowAmount = $('#blogs-page .oxford-dt.blogs-list .row').length;
  for(i=1; i<=blogsDesktopRowAmount; i++) {
    classToggle('#blogs-page .oxford-dt .row_'+i, 1, '', '#blogs-page .oxford-dt .row_'+i, 'fade-in');
  }

  var blogsTabletRowAmount = $('#blogs-page .oxford-tl.blogs-list .row').length;
  for(i=1; i<=blogsTabletRowAmount; i++) {
    classToggle('#blogs-page .oxford-tl .row_'+i, 1, '', '#blogs-page .oxford-tl .row_'+i, 'fade-in');
  }

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

  // classToggle('#careers-page .row_2', 0.8, '', '#careers-page .row_2', 'fade-in');
  //
  // classToggle('#careers-page .row_3', 0.8, '', '#careers-page .row_3', 'fade-in');
  //
  // classToggle('#careers-page .row_4', 0.8, '', '#careers-page .row_4', 'fade-in');
  //
  classToggle('#careers-page .row_0', 0.8, '', '#careers-page .row_0', 'fade-in');

  // classToggle('#careers-page .section-apply', 0.8, '', '#careers-page .section-apply', 'fade-in');


  // Careers Detail - banner ----------------------------------------- //
  classToggle('#careersdetail-page', 0.8, '', '#careersdetail-page .banner', 'fade-in');

  // Careers - header ----------------------------------------- //
  classToggle('#careersdetail-page .content', 0.7, '', '#careersdetail-page .content', 'fade-in');

  // Careers - row ----------------------------------------- //
  classToggle('#careersdetail-page .content', 0.8, '', '#careersdetail-page .careers-detail', 'fade-in');

  // Careers Apply form - row ----------------------------------------- //
  classToggle('#careersdetail-page #careers-apply-form', 0.7, '', '#careersdetail-page #careers-apply-form .section-apply', 'fade-in');


  // Contact us - banner ----------------------------------------- //
  classToggle('#contactus-page', 0.8, '', '#contactus-page .banner', 'fade-in');

  // Careers - header ----------------------------------------- //
  classToggle('#contactus-page .content', 0.7, '', '#contactus-page .content', 'fade-in');

  // Careers - row ----------------------------------------- //
  classToggle('#contactus-page  #contactus-form', 0.8, '', '#contactus-page .section-form', 'fade-in');

  classToggle('#contactus-page .row_0', 0.8, '', '#contactus-page .row_0', 'fade-in');


  // Why us - banner ----------------------------------------- //
  classToggle('#whyus-page', 0.8, '', '#whyus-page .banner', 'fade-in');

  // Why - header ----------------------------------------- //
  classToggle('#whyus-page .content', 0.7, '', '#whyus-page .content', 'fade-in');

  // Why - row ----------------------------------------- //
  classToggle('#whyus-page .row_1', 0.8, '', '#whyus-page .row_1', 'fade-in');

  classToggle('#whyus-page .row_2', 0.8, '', '#whyus-page .row_2', 'fade-in');

  classToggle('#whyus-page .row_3', 0.8, '', '#whyus-page .row_3', 'fade-in');

  classToggle('#whyus-page .row_4', 0.8, '', '#whyus-page .row_4', 'fade-in');

  classToggle('#whyus-page .getintouch-section', 0.7, '', '#whyus-page .getintouch-section', 'fade-in');

  // Demandfulfillment - banner ----------------------------------------- //
  classToggle('#hospitality-page', 0.8, '', '#hospitality-page .banner', 'fade-in');

  // Demandfulfillment - header ----------------------------------------- //
  classToggle('#hospitality-page .content', 0.7, '', '#hospitality-page .content', 'fade-in');

  // Demandfulfillment - section ----------------------------------------- //
  classToggle('#hospitality-page .feasibility-section', 0.7, '', '#hospitality-page .feasibility-section', 'fade-in');

  classToggle('#hospitality-page .development-section', 0.7, '', '#hospitality-page .development-section', 'fade-in');

  classToggle('#hospitality-page .operational-section', 0.7, '', '#hospitality-page .operational-section', 'fade-in');

  classToggle('#hospitality-page .discover-section', 0.2, '', '#hospitality-page .discover-section', 'fade-in');

  classToggle('#hospitality-page .roles-section', 0.7, '', '#hospitality-page .roles-section', 'fade-in');

  classToggle('#hospitality-page .getintouch-section', 0.7, '', '#hospitality-page .getintouch-section', 'fade-in');

  // Hospitality - carousel interval start autoplay ----------------------------------------- //
  var scrollToggleClass = new ScrollMagic.Scene({
    triggerElement: '#hospitality-page .carousel-section',
    triggerHook: 0.1,
    duration: 0
  })
  // .addIndicators({ name: 'debug indicators'})
  .setClassToggle('#hospitality-page .carousel-section .carousel-inner', 'autoplay')
  .on('start', function(){
    $('#carouselCaptions.carousel').carousel("dispose");
    $('#carouselCaptions.carousel').carousel(
      {
        interval: 4000
      }
    );
  })
  .addTo(controller);


  // Demandfulfillment - banner ----------------------------------------- //
  classToggle('#demandfulfillment-page', 0.8, '', '#demandfulfillment-page .banner', 'fade-in');

  // Demandfulfillment - header ----------------------------------------- //
  classToggle('#demandfulfillment-page .content', 0.7, '', '#demandfulfillment-page .content', 'fade-in');

  // Demandfulfillment - carousel ----------------------------------------- //
  classToggle('#demandfulfillment-page .carousel-section', 0.7, '', '#demandfulfillment-page .carousel-section', 'fade-in');

  classToggle('#demandfulfillment-page .getintouch-section', 0.7, '', '#demandfulfillment-page .getintouch-section', 'fade-in');

  // Demandfulfillment - carousel interval start autoplay ----------------------------------------- //
  var scrollToggleClass = new ScrollMagic.Scene({
    triggerElement: '#demandfulfillment-page .carousel-section',
    triggerHook: 0.1,
    duration: 0
  })
  // .addIndicators({ name: 'debug indicators'})
  .setClassToggle('#demandfulfillment-page .carousel-section .carousel-inner', 'autoplay')
  .on('start', function(){
    $('#carouselCaptions.carousel').carousel("dispose");
    $('#carouselCaptions.carousel').carousel(
      {
        interval: 4000
      }
    );
  })
  .addTo(controller);


  // Strategy - banner ----------------------------------------- //
  classToggle('#strategy-page', 0.8, '', '#strategy-page .banner', 'fade-in');

  // Strategy - header ----------------------------------------- //
  classToggle('#strategy-page .content', 0.7, '', '#strategy-page .content', 'fade-in');

  // Strategy - carousel ----------------------------------------- //
  classToggle('#strategy-page .carousel-section', 0.7, '', '#strategy-page .carousel-section', 'fade-in');

  classToggle('#strategy-page .getintouch-section', 0.7, '', '#strategy-page .getintouch-section', 'fade-in');

  // Strategy - carousel interval start autoplay ----------------------------------------- //
  var scrollToggleClass = new ScrollMagic.Scene({
    triggerElement: '#strategy-page .carousel-section',
    triggerHook: 0.1,
    duration: 0
  })
  // .addIndicators({ name: 'debug indicators'})
  .setClassToggle('#strategy-page .carousel-section .carousel-inner', 'autoplay')
  .on('start', function(){
    $('#carouselCaptions.carousel').carousel("dispose");
    $('#carouselCaptions.carousel').carousel(
      {
        interval: 4000
      }
    );
  })
  .addTo(controller);


  // Demand Generation - banner ----------------------------------------- //
  classToggle('#demandgeneration-page', 0.8, '', '#demandgeneration-page .banner', 'fade-in');

  // Demand Generation - header ----------------------------------------- //
  classToggle('#demandgeneration-page .content', 0.7, '', '#demandgeneration-page .content', 'fade-in');

  // Demand Generation - carousel ----------------------------------------- //
  classToggle('#demandgeneration-page .carousel-section', 0.7, '', '#demandgeneration-page .carousel-section', 'fade-in');

  classToggle('#demandgeneration-page .getintouch-section', 0.7, '', '#demandgeneration-page .getintouch-section', 'fade-in');

  // Demand Generation - carousel interval start autoplay ----------------------------------------- //
  var scrollToggleClass = new ScrollMagic.Scene({
    triggerElement: '#demandgeneration-page .carousel-section',
    triggerHook: 0.1,
    duration: 0
  })
  // .addIndicators({ name: 'debug indicators'})
  .setClassToggle('#demandgeneration-page .carousel-section .carousel-inner', 'autoplay')
  .on('start', function(){
    $('#carouselCaptions.carousel').carousel("dispose");
    $('#carouselCaptions.carousel').carousel(
      {
        interval: 4000
      }
    );
  })
  .addTo(controller);


  // Financial Transformation - banner ----------------------------------------- //
  classToggle('#financialtransformation-page', 0.8, '', '#financialtransformation-page .banner', 'fade-in');

  // Financial Transformation - header ----------------------------------------- //
  classToggle('#financialtransformation-page .content', 0.7, '', '#financialtransformation-page .content', 'fade-in');

  // Financial Transformation - carousel ----------------------------------------- //
  classToggle('#financialtransformation-page .carousel-section', 0.7, '', '#financialtransformation-page .carousel-section', 'fade-in');

  classToggle('#financialtransformation-page .getintouch-section', 0.7, '', '#financialtransformation-page .getintouch-section', 'fade-in');

  // Financial Transformation - carousel interval start autoplay ----------------------------------------- //
  var scrollToggleClass = new ScrollMagic.Scene({
    triggerElement: '#financialtransformation-page .carousel-section',
    triggerHook: 0.1,
    duration: 0
  })
  // .addIndicators({ name: 'debug indicators'})
  .setClassToggle('#financialtransformation-page .carousel-section .carousel-inner', 'autoplay')
  .on('start', function(){
    $('#carouselCaptions.carousel').carousel("dispose");
    $('#carouselCaptions.carousel').carousel(
      {
        interval: 4000
      }
    );
  })
  .addTo(controller);


  // Organisational Optimisation - banner ----------------------------------------- //
  classToggle('#organisationaloptimisation-page', 0.8, '', '#organisationaloptimisation-page .banner', 'fade-in');

  // Organisational Optimisation - header ----------------------------------------- //
  classToggle('#organisationaloptimisation-page .content', 0.7, '', '#organisationaloptimisation-page .content', 'fade-in');

  // Organisational Optimisation - carousel ----------------------------------------- //
  classToggle('#organisationaloptimisation-page .carousel-section', 0.7, '', '#organisationaloptimisation-page .carousel-section', 'fade-in');

  classToggle('#organisationaloptimisation-page .getintouch-section', 0.7, '', '#organisationaloptimisation-page .getintouch-section', 'fade-in');

  // Organisational Optimisation - carousel interval start autoplay ----------------------------------------- //
  var scrollToggleClass = new ScrollMagic.Scene({
    triggerElement: '#organisationaloptimisation-page .carousel-section',
    triggerHook: 0.1,
    duration: 0
  })
  // .addIndicators({ name: 'debug indicators'})
  .setClassToggle('#organisationaloptimisation-page .carousel-section .carousel-inner', 'autoplay')
  .on('start', function(){
    $('#carouselCaptions.carousel').carousel("dispose");
    $('#carouselCaptions.carousel').carousel(
      {
        interval: 4000
      }
    );
  })
  .addTo(controller);

});
