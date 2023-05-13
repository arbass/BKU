'use strict'

function updateScreenNumbers() {
	if (document.querySelector('.full-height-screens_inner') !== null) {
		const all_screens = document.querySelectorAll('.full-height-screens_inner')
		const el_totalNum = document.querySelector('#height-screen-total-num')
		const el_currentNum = document.querySelector('#height-screen-current-num')
		const all_screensLenght = all_screens.length
		el_totalNum.textContent = all_screensLenght

		all_screens.forEach((screen, id) => {
			screen.setAttribute('screen-num', id + 1)
		})
		const positions = Array.from(all_screens).map(
			element => element.getBoundingClientRect().top + window.scrollY
		)
		const closestIndex = positions.findIndex(
			position => position >= window.scrollY
		)
		const screenNum = all_screens[closestIndex].getAttribute('screen-num')
		el_currentNum.textContent = screenNum
	}
}
window.addEventListener('load', updateScreenNumbers)
window.addEventListener('scroll', updateScreenNumbers)
