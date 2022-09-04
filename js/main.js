(function ($) {
	"use strict";

	// preloader js start
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();
	// preloader js end

	// data background js start
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-bg-color]").each(function () {

		$(this).css("background-color", $(this).attr("data-bg-color"));

	});
	// data background js end

	// toggle search bar start
	$('.header-search > a').on('click', function (event) {
		event.preventDefault();
		$('.search-area').addClass('active');
	});

	$('.search-close').on('click', function (event) {
		event.preventDefault();
		$('.search-area').removeClass('active');
	});
	// toggle search bar end

	// sticky start
	var wind = $(window);
	var sticky = $('#sticky_header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 200) {
			sticky.removeClass('sticky_header');
		} else {
			sticky.addClass('sticky_header');
		}
	});
	// sticky end

	// odometer counter start
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});
	// odometer counter end

	// slider start
	var menu = [];
	jQuery('.swiper-slide').each(function (index) {
		menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
	});
	var interleaveOffset = 0.5;
	var swiperOptions = {
		loop: true,
		speed: 1000,
		parallax: true,
		autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		},
		watchSlidesProgress: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		on: {
			progress: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * interleaveOffset;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".slide-inner").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},

			touchStart: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},

			setTransition: function (speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-inner").style.transition =
						speed + "ms";
				}
			}
		}
	};

	var swiper = new Swiper(".swiper-container", swiperOptions);
	// slider end

	// testimonial start
	$('.testimonial_slide').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		navText:['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.testimonial_active').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		margin: 70,
		items: 2,
		autoplayTimeout: 6000,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 2
			},
			1000: {
				items: 2,
			},
			1200:{
				items:2,
				margin: 30,
			},
			1366:{
				items:2,
			}
		}
	});

	$('.testimonial_slide-2').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		margin: 40,
		autoplayTimeout: 6000,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

	$('.testimonial_slide-3').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		margin: 50,
		autoplayTimeout: 6000,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});
	// testimonial end

	// portfolio start
	$('.portfolio_active').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		navText:['<i class="fal fa-long-arrow-left"></i>','<i class="fal fa-long-arrow-right"></i>'],
		nav: true,
		dots: false,
		center: true,
		stagePadding: 150,
		responsive:{
			0:{
				items:1,
				stagePadding: 0,
			},
			767:{
				items:2,
				stagePadding: 0,
			},
			992:{
				items:2,
				stagePadding: 0,
			},
			1200:{
				items:2,
			},
			1800:{
				items:3,
			}
		}
	});
	// portfolio end

	// gallery post start
	$('.gallery_post-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			}
		}
	})
	// gallery post end

	//  magnificPopup start
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
	//  magnificPopup end

	// menu last submenu start
	$('.main_menu_wrap nav > ul > li').slice(-3).addClass('menu_last');
	// menu last submenu end

	// mobile menu start
	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger_menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger_menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});
	// mobile menu end

	// Accordion Box start
	if ($(".accordion_box").length) {
		$(".accordion_box").on("click", ".acc_btn", function () {
		var outerBox = $(this).parents(".accordion_box");
		var target = $(this).parents(".accordion");

		if ($(this).next(".acc_content").is(":visible")) {
			$(this).removeClass("active");
			$(this).next(".acc_content").slideUp(300);
			$(outerBox).children(".accordion").removeClass("active_block");
		} else {
			$(outerBox).find(".accordion .acc_btn").removeClass("active");
			$(this).addClass("active");
			$(outerBox).children(".accordion").removeClass("active_block");
			$(outerBox).find(".accordion").children(".acc_content").slideUp(300);
			target.addClass("active_block");
			$(this).next(".acc_content").slideDown(300);
		}
		});
	}
	// Accordion Box end

	// isotop start
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		itemSelector: '.grid_item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid_item',
		}
		});

	// filter items on button click
		$('.portfolio_menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.portfolio_menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
	// isotop end

	// inhover active start
	$(".port_single").on('mouseenter', function () {
		$(".port_single").removeClass("active");
		$(this).addClass("active");
	});
	// nhover active start



})(jQuery);