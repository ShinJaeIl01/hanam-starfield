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

function toggleQuickSubMenu() {
  store.classList.add('block')
}

badgeRed.addEventListener("click",toggleQuickSubMenu)



// 상단 이동
// 상단 이동
const topEl = document.querySelector('.topBtn');

topEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})



// 메인이미지 스와이퍼
// 메인이미지 스와이퍼

// new Swiper('.topMain .swiper', {
//   slidesPerView: 1, //한번에 보여줄 슬라이드 개수
//   loop: true,
//   // autoplay: {
//   //   delay: 5000
//   // },
//   pagination: {
//     el: '.topMain .swiper-pagination', //페이지 번호 요소 선택자
//     clickable: true //사용자의 페이지 번호 요소 제어
//   },
//   navigation: {
//     prevEl: '.topMain .swiper-prev',
//     nextEl: '.topMain .swiper-next'
//   }
// });



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

// $('.start').on('click',function(){
//   swiper.autoplay.start();
//   return false;
//  })
// $('.stop').on('click',function(){
//   swiper.autoplay.stop();
//   return false;
//  });