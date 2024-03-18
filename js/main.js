
(function ($) {
"use strict";

var windowOn = $(window);
//======= 01.Search

$('#search').on('click', function(){
	$(".tp-search-box").fadeIn(600);
});
$('.tp-close-btn').on('click', function(){
	$(".tp-search-box").fadeOut(600);
});

//======= 02. PreLoader Js
windowOn.on("load",function() {
	$("#loading").fadeOut(500);
})

//======= 03. Right Side Off-Canvas-Menu
$('.info-bar').on('click',function(){
	$('.extra-info').addClass('info-open');
})

$('.close-icon').on('click',function(){
	$('.extra-info').removeClass('info-open');
})

//======= 04. Sticky-Menu
windowOn.on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 220) {
		$("#header-sticky").removeClass("sticky");
	} else {
		$("#header-sticky").addClass("sticky");
	}
});


//======= 05. meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "769"
});


//======= 06. magnificPopup img view 
$('.img-popup,.img-popup-1').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

	
//======= 07. magnificPopup video view 
$('.features-video-icon').magnificPopup({
	type: 'iframe',
});

//======= 08.  Counter Js
$('.counter').counterUp({
	delay: 10,
	time: 1000
});


//======= 09. testimonial-active
$('.testimonial-active').slick({
	infinite: true,
	autoplay:true,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

	]
});

//======= 10. solution-active
$('.solution-active').slick({
	infinite: true,
	autoplay:true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
});

//======= 11. brand-active
$('.brand-active').slick({
	dots: false,
	infinite: true,
	autoplaySpeed: 2000,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

//======= 12. isotope-active
var $grid = $('.course-list').isotope({
	// options
  });
  // filter items on button click
  $('.course-title').on( 'click', 'li', function() {
  
	$(".course-title li").removeClass("active");
	$(this).addClass("active");
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });


//======= 13. Nice Select Js
	$('select').niceSelect();
	
//======= 14. WOW active
new WOW().init();

//======= 15. countdown active
$('#clock').countdown('2023/10/10', function(event) {
	$(this).html(event.strftime('<span class="countdownrap"><span class="comming-date">%w <br/> <span>Weeks</span></span> <span class="comming-date">%H <br/> <span>Days</span></span> <span class="comming-date">%M <br/> <span>Hours</span></span> <span class="comming-date">%M <br/> <span>Minutes</span></span> <span class="comming-date">%S <br/> <span>Seconds</span></span></span>'));
  });


})(jQuery);




var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

var slideDelay = 1.5;
var slideDuration = 0.3;

var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prevButton");
var nextButton = document.querySelector("#nextButton");

for (var i = 0; i < slides.length; i++) {
  TweenLite.set(slides[i], {
    backgroundColor: Math.random() * 0xffffff,
    xPercent: i * 100
  });
}

var wrap = wrapPartial(-100, (slides.length - 1) * 100);
var timer = TweenLite.delayedCall(slideDelay, autoPlay);
var animation = null;

prevButton.addEventListener("click", function() {
  animateSlides(100);
});

nextButton.addEventListener("click", function() {
  animateSlides(-100);
});

function animateSlides(delta) {
    
  animation = TweenMax.to(slides, slideDuration, {
    xPercent: function(i, target) {      
      return (Math.round(target._gsTransform.xPercent / 100) * 100) + delta;
    },
    modifiers: {
      xPercent: wrap
    },
    onComplete: restartTimer
  });  
}




// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($("#spinner").length > 0) {
//                 $("#spinner").removeClass("show");
//             }
//         }, 1);
//     };
//     spinner();

//     // Initiate the wowjs
//     new WOW().init();

//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 40) {
//             $(".navbar").addClass("sticky-top");
//         } else {
//             $(".navbar").removeClass("sticky-top");
//         }
//     });

//     // Dropdown on mouse hover
//     const $dropdown = $(".dropdown");
//     const $dropdownToggle = $(".dropdown-toggle");
//     const $dropdownMenu = $(".dropdown-menu");
//     const showClass = "show";

//     $(window).on("load resize", function () {
//         if (this.matchMedia("(min-width: 992px)").matches) {
//             $dropdown.hover(
//                 function () {
//                     const $this = $(this);
//                     $this.addClass(showClass);
//                     $this.find($dropdownToggle).attr("aria-expanded", "true");
//                     $this.find($dropdownMenu).addClass(showClass);
//                 },
//                 function () {
//                     const $this = $(this);
//                     $this.removeClass(showClass);
//                     $this.find($dropdownToggle).attr("aria-expanded", "false");
//                     $this.find($dropdownMenu).removeClass(showClass);
//                 }
//             );
//         } else {
//             $dropdown.off("mouseenter mouseleave");
//         }
//     });

//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $(".back-to-top").fadeIn("slow");
//         } else {
//             $(".back-to-top").fadeOut("slow");
//         }
//     });
//     $(".back-to-top").click(function () {
//         $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
//         return false;
//     });

//     // Date and time picker
//     $(".date").datetimepicker({
//         format: "L",
//     });
//     $(".time").datetimepicker({
//         format: "LT",
//     });

//     // Image comparison
//     $(".twentytwenty-container").twentytwenty({});

//     // Price carousel
//     $(".price-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1500,
//         margin: 45,
//         dots: false,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>',
//         ],
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             768: {
//                 items: 3,
//             },
//         },
//     });

//     // Testimonials carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1000,
//         items: 1,
//         dots: false,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>',
//         ],
//     });
// })(jQuery);

// $(document).ready(function () {
//     $("#myModal").modal("show");
// });
// $(".close").click(function () {
//     $("#myModal").modal("hide");
// });






// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($("#spinner").length > 0) {
//                 $("#spinner").removeClass("show");
//             }
//         }, 1);
//     };
//     spinner();

//     // Initiate the wowjs
//     new WOW().init();

//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 40) {
//             $(".navbar").addClass("sticky-top");
//         } else {
//             $(".navbar").removeClass("sticky-top");
//         }
//     });

//     // Dropdown on mouse hover
//     const $dropdown = $(".dropdown");
//     const $dropdownToggle = $(".dropdown-toggle");
//     const $dropdownMenu = $(".dropdown-menu");
//     const showClass = "show";

//     $(window).on("load resize", function () {
//         if (this.matchMedia("(min-width: 992px)").matches) {
//             $dropdown.hover(
//                 function () {
//                     const $this = $(this);
//                     $this.addClass(showClass);
//                     $this.find($dropdownToggle).attr("aria-expanded", "true");
//                     $this.find($dropdownMenu).addClass(showClass);
//                 },
//                 function () {
//                     const $this = $(this);
//                     $this.removeClass(showClass);
//                     $this.find($dropdownToggle).attr("aria-expanded", "false");
//                     $this.find($dropdownMenu).removeClass(showClass);
//                 }
//             );
//         } else {
//             $dropdown.off("mouseenter mouseleave");
//         }
//     });

//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $(".back-to-top").fadeIn("slow");
//         } else {
//             $(".back-to-top").fadeOut("slow");
//         }
//     });
//     $(".back-to-top").click(function () {
//         $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
//         return false;
//     });

//     // Date and time picker
//     $(".date").datetimepicker({
//         format: "L",
//     });
//     $(".time").datetimepicker({
//         format: "LT",
//     });

//     // Image comparison
//     $(".twentytwenty-container").twentytwenty({});

//     // Price carousel
//     $(".price-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1500,
//         margin: 45,
//         dots: false,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>',
//         ],
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             768: {
//                 items: 3,
//             },
//         },
//     });

//     // Testimonials carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1000,
//         items: 1,
//         dots: false,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>',
//         ],
//     });
// })(jQuery);

// $(document).ready(function () {
//     $("#myModal").modal("show");
// });
// $(".close").click(function () {
//     $("#myModal").modal("hide");
// });



// var navHeight = jQuery('.page_header').outerHeight(true);
// 	//if sidebar nav exists - binding to it. Else - to main horizontal nav
// 	if (jQuery('.mainmenu_side_wrapper').length) {
// 		$body.scrollspy({
// 			target: '.mainmenu_side_wrapper',
// 			offset: navHeight
// 		});
// 	} else if (jQuery('.mainmenu_wrapper').length) {
// 		$body.scrollspy({
// 			target: '.mainmenu_wrapper',
// 			offset: navHeight 
// 		})
// 	}
// 	if (jQuery().localScroll) {
// 		jQuery('.mainmenu_wrapper > ul, .mainmenu_side_wrapper > ul, #land, .scroll_button_wrap').localScroll({
// 			duration:900,
// 			easing:'easeInOutQuart',
// 			offset: -navHeight+40
// 		});
// 	}

// 	//background image teaser and secitons with half image bg
// 	//put this before prettyPhoto init because image may be wrapped in prettyPhoto link
// 	jQuery(".bg_teaser, .image_cover").each(function(){
// 		var $teaser = jQuery(this);
// 		var $image = $teaser.find("img").first();
// 		if (!$image.length) {
// 			$image = $teaser.parent().find("img").first();
// 		}
// 		if (!$image.length) {
// 			return;
// 		}
// 		var imagePath = $image.attr("src");
// 		$teaser.css("background-image", "url(" + imagePath + ")");
// 		var $imageParent = $image.parent();
// 		//if image inside link - adding this link, removing gallery to preserve duplicating gallery items
// 		if ($imageParent.is('a')) {
// 			$teaser.prepend($image.parent().clone().html(''));
// 			$imageParent.attr('data-gal', '');
// 		}
// 	});
    

    
//     var $owl = $('.owl-carousel');
		
//     $owl.children().each( function( index ) {
//       $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
//     });
    
//     $owl.owlCarousel({
//         items: 5,
//         center: true,
//         loop: true,
//         responsiveClass:true,
//         responsive:{
//             0:{
//                 items:1,
//                 nav:true
//             },
//             767:{
//                 items:3
//             },
//             992:{
//                 items:5
//             }
//         }
//     });
    
//     $(document).on('click', '.owl-item>a', function() {
//     $owl.trigger('to.owl.carousel', $(this).data( 'position' ) 
//     );
    
// });
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$(".back-to-top").fadeIn("slow");
	} else {
		$(".back-to-top").fadeOut("slow");
	}
});
$(".back-to-top").click(function () {
	$("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
	return false;
});


$('.ads_sponsors').slick({
	autoplay: true,
	autoplaySpeed: 1000,
	slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false
});

let a=document.getElementsByClassName('fa-xmark')[0];
let b=document.getElementsByClassName('fa-bars')[0];
// let manu=document.getElementsByClassName('main-bar')[0];

function abc(){
	document.getElementsByClassName('main-bar')[0].style.display="flex";
	document.getElementsByClassName('fa-xmark')[0].style.visibility="visible";
}

function bcd(){
	document.getElementsByClassName('main-bar')[0].style.display="none";
}



// $('#counter').click(function() {
//     $('.count').html(function(i, val) { return val*1+1 });
//     Materialize.toast('You have clicked me!', 2000)
// });


