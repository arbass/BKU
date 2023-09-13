// Stable v0.1.3

const fullHeightScreens = document.querySelectorAll(
	'.section_full-height-screens'
)

function scrollWorkStart() {
	fullHeightScreens.forEach(screensWrapper => {
		const currentTunnelItems = screensWrapper.querySelectorAll(
			'.scroll-triggers-tunnel_item'
		)
		const cards = screensWrapper.querySelectorAll('.full-height-screens_inner')
		const currentNumElem = screensWrapper.querySelector(
			'#height-screen-current-num'
		)

		currentTunnelItems.forEach((tunnelTrigger, index) => {
			const rect = tunnelTrigger.getBoundingClientRect()

			if (rect.top < window.innerHeight && rect.bottom >= 0) {
				cards[index].classList.remove('opacity-hide')
				console.log(cards[index].id)
				currentNumElem.textContent = index + 1
			} else {
				cards[index].classList.add('opacity-hide')
			}
		})
	})
}

function flipCardsStart() {
	fullHeightScreens.forEach(screensWrapper => {
		const newScrollTunnel = document.createElement('div')
		newScrollTunnel.classList.add('scroll-triggers-tunnel')
		screensWrapper.appendChild(newScrollTunnel)

		const currentContainer = screensWrapper.querySelector('.container-large')
		const cards = screensWrapper.querySelectorAll('.full-height-screens_inner')
		const cardsCount = cards.length
		const totalNumElem = screensWrapper.querySelector(
			'#height-screen-total-num'
		)
		totalNumElem.textContent = cardsCount

		screensWrapper.style.height = `${cardsCount * 100}vh`

		currentContainer.style.position = 'sticky'
		currentContainer.style.top = '0'
		currentContainer.style.height = '100vh'

		cards.forEach((card, index) => {
			const newDiv = document.createElement('div')
			newDiv.classList.add('scroll-triggers-tunnel_item')
			newDiv.style.height = '100vh'
			newScrollTunnel.appendChild(newDiv)

			card.classList.add('opacity-hide')
			card.style.position = 'absolute'
			card.style.height = '100vh'
			card.style.top = '0'
			card.style.left = '0'
			card.style.bottom = '0'
			card.style.right = '0'
			card.style.width = '100%'
		})
	})

	scrollWorkStart()
}

if (fullHeightScreens.length > 0) {
	flipCardsStart()
}

window.addEventListener('scroll', scrollWorkStart)
