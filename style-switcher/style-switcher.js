

$.stylesheets = (function () {
    var stylesheets,
        add,
        clear;

    add = function (cssfile) {
        $('head').append('<link class="switch" href="' + cssfile + '" rel="stylesheet" />');
        return stylesheets;
    };

    addbg = function (stylebg) {
        $('head').append('<style class="preview-bg">.preview-boxed { background: ' + stylebg +' !important; }</style>');
        return stylesheets;
    };

    clear = function () {
        $('head link[class=switch]').remove();
        $('head style[class=preview-bg]').remove();
		$('body').removeClass("preview-boxed");	  
		$(window).resize();
        return stylesheets;
    };
	
    return stylesheets = {
        add: add,
		addbg: addbg,
        clear: clear
    };
} ());



$(document).ready(function (){  
	function is_touch_device() {
	  return !!('ontouchstart' in window) // works on most browsers 
		  || !!('onmsgesturechange' in window); // works on ie10
	};
	
	if ( !is_touch_device() && $(window).width() > 920) {
			
			 
		} else {
			$('.style-switcher').css("display","none");
			 }

});

$(window).load(function() {

	$(window).scroll(function() {
		var headerHeight = $("header").height()
		 	scrollTopVal = $(window).scrollTop();

		 	topVal = scrollTopVal;

		if ( topVal >= headerHeight) {
			$(".style-switcher").animate({opacity : "1"}, 100);
		} else
		if ( topVal < headerHeight && $(".ss-header").hasClass("ss-header-open")) {
			$(".style-switcher").animate({opacity : "1"}, 100);
		} else {
			$(".style-switcher").animate({opacity : "0.5"}, 100);
		}
	});

});


$(window).ready(function(){

   
  $('.ss-open').click(function () {
	  $('.ss-open i').toggleClass("fa fa-chevron-up fa fa-chevron-down");
	  $('.ss-header').toggleClass("ss-header-open");
	  $(window).scroll();
	  $('.ss-body').slideToggle();
	  return false;
  });
  
$('#ss-boxed a').click(function() {
    $('body').addClass("preview-boxed");	  
	$(window).resize();
	return false;	  
})
  
$('#ss-wide a').click(function() {
	
    $('body').removeClass("preview-boxed");		  
	$(window).resize();
	return false;
	
});

$('#ss-menu-style').change(function(e){
	var navbar = $("#navbar")
	if( $(this).val() == 1){
		navbar.removeClass("nav-home-bottom");
		navbar.removeClass("nav-home-top");
		navbar.next().removeClass("nav-top-fix");
		$("#st-trigger-effects").addClass("visible-xs visible-sm");
		navbar.attr("style", "display: block !important;");
		$(window).scroll();
		navbar.trigger('resize');
		$(window).resize();
	} else
	if( $(this).val() == 2){
		$(window).resize();
		navbar.removeClass("nav-home-top");
		navbar.addClass("nav-home-bottom");
		$("#st-trigger-effects").addClass("visible-xs visible-sm");
		navbar.next().removeClass("nav-top-fix");
		navbar.attr("style", "display: block !important;");
		$(window).scroll();
		navbar.trigger('resize');
		$(window).resize();
	} else 
	if( $(this).val() == 3){
		navbar.attr("style", "display: block !important;");
		navbar.addClass("nav-home-top");
		navbar.removeClass("nav-home-bottom");
		$("#st-trigger-effects").addClass("visible-xs visible-sm");
		navbar.next().addClass("nav-top-fix");
		$("head").append("<style>.nav-top-fix{background: #fff;}</style>");
		$(window).scroll();
		$(window).resize();
	} else 
	if( $(this).val() == 4){
		$(window).resize();
		$("#st-trigger-effects").removeClass("visible-xs visible-sm");
		navbar.attr("style", "display: none !important;");
	}
});
  
$('.ss-color li a').click(function()
{
  $('.ss-color li').removeClass('ss-active');
  $(this).parent().addClass('ss-active');
});
  

	
$('.ss-color a').click(function () {
	$('head link[class=switch]').remove();
	$.stylesheets.add($(this).attr('rel'));
	return false;

});	

$('.ss-color .ss-default a').click(function () {
	$("head").append("<style>.nav-top-fix{background: #fff;}</style>");
	return false;
});	

$('.ss-color .ss-dark a').click(function () {
	$("head").append("<style>.nav-top-fix{background: #222222;}</style>");
	return false;
});	

   
});



