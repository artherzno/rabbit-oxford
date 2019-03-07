$(document).ready(function(){
  console.log('test');
  // init controller
  var controller = new ScrollMagic.Controller();

  // pin the intro
  var pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#section-1',
    triggerHook: 0
  })
  .setPin('#section-1')
  .addTo(controller);


  // loop each section
  $('.section').each(function(){
    // create a scene
    var section = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            duration: '600',
            triggerHook: 0.5,
            // reverse: false
        })
        .setClassToggle(this.children[0], 'fade-in')
        // .setClassToggle(this, 'on')
        .addIndicators({
          name: 'fade scene',
          colorTrigger: 'red',
          colorStart: 'yellow',
          colorEnd: 'orange'
        })
        // .on('start', function(event) {
        //   alert('Hi');
        // })
        .addTo(controller); // assign the scene to the controller
  });

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
    mouseX = Math.round(mouseX * 100)/200;
    mouseY = Math.round(mouseY * 100)/200;

    brain.css("transform", "rotateX("+mouseY*-10+"deg) rotateY("+mouseX*10+"deg)");
  });
});
