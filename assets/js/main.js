$(document).ready(function(){
  // Animate Brain
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

  // Config Modal
  var converageBtn = $('#converage .button-none');
  converageBtn.on('click', function(event) {
    $('.close').trigger('click');
    $('body').removeAttr('style');
    $('#converage button').removeClass('active');
    $(this).addClass('active');
  });

  // Remove modal
  $('#converage').on('mouseleave', function(){
    console.log(555);
    $('.close').trigger('click');
    $('#converage button').removeClass('active');
  });


});
