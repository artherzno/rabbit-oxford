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

  // Pin intro
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#intro',
  //   triggerHook: 0,
  //   duration: '100'
  // })
  // .setPin('#intro', { pushFollowers: false })
  // .addTo(controller);

  // Pin banner
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#banner',
  //   triggerHook: 0,
  //   duration: '100'
  // })
  // .addIndicators({ name: 'banner'})
  // .setPin('#banner')
  // .addTo(controller);

  // Cloud banner
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#banner',
  //   triggerHook: 0.9,
  //   duration: '300'
  // })
  // .addIndicators({ name: 'cloud banner'})
  // .setClassToggle('#banner .cloud', 'fade-in')
  // .addTo(controller);

  // City banner
  // var pinIntro = new ScrollMagic.Scene({
  //   triggerElement: '#banner',
  //   triggerHook: 0.9,
  //   duration: '300'
  // })
  // .addIndicators({ name: 'city banner'})
  // .setClassToggle('#banner .city', 'fade-in')
  // .addTo(controller);

  // What we do - img
  var imgWhatwedo = new ScrollMagic.Scene({
    triggerElement: '#whatwedo',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'whatwedo img'})
  .setClassToggle('#whatwedo img', 'fade-in')
  .addTo(controller);

  // What we do - content
  var contentWhatwedo = new ScrollMagic.Scene({
    triggerElement: '#whatwedo',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'whatwedo content'})
  .setClassToggle('#whatwedo .content', 'fade-in')
  .addTo(controller);

  // practics - city
  var practicsCity = new ScrollMagic.Scene({
    triggerElement: '#practics',
    triggerHook: 0.75,
  })
  // .addIndicators({ name: 'practics city'})
  .setClassToggle('#practics .city', 'fade-in')
  .addTo(controller);

  // practics - content
  var practicsContent = new ScrollMagic.Scene({
    triggerElement: '#practics',
    triggerHook: 0.5,
  })
  // .addIndicators({ name: 'practics content'})
  .setClassToggle('#practics .content', 'fade-in')
  .addTo(controller);

  // Hospitality - img
  var imgHospitality = new ScrollMagic.Scene({
    triggerElement: '#hospitality',
    triggerHook: 0.8,
  })
  // .addIndicators({ name: 'hospitality img'})
  .setClassToggle('#hospitality img', 'fade-in')
  .addTo(controller);

  // Hospitality - content
  var contentHospitality = new ScrollMagic.Scene({
    triggerElement: '#hospitality',
    triggerHook: 0.7,
  })
  // .addIndicators({ name: 'hospitality content'})
  .setClassToggle('#hospitality .figcaption', 'fade-in')
  .addTo(controller);

  // Hospitality - nav
  var tabnavHospitality = new ScrollMagic.Scene({
    triggerElement: '#hospitality',
    triggerHook: 0.35,
  })
  // .addIndicators({ name: 'hospitality tab-nav'})
  .setClassToggle('#hospitality .tab-nav', 'fade-in')
  .addTo(controller);

  // converage - bg
  var bgConverage = new ScrollMagic.Scene({
    triggerElement: '#converage',
    triggerHook: 0.85,
  })
  // .addIndicators({ name: 'converage'})
  .setClassToggle('#converage', 'fade-in')
  .addTo(controller);

  // converage - content
  var contentConverage = new ScrollMagic.Scene({
    triggerElement: '#converage',
    triggerHook: 0.45,
  })
  // .addIndicators({ name: 'converage content'})
  .setClassToggle('#converage .content', 'fade-in')
  .addTo(controller);

  // Blog
  var contentBlog = new ScrollMagic.Scene({
    triggerElement: '#blog',
    triggerHook: 0.70,
  })
  // .addIndicators({ name: 'blog'})
  .setClassToggle('#blog', 'fade-in')
  .addTo(controller);

  // Get in touch
  var getintouch = new ScrollMagic.Scene({
    triggerElement: '#getintouch',
    triggerHook: 0.70,
  })
  // .addIndicators({ name: 'getintouch'})
  .setClassToggle('#getintouch', 'fade-in')
  .addTo(controller);

  // Initial ///////////////////////////////////////////////////////////////////
  $('#intro .logo').addClass('fade-in');


});
