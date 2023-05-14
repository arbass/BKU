//tag, tag, tag, +5
//use '[ak_tagWrapper]' only in nest-source lists
//use '[ak_tagItem]' only in nest-source list's item
function checkLimitTags() {
	//12
	const tagCount_maximum = 3
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

checkLimitTags()
