var h = window.innerHeight;
var w = 1600;
var realW = window.innerWidth;

var scroll;
$('.sub-section-5').css('margin-left', $('.section-3').position().top + h + h/2 + 'px');

$('canvas').css({ 'opacity': 0 });

// console.log($('.sub-section-5').outerWidth());
$('.section-3').css('height', $('.sub-section-5').outerWidth() + 2.5*h + 'px');

$('.section-6').css('margin-top', $('.overlay-content').height() - $('.section-5').height() + realW/2 + 'px');


window.onscroll=function() {
	scroll = window.scrollY;

  $('.sub-section-2').css('left', '-' + scroll + 'px');
  $('.sub-section-3').css('left', '-' + scroll + 'px');
  $('.sub-section-4').css('left', '-' + scroll + 'px');
  $('.sub-section-5').css('left', '-' + scroll + 'px');


	//console.log(scrollSection3);
  //$('.sub-section3-1').css('left', '-' + scroll + 'px');
	if(scroll < 1 * w){
    $('.animation-container').css({ 'opacity': 0.6 });
  }
	if(scroll > 1 * w){
    $('.animation-container').css({ 'opacity': 0 });
  }
  if(scroll < 5 * w){
    $('.circle').css({ 'opacity': 1 });
  }
  if(scroll > 5 * w){
    $('.circle').css({ 'opacity': 0.7 });
  }

  if(scroll < 4.5 * w){
    $('.dots').css({ 'opacity': 0 });
  }
  if(scroll > 4.5 * w){
    $('.dots').css({ 'opacity': 1 });
  }

  if(scroll < 10 * w){
    $('body').css("background-color","white");
    $('.sub-section-4 > p').css("color","black");
    $('.dots').css("color","black");
    $('.info-item').css("color","black");
  }
  if(scroll > 10 * w){
    $('body').css("background-color","black");
    $('.sub-section-4 > p').css("color","white");
    $('.dots').css("color","white");
    $('.info-item').css("color","white");
  }

  if(scroll < 14062 + w*5 + w/2 - w/4){
    $('.sub-section-4 > p').css({ 'opacity': 1 });
    $('.veridico-span').css({position: 'absolute'});
  }
  if(scroll > 14062 + w*5 + w/2 - w/4){
    $('.sub-section-4 > p').css({ 'opacity': 0 });
    $('body').css("background-color","white");
    $('.sub-section-4 > p').css("color","black");
    $('.dots').css("color","black");
    $('.info-item').css("color","black");
  }

  if(scroll < 14062 + w*6){
    $('.circle').css("height", "500px");
    $(".section-number").html("1");
  }
  if(scroll > 14062 + w*6){
    $('.circle').css("height", "0px");
    $(".section-number").html("2");
  }

	var bookStart = $('.section-2').position().top + $('#book-start').position().top;
	if(scroll < bookStart){
    $('canvas').css({ 'opacity': 0 });
  }
  if(scroll > bookStart){
    $('canvas').css({ 'opacity': 0.5 });
  }
  if(scroll > $('.section-3').position().top){
    $('canvas').css({ 'opacity': 1 });
		$('body').css("background-color","black");
		$('.info-item').css("color","white");
		$(".section-number").html("3");
  }
	headText.restart();
	headText2.restart();
	headText3.restart();
	headText4.restart();
	headText5.restart();
	if(scroll > $('.section-4').position().top){
    $('canvas').css({ 'opacity': 0 });
    $('.animation-container').css({ 'opacity': 0.6 });
		$('body').css("background-color","white");
		$('.info-item').css("color","black");
		$(".section-number").html("4");
  }
	if(scroll < $('.section-4').position().top){
    $('.animation-container').css({ 'opacity': 0 });
  }
	if(scroll > $('.section-5').position().top){
		$(".section-number").html("5");
		$('.circle').css({ 'opacity': 0.7 });
  }
	if(scroll > $('.section-5').position().top + $('.overlay-content').height()){
		$(".section-number").html("SI");
		$('.circle').css("height", "500px");
		$('.animation-container').css({ 'opacity': 0 });
		$('.circle').css({ 'opacity': 0.2 });
  }
}

var miopiaBoolean = true;
function miopia() {
  // console.log(miopiaBoolean);
  if(miopiaBoolean) {
    $('.section-right').css("filter","blur(0px)");
    miopiaBoolean = false;
  } else {
    $('.section-right').css("filter","blur(5px)");
    miopiaBoolean = true;
  }
}

var extranjeroBoolean = true;
function extranjero() {
  if(extranjeroBoolean) {
    $(".line1").html("— Vendo biblias — me dijo.");
    $(".line2").html("— En esta casa hay algunas biblias inglesas, incluso la primera, la de John Wiclif. Tengo asimismo la de Cipriano de Valera, la de Lutero, que literariamente es la peor, y un ejemplar latino de la Vulgata. Como usted ve, no son precisamente biblias lo que me falta.");
    $(".line3").html("— No sólo vendo biblias. Puedo mostrarle un libro sagrado que tal vez le interese. Lo adquirí en los confines de Bikanir.");
    $(".line4").html("— Será del siglo diecinueve — observé.");
    $(".line5").html("— No sé. No lo he sabido nunca — fue la respuesta.");
    extranjeroBoolean = false;
  } else {
    $(".line1").html("— I sell Bibles — he told me.");
    $(".line2").html("— In this house there are several English Bibles, including John Wyclif’s, the first of all. I also have Cypriano de Valera’s, Luther’s — which, as a piece of literature, is the worst of the lot — and a copy of the Vulgate in Latin. As you can see, it’s not Bibles I have a need for.");
    $(".line3").html("— I don’t sell only Bibles. I can show you a sacred book that might interest you. I acquired it in the outskirts of Bikanir.");
    $(".line4").html("— From the nineteenth century I’d hazard — I observed.");
    $(".line5").html("— I don’t know. I’ve never known — was the response.");
    extranjeroBoolean = true;
  }
}

var menuBoolean = true;
var colorRIGHT = $(".top-right").css( "color" );
function menu() {
	//console.log(colorRIGHT + "0");
	$(".menu").toggleClass('active');
	if(menuBoolean) {
		$('.top-right').css("color","black");
		$(".top-right").html("CERRAR");
		colorRIGHT = $(".top-right").css( "color" );
		menuBoolean = false;
	} else {
		/*
		$( "div" ).click(function() {
		  var color = $( this ).css( "background-color" );
		  $( "p" ).html( "That div is " + color + "." );
		});
		*/
		if(colorRIGHT == "rgb(0, 0, 0)") {
			$('.top-right').css("color","black");
			//console.log(colorRIGHT + "1");
		} else {
			$('.top-right').css("color","white");
			//console.log(colorRIGHT + "2");
		}
		$(".top-right").html("MENU");
		menuBoolean = true;
	}
}

function section1() {
	$('html, body').animate({
			scrollTop: $(".section-1").offset().top
	}, 2000);
}
function section2() {
	$('html, body').animate({
			scrollTop: $(".section-2").offset().top
	}, 2000);
}
function section3() {
	$('html, body').animate({
			scrollTop: $(".section-3").offset().top + h/2
	}, 2000);
}
function section4() {
	$('html, body').animate({
			scrollTop: $(".section-4").offset().top
	}, 2000);
}
function section5() {
	$('html, body').animate({
			scrollTop: $(".section-5").offset().top
	}, 2000);
}
function section6() {
	$('html, body').animate({
			scrollTop: $(".section-6").offset().top
	}, 2000);
}


'use strict';

var range = 10000;
var number;
var numberString;
setInterval(function(){

	//console.log(numberString);
}, 100);

var app = {

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    document.getElementById("section-4").appendChild(app.container);
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
		var numberString = "" + Math.floor( Math.random() * range / 2 ) * 2;
    var duration = Math.floor(Math.random() * 40) + 1;
    var offset = Math.floor(Math.random() * (100)) + 0;
    var size = 15 + (20 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = numberString;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);



var waypoint = new Waypoint({
  element: document.getElementById('trato1'),
  handler: function(direction) {
    $("#trato1").addClass( "trato-active" );
  },
	offset: '75%'
})
var waypoint2 = new Waypoint({
  element: document.getElementById('trato2'),
  handler: function(direction) {
    $("#trato2").addClass( "trato-active" );
  },
	offset: '75%'
})
var waypoint3 = new Waypoint({
  element: document.getElementById('trato3'),
  handler: function(direction) {
    $("#trato3").addClass( "trato-active" );
  },
	offset: '75%'
})
var waypoint4 = new Waypoint({
  element: document.getElementById('trato4'),
  handler: function(direction) {
    $("#trato4").addClass( "trato-active" );
  },
	offset: '75%'
})
var waypoint5 = new Waypoint({
  element: document.getElementById('trato5'),
  handler: function(direction) {
    $("#trato5").addClass( "trato-active" );
  },
	offset: '75%'
})
var waypoint6 = new Waypoint({
  element: document.getElementById('trato6'),
  handler: function(direction) {
    $("#trato6").addClass( "trato-active" );
  },
	offset: '75%'
})

var waypoint7 = new Waypoint({
  element: document.getElementById('section-5'),
  handler: function(direction) {
    $("#section-5 img").addClass( "active5" );
  },
	offset: '75%'
})


//console.log($(".overlay-content").height());
