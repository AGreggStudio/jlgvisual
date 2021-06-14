function loop ($swap) {
  var next = $swap.find("li.visible").removeClass("visible").index() + 1;
  
  if(next >= $swap.find("li").length) {
    next = 0;
  }
  
  $swap.width($($swap.find("li").get(next)).addClass("visible").outerWidth());
  $swap.css({ "transform" : "translateY(-" + next * 3 + "rem)" });
  
  setTimeout(function () { loop($swap); }, 2000);
};

$(function () {
  $(".swap").each(function () {
    var $this = $(this);
    
    $this.find("li").each(function () {
      $(this).css({ top: $(this).index() * 3 + "rem" });
    });
    
    loop($this);
  });
});

(function() {
  var follower, init, mouseX, mouseY, positionElement, printout, timer;

  follower = document.getElementById('follower');

  printout = document.getElementById('printout');

  mouseX = (event) => {
    return event.clientX;
  };

  mouseY = (event) => {
    return event.clientY;
  };

  positionElement = (event) => {
    var mouse;
    mouse = {
      x: mouseX(event),
      y: mouseY(event)
    };
    follower.style.top = mouse.y + 'px';
    return follower.style.left = mouse.x + 'px';
  };

  timer = false;

  window.onmousemove = init = (event) => {
    var _event;
    _event = event;
    return timer = setTimeout(() => {
      return positionElement(_event);
    }, 1);
  };

}).call(this);