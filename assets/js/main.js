$(document).ready(function(){


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
    mouseX = Math.round(mouseX * 100)/300;
    mouseY = Math.round(mouseY * 100)/200;

    // brain.css("transform", "rotateX("+mouseY*-10+"deg) rotateY("+mouseX*10+"deg)");
    brain.css("transform", "rotateY("+mouseX*10+"deg)");
  });



  // Config Modal //////////////////////////////////////////////////////////////
  var converageBtn = $('#converage .button-none');
  converageBtn.on('click', function(event) {
    $('.close').trigger('click');
    $('body').removeAttr('style');
    $('#converage button').removeClass('active');
    $(this).addClass('active');
  });



  // Remove modal //////////////////////////////////////////////////////////////
  var closeModal = function() {
    $('.close').trigger('click');
    $('#converage button').removeClass('active');
  }
  $('#converage').on('mouseleave', function(){
    closeModal();
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



  // ScrollMagic ///////////////////////////////////////////////////////////////
  var controller = new ScrollMagic.Controller();

  // Pin intro ----------------------------------------- //
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#intro',
  //   triggerHook: 0,
  //   duration: '100'
  // })
  // .setPin('#intro', { pushFollowers: false })
  // .addTo(controller);

  // Pin banner ----------------------------------------- //
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#banner',
  //   triggerHook: 0,
  //   duration: '100'
  // })
  // .addIndicators({ name: 'banner'})
  // .setPin('#banner')
  // .addTo(controller);

  // Cloud banner ----------------------------------------- //
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#banner',
  //   triggerHook: 0.9,
  //   duration: '300'
  // })
  // .addIndicators({ name: 'cloud banner'})
  // .setClassToggle('#banner .cloud', 'fade-in')
  // .addTo(controller);

  // City banner ----------------------------------------- //
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#banner',
  //   triggerHook: 0.9,
  //   duration: '300'
  // })
  // .addIndicators({ name: 'city banner'})
  // .setClassToggle('#banner .city', 'fade-in')
  // .addTo(controller);

  // What we do - img ----------------------------------------- //
  var imgWhatwedo = new ScrollMagic.Scene({
    triggerElement: '#whatwedo',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'whatwedo img'})
  .setClassToggle('#whatwedo img', 'fade-in')
  .addTo(controller);

  // What we do - content ----------------------------------------- //
  var contentWhatwedo = new ScrollMagic.Scene({
    triggerElement: '#whatwedo',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'whatwedo content'})
  .setClassToggle('#whatwedo .content', 'fade-in')
  .addTo(controller);

  // practics - city ----------------------------------------- //
  var practicsCity = new ScrollMagic.Scene({
    triggerElement: '#practics',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'practics city'})
  .setClassToggle('#practics .city', 'fade-in')
  .addTo(controller);

  // practics - content ----------------------------------------- //
  var practicsContent = new ScrollMagic.Scene({
    triggerElement: '#practics',
    triggerHook: 0.3,
  })
  // .addIndicators({ name: 'practics content'})
  .setClassToggle('#practics .content', 'fade-in')
  .addTo(controller);

  // Hospitality - img ----------------------------------------- //
  var imgHospitality = new ScrollMagic.Scene({
    triggerElement: '#hospitality',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'hospitality img'})
  .setClassToggle('#hospitality img', 'fade-in')
  .addTo(controller);

  // Hospitality - content ----------------------------------------- //
  var contentHospitality = new ScrollMagic.Scene({
    triggerElement: '#hospitality',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'hospitality content'})
  .setClassToggle('#hospitality .figcaption', 'fade-in')
  .addTo(controller);

  // Hospitality - nav ----------------------------------------- //
  var menuHospitality = new ScrollMagic.Scene({
    triggerElement: '#hospitality',
    triggerHook: 0.35,
  })
  // .addIndicators({ name: 'hospitality tab-nav'})
  .setClassToggle('#hospitality .carousel-indicators', 'fade-in')
  .addTo(controller);

  // locations - bg  ----------------------------------------- //
  var bgLocations = new ScrollMagic.Scene({
    triggerElement: '#locations',
    triggerHook: 0.85,
  })
  // .addIndicators({ name: 'locations'})
  .setClassToggle('#locations', 'fade-in')
  .addTo(controller);

  // locations - content  ----------------------------------------- //
  var contentLocations = new ScrollMagic.Scene({
    triggerElement: '#locations',
    triggerHook: 0.45,
  })
  // .addIndicators({ name: 'locations content'})
  .setClassToggle('#locations .content', 'fade-in')
  .addTo(controller);

  // Blog ----------------------------------------- //
  var contentBlog = new ScrollMagic.Scene({
    triggerElement: '#blog',
    triggerHook: 0.70,
  })
  // .addIndicators({ name: 'blog'})
  .setClassToggle('#blog', 'fade-in')
  .addTo(controller);

  // Get in touch ----------------------------------------- //
  var getintouch = new ScrollMagic.Scene({
    triggerElement: '#getintouch',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'getintouch'})
  .setClassToggle('#getintouch', 'fade-in')
  .addTo(controller);

  // Blogs - header ----------------------------------------- //
  var blogsHeader = new ScrollMagic.Scene({
    triggerElement: '#blogs-page',
    triggerHook: 0.5,
  })
  // .addIndicators({ name: 'blogsHeader'})
  .setClassToggle('#blogs-page', 'fade-in')
  .addTo(controller);

  // Blogs - row ----------------------------------------- //
  var blogsRow1 = new ScrollMagic.Scene({
    triggerElement: '#blogs-page .row_1',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'blogs-page items1'})
  .setClassToggle('#blogs-page .row_1 .column', 'fade-in')
  .addTo(controller);

  var blogsRow2 = new ScrollMagic.Scene({
    triggerElement: '#blogs-page .row_2',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'blogs-page items2'})
  .setClassToggle('#blogs-page .row_2 .column', 'fade-in')
  .addTo(controller);

  var blogsRow3 = new ScrollMagic.Scene({
    triggerElement: '#blogs-page .row_3',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'blogs-page items3'})
  .setClassToggle('#blogs-page .row_3 .column', 'fade-in')
  .addTo(controller);

  // Blogs detail - header ----------------------------------------- //
  var headerBlogdetail = new ScrollMagic.Scene({
    triggerElement: '#blogsdetail-page',
    triggerHook: 0.5,
  })
  // .addIndicators({ name: 'blogs-page items3'})
  .setClassToggle('#blogsdetail-page', 'fade-in')
  .addTo(controller);

  // Blogs detail - content ----------------------------------------- //
  var contentBlogdetail = new ScrollMagic.Scene({
    triggerElement: '#blogsdetail-page .detail',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'blogsdetail-page detail'})
  .setClassToggle('#blogsdetail-page .detail', 'fade-in')
  .addTo(controller);

  // Blogs detail - related ----------------------------------------- //
  var relatedBlogdetail = new ScrollMagic.Scene({
    triggerElement: '#blogsdetail-page .related',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'blogsdetail-page related'})
  .setClassToggle('#blogsdetail-page .related', 'fade-in')
  .addTo(controller);

  // Team - banner ----------------------------------------- //
  var bannerTeam = new ScrollMagic.Scene({
    triggerElement: '#team-page',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'team-page'})
  .setClassToggle('#team-page .banner', 'fade-in')
  .addTo(controller);

  // Team - header ----------------------------------------- //
  var headerTeam = new ScrollMagic.Scene({
    triggerElement: '#team-page .content',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'team-page'})
  .setClassToggle('#team-page .content', 'fade-in')
  .addTo(controller);

  // Team - row ----------------------------------------- //
  var rowTeam1 = new ScrollMagic.Scene({
    triggerElement: '#team-page .row_1',
    triggerHook: 0.9,
  })
  // .addIndicators({ name: 'team-page'})
  .setClassToggle('#team-page .row_1 .column', 'fade-in')
  .addTo(controller);

  var rowTeam2 = new ScrollMagic.Scene({
    triggerElement: '#team-page .row_2',
    triggerHook: 0.9,
  })
  // .addIndicators({ name: 'team-page'})
  .setClassToggle('#team-page .row_2 .column', 'fade-in')
  .addTo(controller);

  // Team detail - banner ----------------------------------------- //
  var bannerTeamdetail = new ScrollMagic.Scene({
    triggerElement: '#teamdetail-page',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'teamdetail-page'})
  .setClassToggle('#teamdetail-page .banner', 'fade-in')
  .addTo(controller);

  // Team detail - content ----------------------------------------- //
  var contentTeamdetail = new ScrollMagic.Scene({
    triggerElement: '#teamdetail-page .detail',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'teamdetail-page'})
  .setClassToggle('#teamdetail-page .detail', 'fade-in')
  .addTo(controller);

  // Team detail - paragrah ----------------------------------------- //
  var paragrahTeamdetail1 = new ScrollMagic.Scene({
    triggerElement: '#teamdetail-page .paragraph._1',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'teamdetail-page'})
  .setClassToggle('#teamdetail-page .detail .paragraph', 'fade-in')
  .addTo(controller);

  // Locations - banner ----------------------------------------- //
  var bannerTeam = new ScrollMagic.Scene({
    triggerElement: '#locations-page',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'locations-page'})
  .setClassToggle('#locations-page .banner', 'fade-in')
  .addTo(controller);

  // Locations - header ----------------------------------------- //
  var headerTeam = new ScrollMagic.Scene({
    triggerElement: '#locations-page .content',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'locations-page'})
  .setClassToggle('#locations-page .content', 'fade-in')
  .addTo(controller);

  // Locations - row ----------------------------------------- //
  var rowLocations1 = new ScrollMagic.Scene({
    triggerElement: '#locations-page .row_1',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'locations-page'})
  .setClassToggle('#locations-page .row_1 .column', 'fade-in')
  .addTo(controller);

  var rowLocations2 = new ScrollMagic.Scene({
    triggerElement: '#locations-page .row_2',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'locations-page'})
  .setClassToggle('#locations-page .row_2 .column', 'fade-in')
  .addTo(controller);

  var rowLocations3 = new ScrollMagic.Scene({
    triggerElement: '#locations-page .row_3',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'locations-page'})
  .setClassToggle('#locations-page .row_3 .column', 'fade-in')
  .addTo(controller);

  var rowLocations4 = new ScrollMagic.Scene({
    triggerElement: '#locations-page .row_4',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'locations-page'})
  .setClassToggle('#locations-page .row_4 .column', 'fade-in')
  .addTo(controller);

  // Demandfulfillment - banner ----------------------------------------- //
  var bannerDemandfulfillment = new ScrollMagic.Scene({
    triggerElement: '#demandfulfillment-page',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'demandfulfillment-page'})
  .setClassToggle('#demandfulfillment-page .banner', 'fade-in')
  .addTo(controller);

  // Demandfulfillment - header ----------------------------------------- //
  var headerDemandfulfillment = new ScrollMagic.Scene({
    triggerElement: '#demandfulfillment-page .content',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'demandfulfillment-page'})
  .setClassToggle('#demandfulfillment-page .content', 'fade-in')
  .addTo(controller);

  // Demandfulfillment - carousel ----------------------------------------- //
  var carouselDemandfulfillment = new ScrollMagic.Scene({
    triggerElement: '#demandfulfillment-page .carousel-section',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'demandfulfillment-page'})
  .setClassToggle('#demandfulfillment-page .carousel-section', 'fade-in')
  .addTo(controller);

  // Strategy - banner ----------------------------------------- //
  var bannerStrategy = new ScrollMagic.Scene({
    triggerElement: '#strategy-page',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'strategy-page'})
  .setClassToggle('#strategy-page .banner', 'fade-in')
  .addTo(controller);

  // Strategy - header ----------------------------------------- //
  var headerStrategy = new ScrollMagic.Scene({
    triggerElement: '#strategy-page .content',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'strategy-page'})
  .setClassToggle('#strategy-page .content', 'fade-in')
  .addTo(controller);

  // Strategy - carousel ----------------------------------------- //
  var carouselStrategy = new ScrollMagic.Scene({
    triggerElement: '#strategy-page .carousel-section',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'strategy-page'})
  .setClassToggle('#strategy-page .carousel-section', 'fade-in')
  .addTo(controller);

  // Financial Transformation - banner ----------------------------------------- //
  var bannerFinancialtransformation = new ScrollMagic.Scene({
    triggerElement: '#financialtransformation-page',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'financialtransformation-page'})
  .setClassToggle('#financialtransformation-page .banner', 'fade-in')
  .addTo(controller);

  // Financial Transformation - header ----------------------------------------- //
  var headerFinancialtransformation = new ScrollMagic.Scene({
    triggerElement: '#financialtransformation-page .content',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'financialtransformation-page'})
  .setClassToggle('#financialtransformation-page .content', 'fade-in')
  .addTo(controller);

  // Financial Transformation - carousel ----------------------------------------- //
  var carouselFinancialtransformation = new ScrollMagic.Scene({
    triggerElement: '#financialtransformation-page .carousel-section',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'financialtransformation-page'})
  .setClassToggle('#financialtransformation-page .carousel-section', 'fade-in')
  .addTo(controller);



  // Initial ///////////////////////////////////////////////////////////////////
  $('#intro .logo').addClass('fade-in');


});
