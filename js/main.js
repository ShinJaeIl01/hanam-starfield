// 오늘 날짜
// 오늘 날짜
const date = new Date()
const week = new Array('일', '월', '화', '수', '목', '금', '토')

month = date.getMonth() + 1
day = date.getDate()
dd = date.getDay()
document.getElementById('current_date').innerHTML = (("00"+month.toString()).slice(-2)) + '월' + ' ' + (("00"+day.toString()).slice(-2)) + '일' + ' ' + week[date.getDay()] + '요일'




// 헤더 스크롤반응
// 헤더 스크롤반응
const head = document.querySelector('header')
const headScroll = document.querySelector('.headScroll')

window.addEventListener('scroll', _.throttle(function () {
  if (window,scrollY > 150) {
    head.classList.add('headNone')
    headScroll.classList.add('headScrollBlock')
  } else {
    head.classList.remove('headNone')
    headScroll.classList.remove('headScrollBlock')
  }
},300))




// 배지 클릭 이벤트  
// 배지 클릭 이벤트
const badgesEl = document.querySelector('.badges')
const badgeRed = document.querySelector('.red')
const store = document.querySelector('.store')

let isHideBadge = true
badgeRed.addEventListener('click', function () {
  isHideBadge = !isHideBadge
  if (isHideBadge) {
    store.classList.add('block')
  } else {
    store.classList.remove('block')
  }
})




// 상단 이동
// 상단 이동
const topEl = document.querySelector('.topBtn')

topEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})




// 메인상단이미지 스와이퍼
// 메인상단이미지 스와이퍼
const stopB = document.querySelector('.topMain .stop')
const startB = document.querySelector('.topMain .start')
stopB.classList.add('stopB')

stopB.addEventListener('click', function() {
  topSwiper.autoplay.stop()
  stopB.classList.remove('stopB')
  startB.classList.add('startB')
  })
startB.addEventListener('click', function() {
  topSwiper.autoplay.start()
  stopB.classList.add('stopB')
  startB.classList.remove('startB')
  })
 
const topSwiper = new Swiper('.topMain .swiper', {
  loop: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: '.topMain .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.topMain .swiper-prev',
    nextEl: '.topMain .swiper-next',
  }
})

const next = document.querySelector('.topMain .swiper-next')
const prev = document.querySelector('.topMain .swiper-prev')
const slide = document.querySelector('.topMain .swiper-slide-active')

prev.addEventListener('mouseover', function() {
  gsap.to(slide, .3, {
    x: 100
  })
})
prev.addEventListener('mouseout', function() {
  gsap.to(slide, .3, {
    x: 0
  })
})
next.addEventListener('mouseover', function() {
  gsap.to(slide, .3, {
    x: -100
  })
})
next.addEventListener('mouseout', function() {
  gsap.to(slide, .3, {
    x: 0
  })
})




// 메인스페셜이미지 스와이퍼
// 메인스페셜이미지 스와이퍼
const stopBtn = document.querySelector('.filMain .stop')
const startBtn = document.querySelector('.filMain .start')
stopBtn.classList.add('stopB')

stopBtn.addEventListener('click', function() {
  filSwiper.autoplay.stop()
  stopBtn.classList.remove('stopB')
  startBtn.classList.add('startB')
  })

startBtn.addEventListener('click', function() {
  filSwiper.autoplay.start()
  stopBtn.classList.add('stopB')
  startBtn.classList.remove('startB')
  })

const filSwiper = new Swiper('.filMain .swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 4000
  },
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
})




// 메인베스트캠페인 스와이퍼
// 메인베스트캠페인 스와이퍼
new Swiper('.bestMain .swiper', {
  effect: 'coverflow',
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  slideShadows:true,
  coverflowEffect: {
    scale: 0.9,
    rotate : 0,
    depth: 10,
    modifier: 1,
    slideShadows : false
  },
  pagination: {
    el: '.bestMain .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.bestMain .swiper-prev',
    nextEl: '.bestMain .swiper-next'
  }
})




// FOOTER언어 이벤트
// FOOTER언어 이벤트
const korea = document.querySelector('.korea')
const koList = document.querySelector('.koList')

korea.addEventListener('mouseover', function () {
    koList.classList.add('block')
})
korea.addEventListener('mouseout', function () {
  koList.classList.remove('block')
})




// FOOTER패밀리사이트 이벤트
// FOOTER패밀리사이트 이벤트
const famSite = document.querySelector('.family')
const famList = document.querySelector('.famList')

famSite.addEventListener('mouseover', function () {
  famList.classList.add('famBlock')
})
famSite.addEventListener('mouseout', function () {
  famList.classList.remove('famBlock')
})





