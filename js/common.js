$(function () {
  const addTop = 500;
  //script 입력영역
  $("nav ul li a,.back_to_top a,a.button,.footer_top a").click(function () {
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    $("html,body").stop();
    $("html,body").animate({ scrollTop: offsetElem.top }, 500);
  });

  //scroll 상단 이동버튼 노출/비노출
  $(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
      $(".back_to_top").removeClass("on");
    } else {
      $(".back_to_top").addClass("on");
    }
  });

  //section offset top 값으로 class 추가
  let wHeight = $(window).innerHeight();
  $(window).scroll(function () {
    let thisScrollTop = $(this).scrollTop();
    let thisOffset
    $("section").each(function () {
      thisOffset = $(this).offset();
      if (thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight) {
        $(this).addClass("active");
      }
    });
    if (thisOffset.top <= thisScrollTop + addTop) {
      $('.btn').addClass('active')
    }
  });

  //main banner swiper 
  var swiper = new Swiper("#intro", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $('#intro').mouseenter(function () {
    swiper.autoplay.stop();
  }).mouseleave(function () {
    swiper.autoplay.start();
  })
});
