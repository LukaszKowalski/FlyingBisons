jQuery(window).load(function($) { 
	"use strict";
	
	//Loader
	jQuery('#preloader-yellow,#preloader-blue,#preloader-green,#preloader-red').fadeOut('2000');
	jQuery('body').css('overflow', 'auto');
	// End of Loader

	// Buttons ScrollToTop Animations
	jQuery(".last-deal-inner .scroll-btn, .video-content .scroll-btn").on('click', function() {
		jQuery('html, body').animate({
			scrollTop: jQuery("html, body").offset().top
		}, 2000);
	});
	// End of Buttons ScrollToTop Animations

	// Banner Animations
	var animation1 = setInterval(function(){ 
		jQuery('.header-top').animate({opacity: 1, top: 0}, 500);	
		clearInterval(animation1); 
	}, 1600);
	var animation2 = setInterval(function(){ 
		jQuery('.banner-form').css('visibility', 'visible').addClass('animated  fadeInUp');
		clearInterval(animation2); 			
	}, 2600);
	var animation3 = setInterval(function(){ 
		jQuery('.banner-text p').animate({opacity: 1, top: 0}, 500);
		jQuery('.banner-text h1').animate({opacity: 1, top: 0}, 500);
		jQuery('.banner-text span').animate({opacity: 1, top: 0}, 500);
		clearInterval(animation3); 
	}, 3500); 
	// End of Banner Animations

	// Without Form Banner Animations
	var animation4 = setInterval(function(){ 
		jQuery('.banner-text-2 p').animate({opacity: 1, top: 0}, 500);
		jQuery('.banner-text-2 h1').animate({opacity: 1, top: 0}, 500);
		jQuery('.banner-text-2 span').animate({opacity: 1, top: 0}, 500);
		jQuery('.banner-text-2 button').animate({opacity: 1, top: 0}, 500);			
		clearInterval(animation4); 			
	}, 3500);
	var animation5 = setInterval(function(){ 
		jQuery('.scrolldown').animate({opacity: 1, top: 0}, 500);
		clearInterval(animation5); 
	}, 4500);
	//End Of Without Form Banner Animations		
})
jQuery(document).ready(function($) {
	"use strict";

	//Start Of Header Height
	var windowWidth  = $(window).width();
	if(windowWidth > 1024){			
		headerHt();

		$(window).resize(function() {  
			headerHt();
		});  
	}//End If
	
	jQuery('.datepicker').find('.day').on('click', function(){
		jQuery(this).parents('.datepicker').fadeOut('slow');
	});
	
	//Call ScrollDown Funtion
	scrollDown();

	//Call date Picker Function
	datePicker();

    // video script
	$('.video-iframe img').on('click', function(){
		var video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
		$(this).replaceWith(video); 
	});
	
	//Booking form validations
	$("#bookform").validate({
		rules: {     
			destination: {required: true},
			checkin: {required: true, date: true},
			checkout: {required: true, date: true}
		},
		tooltip_options: {
			destination: {trigger:'focus'},
			checkin: {trigger:'focus'},			
			checkout: {trigger:'focus'}
		},
		submitHandler: function(form) { 
			$("#validity_label").html('<div class="alert alert-success">No errors.  Like a boss.</div>');
		},
		invalidHandler: function(form, validator) {
			$("#validity_label").html('<div class="alert alert-error">There be '+validator.numberOfInvalids()+' error'+(validator.numberOfInvalids()>1?'s':'')+' here.  OH NOES!!!!!</div>');
		}
	});
	//Contact Form validations
	$("#contactform").validate({
		rules: {     
			username: {required: true},
			email: {required: true, email: true},
			phone: {required: true, number: true}
		},
		tooltip_options: {
			username: {trigger:'focus'},
			email: {trigger:'focus'},			
			phone: {trigger:'focus'}
		},
		submitHandler: function(form) { 
			$("#validity_label").html('<div class="alert alert-success">No errors.  Like a boss.</div>');
		},
		invalidHandler: function(form, validator) {
			$("#validity_label").html('<div class="alert alert-error">There be '+validator.numberOfInvalids()+' error'+(validator.numberOfInvalids()>1?'s':'')+' here.  OH NOES!!!!!</div>');
		}
	});	
});
// Header Height Function
function headerHt(){
	"use strict";
	var documentHeight = $(window).height();
	$('header').css('height',documentHeight);
};

//Date Picker Funtion
function datePicker() {
	"use strict";
	$('#dp1,#dp2').datepicker().on('changeDate', function(ev){
		$('.datepicker').fadeOut('slow');
	});
};

//Scroll Down Funtion
function scrollDown() {
	"use strict";
	$('a[href*=#]:not([href=#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});
};
