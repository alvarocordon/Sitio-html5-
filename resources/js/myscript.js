// JavaScript Document
$(document).ready(function(){
    resizeFrames();
	setBannerHeight();
	 
	$(window).resize(function(){
		resizeFrames();
		setBannerHeight();
	});
});

function resizeFrames() {
	var figWidth = $('.video').outerWidth();
	
	$('iframe').attr({ width: figWidth, height: (figWidth * 9) / 16});
}

function setBannerHeight() {
	var imgHeight = $('#banner img').height();
	$('#banner').height(imgHeight);
}