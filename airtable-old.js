let table = base.getTable('Table 1')

let query = await table.selectRecordsAsync()

// Создадим объект для отслеживания количества встречаемости каждого Jobs id
let jobIdsCount = {}

for (let record of query.records) {
	let jobsTitle = record.getCellValue('Jobs title')
	let jobId = record.getCellValue('Jobs internal job id')

	let transformedText = jobsTitle
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9\s\-/]/g, '')
		.replace(/[/\s]+/g, '-')
		.replace(/\-+/g, '-')
		.replace(/\-$/g, '')

	if (jobId) {
		transformedText += '-' + jobId

		// Увеличим счетчик для данного Jobs id
		jobIdsCount[jobId] = (jobIdsCount[jobId] || 0) + 1
	}

	await table.updateRecordAsync(record, {
		slug: transformedText,
	})
}

for (let record of query.records) {
	let jobId = record.getCellValue('Jobs internal job id')

	if (jobId && jobIdsCount[jobId] > 1) {
		// Если Jobs id встречается чаще одного раза, удалим запись
		await table.deleteRecordAsync(record)
	}
}
