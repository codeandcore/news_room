const progressFill = document.querySelector(".progress-fill");
const swiper = new Swiper(".newsswiper", {
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


$(window).on("scroll", function () {
  if ($(this).scrollTop() > 30) {
    $("#mainHeader").addClass("scrolled");
  } else {
    $("#mainHeader").removeClass("scrolled");
  }
});
