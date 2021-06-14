

	

	<script> var tl = new TimelineMax({repeat:20});
		
$(".fade-out").each(function(index, element){
  tl.to(element, 1, {x:200, opacity:1})
    .to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=5")
})</script>

	<script> var tl = new TimelineMax({repeat:20});
		
$(".fade-out1").each(function(index, element){
  tl.to(element, 1, {x:200, opacity:1})
    .to(element, 1, {x:400, opacity:0, ease:Power2.easeIn}, "+=5")
})</script>	

	
	
<script>
	
	var path = new TimelineMax({ repeat: -1, repeatDelay: 1 });
path.to("#drone", 10, {
  bezier: { type: "quadratic",
    values: [{x:50,y:100},{x:450,y:100},{x:600,y:300}],
    autoRotate:45
  },
  ease: Power1.easeInOut
},'T1')
.from("#drone",2.5,{scale:0,repeat:1,yoyo:true,ease:Sine.easeInOut},'T1')
.to("#drone", 5, {
  bezier: {type:"quadratic",
    values: [{x:800,y:300},{x:450,y:400},{x:0,y:0}],
    autoRotate:-230
  },
  ease: Power1.easeInOut
},'T2')
.to("#drone",6,{scale:6,repeat:1,yoyo:true,ease:Sine.easeInOut},'T2')



	
$(function () { // wait for document ready
     // init
     var controller = new ScrollMagic.Controller();
     // define movement of panels
     var wipeAnimation = new TimelineMax()
         .fromTo("div.panel.second", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("div.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         .fromTo("div.panel.fourth", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
         .fromTo("div.panel.fifth", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from bottom
	     
         // create scene to pin and link animation
     new ScrollMagic.Scene({
         triggerElement: "#pinContainer",
         triggerHook: "onLeave",
         duration: "300%"
     })
     .setPin("#pinContainer")
     .setTween(wipeAnimation)
     .addTo(controller);
});
	
</script>