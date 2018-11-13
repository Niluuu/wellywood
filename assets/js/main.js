$(document).ready(function(){

	$('.bannerArrows .leftArrow').on("click", function(){
		$('.boxgallery .prev').click();
	});

	$('.bannerArrows .rightArrow').on("click", function(){
		$('.boxgallery .next').click();
	});

	$('.slider_trends').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		draggable: true,
		prevArrow: $('.trends .leftBox .leftArrow'),
		nextArrow: $('.trends .leftBox .rightArrow'),
		dots: false,
	});

	$('.slider_trends_mini').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		draggable: true,
		prevArrow: $('.trends .rightBox .leftArrow'),
		nextArrow: $('.trends .rightBox .rightArrow'),
		dots: false,
		fade: true,
	});

	$('.sales .slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		draggable: true,
		dots:true,
		responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
	    	}
	    ]
	});

	$('.ideas-slider .slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		draggable: true,
		prevArrow: $('.ideas-slider .leftArrow'),
		nextArrow: $('.ideas-slider .rightArrow'),
		dots:false,
		responsive: [
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
	    	}
	    ]
	});

	$('.best-sales .slider').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		draggable: true,
		prevArrow: $('.best-sales .leftArrow'),
		nextArrow: $('.best-sales .rightArrow'),
		dots:false,
		responsive: [
		    {
		      breakpoint: 1199,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
	    	}
	    ]
	});

	$('.sliderAbout .wrapper').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		draggable: true,
		dots:true,
	});

});

$(document).ready(function(){
	$('.menuBar').click(function(){
		$(this).toggleClass('opeen');
		$('.mobileMenu').fadeToggle(300);
		$('.mobileMenu .wrap').toggleClass('opeen');
	});	
	$('.mobileMenu .closeBtn').click(function() {
		$('.mobileMenu .wrap').removeClass('opeen');
		setTimeout(function(){
			$('.mobileMenu').fadeOut(300);
			$('.menuBar').removeClass('opeen');
		}, 500);
	});
	$('.mobileMenu .overlayBlack').click(function(){
		$('.mobileMenu .wrap').removeClass('opeen');
		setTimeout(function(){
			$('.mobileMenu').fadeOut(300);
			$('.menuBar').removeClass('opeen');
		}, 500);
	});
});


$(window).on("load", function(){
	
	if (window.matchMedia('(max-width: 1000px)').matches) {
	        
    } else {
        var div = $('#footer');
		var heightBox = div.outerHeight();
		$('.fixedFooter').css('margin-bottom', heightBox);
    }

});


/* input type number jquery +/- */

$(".quantity .button").on("click", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

  if ($button.text() == "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }

  $button.parent().find("input").val(newVal);

});

/* modal login */
$('.modalCallBtn').click(function(e){
	e.preventDefault();
	$('.modal_call').fadeIn(300).addClass('active');
	$('.page_wrap').addClass('blur');
});
$('.modal_call .closeBtn').click(function(){
	var _this = $(this);
	$(this).parent().parent().removeClass('active');
	setTimeout(function(){
		_this.parent().parent().fadeOut();
		$('.page_wrap').removeClass('blur');
	}, 400);
});

$('.modalLoginBtn').click(function(e){
    e.preventDefault();
    $('.modal_login').fadeIn(300).addClass('active');
    $('.page_wrap').addClass('blur');
});
$('.modal_login .closeBtn').click(function(){
    var _this = $(this);
    $(this).parent().parent().removeClass('active');
    setTimeout(function(){
        _this.parent().parent().fadeOut();
        $('.page_wrap').removeClass('blur');
    }, 400);
});

$('.mainMenu .dorpdown-mini span').click(function(){
	var tab_id = $(this).attr('tab-id');

	$(this).parent().find('.active').removeClass('active');
	$(this).addClass('active');

	$('.mainMenu .navs .dropdown-max').fadeOut();
	setTimeout(function(){
		$('.mainMenu .navs #' + tab_id).fadeIn();
	}, 600);
});


$('.heart-div').click(function(){
	$(this).find('input').click();
});


$('.search input').focus(function(){
	$('.searchOverlay').fadeIn();
});
$('.search input').blur(function(){
	$('.searchOverlay').fadeOut();
});



/* input & textarea placeholder animation */

$('body').on('blur', '.form-style .inp input',  function(){
	 if( $(this).val().length != 0 ) {
        $(this).parent().addClass('hidee');
    }
    else{
    	$(this).parent().removeClass('hidee');
    }
});

$('body').on('blur', '.form-style .inp textarea',  function(){
	 if( $(this).val().length != 0 ) {
        $(this).parent().addClass('hidee');
    }
    else{
    	$(this).parent().removeClass('hidee');
    }
});

$('body').on('click', '.form-style .inp .placeholder',  function(){
	$(this).prev().focus();
});


/* add to cart animate */

if (window.matchMedia('(max-width: 1000px)').matches) {
	        
    } else {
        var div = $('#footer');
		var heightBox = div.outerHeight();
		$('.fixedFooter').css('margin-bottom', heightBox);
    }

$('.addToCart').on('click', function () {
    var cart = $('.shopping-cart');
    var imgtodrag = $(this).parent().parent().parent().find(".main").eq(0);
    
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        })
            .css({
            'opacity': '0.5',
                'position': 'absolute',
                'max-height': '',
                'width': '150px',
                'z-index': '100',
        })
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75
        }, 1500);
        
        /*setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);*/

        imgclone.animate({
            'width': 0,
                'height': 0
        }, function () {
            $(this).detach()
        });
    }
});

/* add to wishlist animate */

$('.addToWishlist').on('click', function () {
    var cart = $('.shopping-wishlist');
    var imgtodrag = $(this).parent().parent().parent().find(".main").eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag.clone()
            .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        })
            .css({
            'opacity': '0.5',
                'position': 'absolute',
                'max-height': '',
                'width': '150px',
                'z-index': '100',
        })
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                /*'height': 75*/
        }, 1500);

        /*setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);*/

        imgclone.animate({
            'width': 0,
                'height': 0
        }, function () {
            $(this).detach()
        });
    }
});


/* slick slider dots animate */

$(window).on("load", function(){
	var active_dot = $('.slick-dots .slick-active');

	$('.slick-dots').append('<div class="move-box"></div>');

    if($('.move-box').length != 0) 
    {
    	$('.move-box').offset({
            top: active_dot.offset().top,
            left: active_dot.offset().left
        });
    }

});

$('body').on('click', '.slick-dots li', function(){
	var active_dot2 = $('.slick-dots .slick-active');

    if($('.move-box').length != 0)
    {
        $('.move-box').offset({
            top: active_dot2.offset().top,
            left: active_dot2.offset().left
        });
    }
});

$(".sales .slider").on("afterChange", function (){
    var active_dot2 = $('.slick-dots .slick-active');
    if($('.move-box').length != 0)
    {
        $('.move-box').offset({
            top: active_dot2.offset().top,
            left: active_dot2.offset().left
        });
    }
});


$(".sliderAbout .wrapper").on("afterChange", function (){
    var active_dot2 = $('.slick-dots .slick-active');
    if($('.move-box').length != 0)
    {
        $('.move-box').offset({
            top: active_dot2.offset().top,
            left: active_dot2.offset().left
        });
    }
});



$('.site-header__menu-button').click(function(e){
	e.preventDefault();
	$(this).toggleClass('menu-active');
	$('.site-menu').toggleClass('menu-active');
});


$(window).scroll(function(){
	var body = $("body, html");
	var top = body.scrollTop(); // Get position of the body
	if(top > 0) {
		$('.header').addClass('sticky');
	}
	else {
		$('.header').removeClass('sticky');
	}
});

$(document).ready(function(){
	var body = $("body, html");
	var top = body.scrollTop(); // Get position of the body
	if(top > 0) {
		$('.header').addClass('sticky');
	}
	else {
		$('.header').removeClass('sticky');
	}
});


$('.site-menu .mob-menu-item > a').click(function(e){
	e.preventDefault();
	var _this = $(this);
	
	$(this).next().slideToggle();
});
$('.site-menu .mob-menu-item-child > a').click(function(e){
	e.preventDefault();
	$(this).next().slideToggle();
});



/* Custom input [type="file"] */

$('.input_file_hold').each(function () {
    var file = $(this).find('input');
    var text = $('.input_file_hold .text');
    
    file.on("change", function (inpfil) {

        var files = file[0].files;

        if (files.length > 1) {
            text.text("Файлов добавлено: " + files.length);
        }
        else {
            var filename = inpfil.target.value.split("\\").pop();
            text.text(filename);
        }
    });

});