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

  // hover logo animate
  // var options = {
  //   effectWeight: 1.5,
  //   outerBuffer: 1.30,
  //   elementDepth: 100,
  //   smoothingMultiplier: 1.5,
  //   directions: [ 1, 1, -1, 1, 1, 1, 1, 1 ]
  //     };
  // $('.logo').logosDistort();
  // var logo = $(".logo");
  // logo.on("mousemove",function(e) {
  //   var ax = -($(window).innerWidth()/2- e.pageX)/20;
  //   var ay = ($(window).innerHeight()/2- e.pageY)/10;
  //   logo.attr("style", "transform: rotateY("+ax+"deg); -webkit-transform: rotateY("+ax+"deg);-moz-transform: rotateY("+ax+"deg)");
  // });
});
