var $ = jQuery.noConflict();


$(document).ready(function () {
	/* Menu Toggle Js */
	const mediaQuery = window.matchMedia('(max-width: 1199px)')
	if (mediaQuery.matches) {
		$(".navbar-toggler").click(function(e){
			e.stopPropagation();
			$("body").toggleClass("menu-open");
		});
		jQuery(document).on('click', function (e) {
		if (jQuery(e.target).closest(".header-menu").length <= 0) {
			jQuery("body").removeClass('menu-open');
		}
		});
		$( "body" ).removeClass("menu-open");
		$(".menu-item-has-children>a").after("<span class='span_indicator'></span>");
		$(document).on('click', '.span_indicator', function(e){
			e.stopPropagation();
			$(this).toggleClass('active');
			$(this).next('.sub-menu').slideToggle();
			$(this).parent('li').siblings().find('.sub-menu').slideUp();
			$(this).parent('li').siblings().find('.span_indicator').removeClass('active');
		});
	}
	/* Menu Toggle Js */

	/* Hero Banner Slider Js Start */
	if ($('.banner-section').length > 0) {
		const progressFill = document.querySelector(".progress-fill");
		const swiper = new Swiper(".bannerSwiper", {
			loop: true,
			effect: "fade",
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-custom-next",
				prevEl: ".swiper-custom-prev",
			},
			on: {
				autoplayTimeLeft(s, time, progress) {
				const percent = (1 - progress) * 100;
				progressFill.style.width = `${percent}%`;
				},
			},
		});
	}
	/* Hero Banner Slider Js End */

	/* Trending Now Js Start */
	if ($('.trending-now').length > 0) {
		var $items = $('.trending-list li');
		var index = 0;
		$items.fadeOut();
		$items.eq(index).fadeIn();
		setInterval(function () {
		$items.eq(index).fadeOut(300, function () {
			index = (index + 1) % $items.length;  // next index (loop back to 0)
			$items.eq(index).fadeIn(300);
		});
		}, 5000); // 5 seconds
	}
	/* Trending Now Js End */
})




const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
