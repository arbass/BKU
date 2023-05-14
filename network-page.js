'use strict'

function displayCurrentRadio() {
	let allActiveRadio = document.querySelectorAll('.fs-cmsfilter_active')
	allActiveRadio.forEach(radio => {
		let currentValue = radio.querySelector(
			'.cl-i_nav_link-dropdown-text-valie'
		).textContent
		let currentDropdownPlaceholder =
			radio.parentElement.parentElement.parentElement.parentElement
				.previousSibling.firstChild
		currentDropdownPlaceholder.textContent = currentValue
	})
}

const observer = new MutationObserver(mutationsList => {
	for (const mutation of mutationsList) {
		if (
			mutation.target.classList.contains('filter-dropdown') ||
			mutation.target.closest('.filter-dropdown')
		) {
			displayCurrentRadio()
		}
	}
})

const targetNode = document.body

const config = {
	attributes: true,
	childList: true,
	subtree: true,
}

observer.observe(targetNode, config)

function startChecked() {
	let allFirstRadiosClw = document.querySelectorAll(
		'.clw_nav_link-dropdown-list'
	)

	allFirstRadiosClw.forEach(clw => {
		let allCurrentRadios = clw.querySelectorAll(
			'.cl-i_nav_link-dropdown-list-text'
		)
		allCurrentRadios[0].click()
	})
}

document.addEventListener('DOMContentLoaded', event => {
	startChecked()
})

startChecked()
