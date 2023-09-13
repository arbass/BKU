const redirectsList = [
	{
		current: 'germany',
		changeTo: 'deutschland',
	},
	{
		current: 'brazil',
		changeTo: 'brasil',
	},
	{
		current: 'denmark',
		changeTo: 'danmark',
	},
	{
		current: 'spain',
		changeTo: 'esp',
	},
	{
		current: 'italy',
		changeTo: 'it',
	},
	{
		current: 'japan',
		changeTo: 'jp',
	},
	{
		current: 'US',
		changeTo: 'us',
	},
	{
		current: 'austria',
		changeTo: 'austria',
	},
	{
		current: 'australia',
		changeTo: 'australia',
	},
	{
		current: 'e-money',
		changeTo: 'e-money',
	},
	{
		current: 'international',
		changeTo: 'international',
	},
	{
		current: 'International (france)',
		changeTo: 'International (français)',
	},
	{
		current: 'Osterreich',
		changeTo: 'Österreich',
	},
]

const allTabsButtons = document.querySelectorAll('.boku-knows-tabs .button')

function hashStartPage() {
	if (window.location.hash === '') {
		let currentButton = document.querySelector('.boku-knows-tabs .w--current')
		let currentButtonHash = currentButton.getAttribute('tab-id-hash')
		window.location.hash = currentButtonHash
	}
	redirectsList.forEach(item => {
		if (window.location.hash === `#${item.current}`) {
			window.location.hash = item.changeTo
			allTabsButtons.forEach(button => {
				if (button.getAttribute('tab-id-hash') === item.changeTo) {
					button.click()
				}
			})
		}
		if (window.location.hash === `#${item.changeTo}`) {
			allTabsButtons.forEach(button => {
				if (button.getAttribute('tab-id-hash') === item.changeTo) {
					button.click()
				}
			})
		}
	})
}

hashStartPage()
setTimeout(hashStartPage, 1000)

allTabsButtons.forEach(button => {
	button.addEventListener('click', () => {
		let currentButtonHash = button.getAttribute('tab-id-hash')
		window.location.hash = currentButtonHash
	})
})
