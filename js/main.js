$(document).ready(function() {

var height = $(window).height();
console.log(height);
$(".curtain").css("height",height);

$(this).bind('scroll', function() {
    //console.log($(this).scrollTop());
    if($(this).scrollTop() >= height) {
	    //console.log("yay");
	    $(".main").css("position","static");
    } else {
	    $(".main").css("position","fixed");
    }    
});


  
    
});//end doc ready