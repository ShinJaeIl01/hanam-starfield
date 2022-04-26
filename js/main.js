// 오늘 날짜
// 오늘 날짜
const date = new Date()
const week = new Array('일', '월', '화', '수', '목', '금', '토')

month = date.getMonth() + 1
day = date.getDate()
dd = date.getDay()
document.getElementById('current_date').innerHTML = (("00"+month.toString()).slice(-2)) + '월' + ' ' + (("00"+day.toString()).slice(-2)) + '일' + ' ' + week[date.getDay()] + '요일'
// document.getElementById('current_date').innerHTML = '0' + month + '월' + ' ' + day + '일' + ' ' + week[date.getDay()] + '요일'



// 배지 클릭 이벤트  
// 배지 클릭 이벤트
const badgesEl = document.querySelector('.badges')
const badgeRed = document.querySelector('.red')
const store = document.querySelector('.store')

let isHideBadge = true;
badgeRed.addEventListener('click', function () {
  isHideBadge = !isHideBadge
  if (isHideBadge) {
    //숨김처리
    store.classList.add('block');
  } else {
    //보임처리 
    store.classList.remove('block');
  }
});



// 상단 이동
// 상단 이동
const topEl = document.querySelector('.topBtn');

topEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})



// 메인상단이미지 스와이퍼
// 메인상단이미지 스와이퍼
new Swiper('.topMain .swiper', {
  loop: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: '.topMain .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  
  navigation: {
    prevEl: '.topMain .swiper-prev',
    nextEl: '.topMain .swiper-next',
  }
});




// 메인스페셜이미지 스와이퍼
// 메인스페셜이미지 스와이퍼
new Swiper('.filMain .swiper', {
  loop: true,
  speed: 1000,
  
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '4',
  coverflowEffect: {
    scale: 0.9,
    rotate: 0,
    stretch: -10,
    depth: 1,
    modifier: 1,
    slideShadows: false,
  },

  
  navigation: {
    prevEl: '.filMain .swiper-prev',
    nextEl: '.filMain .swiper-next',
  }
});

// const playBtn = document.querySelector('.platBtn')

// function filmainPlay() {
//   Swiper('.filMain .swiper', {
//     autoplay: {
//       delay: 3000,
//     },  
//   },
// }

// playBtn.addEventListener('click',filmainPlay)







// 메인베스트캠페인 스와이퍼
// 메인베스트캠페인 스와이퍼
new Swiper('.bestMain .swiper', {
  effect: 'coverflow',
  slidesPerView: 3,
  spaceBetween: 20,
  // initialSlide: 1,
  centeredSlides: true,
  loop: true,
  slideShadows:true,
  
  coverflowEffect: {
    scale: 0.9,
    // stretch: 0,
    rotate : 0,
    depth: 10,
    modifier: 1,
    slideShadows : false
  },

    pagination: {
      el: '.bestMain .swiper-pagination', //페이지 번호 요소 선택자
      clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
      prevEl: '.bestMain .swiper-prev',
      nextEl: '.bestMain .swiper-next'
    }
  });




// 푸터언어클릭 이벤트
// 푸터언어클릭 이벤트
const korean = document.querySelector('.korean')
const koList = document.querySelector('.koList')

let isHideKoList = true;
korean.addEventListener('click', function () {
  isHideKoList = !isHideKoList
  if (isHideKoList) {
    //숨김처리
    koList.classList.add('block');
  } else {
    //보임처리 
    koList.classList.remove('block');
  }
});