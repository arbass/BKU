'use strict'

const loadMoreButton = document.querySelector('.is-load-more')

//tag, tag, tag, +12
//use '[ak_tagWrapper]' only in nest-source lists
//use '[ak_tagItem]' only in nest-source list's item
function checkLimitTags() {
	const tagCount_maximum = 12
	let all_tagsWrappers = document.querySelectorAll(
		'[fs-cmsfilter-element="list"] [ak_tagWrapper]'
	)

	all_tagsWrappers.forEach(tagWrapper => {
		let elementsOfCurrentWrapper = tagWrapper.querySelectorAll('[ak_tagItem]')
		let countOfCurrentWrapper = elementsOfCurrentWrapper.length
		if (countOfCurrentWrapper > tagCount_maximum) {
			elementsOfCurrentWrapper.forEach((tagItem, id) => {
				if (id > tagCount_maximum - 1) {
					tagItem.classList.add('hide')
					if (id == countOfCurrentWrapper - 1) {
						elementsOfCurrentWrapper[tagCount_maximum - 1].querySelector(
							'[ak_tagItemCounter]'
						).textContent = ' +' + (countOfCurrentWrapper - tagCount_maximum)
					}
				}
			})
		}
	})
}

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
	setTimeout(checkLimitTags, 300)
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
		// allCurrentRadios[0].click()
	})
}

document.addEventListener('DOMContentLoaded', event => {
	startChecked()
})

startChecked()

checkLimitTags()

loadMoreButton.addEventListener('click', function () {
	setTimeout(checkLimitTags, 300)
})
