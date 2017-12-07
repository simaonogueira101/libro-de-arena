$("#flipbook").turn({
	page: 2,
  width: $(".book-container").innerWidth(),
  height: $(".book-container").innerHeight(),
  autoCenter: true
});

var numPages = $('.book-page').length;
//console.log(numPages);

if($('.book-page').hasClass('even') === true ){
 $("<div />").css({
	    position: "absolute",
	    width: "100%",
	    height: "100%",
	    left: 0,
	    bottom: 0,
			color: "black"
	}).addClass('even-overlay').appendTo($(".book-page.even"));
}

if($('.book-page').hasClass('odd') === true ){
 $("<div />").css({
	    position: "absolute",
	    width: "100%",
	    height: "100%",
	    left: 0,
	    bottom: 0,
			color: "black"
	}).addClass('odd-overlay').appendTo($(".book-page.odd"));
}

var range = 10000;
setInterval(function(){
	var number = Math.floor( Math.random() * range / 2 ) * 2;
	var numberOdd = Math.floor( Math.random() * range / 2 ) * 2;
	numberOdd = numberOdd + 1;
	$(".even-overlay").html(number)
	$(".odd-overlay").html(numberOdd)
}, 100);

$(".book-page.even").addClass('book-center');

$("#flipbook").bind("last", function(event) {
	//console.log("You are at the end of the flipbook");
  $(".book-last").css({ 'opacity': 1 });
});
$("#flipbook").bind("turning", function(event, page, view) {
  $(".book-last").css({ 'opacity': 0 });
});
