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
