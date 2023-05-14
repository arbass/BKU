'use strict'

const loadMoreButton = document.querySelector('.is-load-more')
const allFilterDropdowns = document.querySelectorAll('.filter-dropdown')
const inputFilter = document.querySelector(
	'.network-list-form_dropdown.is-input'
)

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

allFilterDropdowns.forEach(dropdown => {
	dropdown.addEventListener('click', function () {
		setTimeout(displayCurrentRadio, 100)
		setTimeout(checkLimitTags, 100)
	})
})

displayCurrentRadio()

inputFilter.addEventListener('input', function () {
	setTimeout(checkLimitTags, 200)
})

inputFilter.addEventListener('change', function () {
	setTimeout(checkLimitTags, 200)
})

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
