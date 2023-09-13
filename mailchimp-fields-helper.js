const allMCForms = document.querySelectorAll('[mc-field-helper-form]')

allMCForms.forEach(form => {
	form.addEventListener('submit', e => {
		const allMailChimpInputs = form.querySelectorAll('[mc-field-helper]')
		allMailChimpInputs.forEach(input => {
			let inputElement = document.createElement('input')
			inputElement.classList.add('hide')
			inputElement.type = 'text'
			inputElement.name = input.getAttribute('mc-field-helper')

			// Check if input type is checkbox or radio
			if (input.type === 'checkbox' || input.type === 'radio') {
				// Check the previous sibling for class 'w--redirected-checked'
				let prevSibling = input.previousElementSibling
				if (
					prevSibling &&
					prevSibling.classList.contains('w--redirected-checked')
				) {
					inputElement.value = 'true'
				} else {
					inputElement.value = 'false'
				}
			} else {
				inputElement.value = input.value
			}

			form.appendChild(inputElement)
		})
	})
})
