

header = document.querySelector(".navbar");

window.onscroll = function () {
  scrollFunction();
  // headerFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    header.classList.add("coloredHeader");
  } else {
    header.classList.remove("coloredHeader");
  }
}



const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 100,
    loop: true,
    speed: 300,
    autoplay: {
        delay: 8000
    }
    
});

const arrivalSwiper = new Swiper('.arrivals-container', {
    direction: 'horizontal',
    spaceBetween: 22,
    loop: true,
    speed: 1000,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
        slidesPerView: 5,
        spaceBetween: 40
        }
    },

    });
    
function checkArrow() {
    var swiperPrev = document.querySelector('.swiper-button-prev');
    var swiperNext = document.querySelector('.swiper-button-next');
    if ( window.innerWidth > 1024  ) {
    console.log('Success', window.innerWidth);
    swiperPrev.style.display = 'block';
    swiperNext.style.display = 'block';
    } else {
    swiperPrev.style.display = 'none';
    swiperNext.style.display = 'none';
    }
}


