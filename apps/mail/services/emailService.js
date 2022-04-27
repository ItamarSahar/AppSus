import { utilService } from '../../../services/util.service'
import { storageService } from '../../../services/storage.service'

export const emailService = {
	createEmail: createEmail,
	query,
}

const KEY = 'emailDB'

const loggedinUser = {
	email: 'user@appsus.com',
	fullname: 'Mahatma Appsus',
}

const email = {
	id: 'e101',
	subject: 'Miss you!',
	body: 'Would love to catch up sometimes',
	isRead: false,
	sentAt: 1551133930594,
	to: 'momo@momo.com',
	removeAt,
}

const criteria = {
	status: 'inbox/sent/trash/draft',
	txt: 'puki', // no need to support complex text search
	isRead: true, // (optional property, if missing: show all)
	isStared: true, // (optional property, if missing: show all)
	lables: ['important', 'romantic'], // has any of the labels
}

function createEmail(subject, body, to, isRead = false, removeAt = null) {
	return (email = {
		id: utilService.makeId(),
		subject,
		body,
		isRead,
		sentAt: new Date(),
		to,
		removeAt,
	})
}

function getEmailById(emailId) {
	const emails = _loadFromStorage()
	const email = emails.find((email) => emailId === email.id)
	return Promise.resolve(email)
}

function removeEmail(emailId) {
	let emails = _loadFromStorage()
	emails = email.filter((email) => email.id !== emailId)
	_saveToStorage(emails)
	return Promise.resolve()
}

function _add(emailToAdd) {
	let emails = _loadFromStorage()
	const email = createEmail(
		subject,
		body,
		to,
		(isRead = false),
		(removeAt = null)
	)
	emails = [email, ...emails]
	_saveToStorage(emails)
	return Promise.resolve()
}
// function _createEmails() {
//     const cars = []
//     for (let i = 0; i < 20; i++) {
//         const vendor = gVendors[utilService.getRandomIntInclusive(0, gVendors.length - 1)]
//         cars.push(_createCar(vendor))
//     }
//     return cars
// }

function query(filterBy) {
	let emails = _loadFromStorage()
	if (!emails) {
		emails = createEmail()
		_saveToStorage(emails)
	}
}

function _saveToStorage(emails) {
	storageService.saveToStorage(KEY, emails)
}

function _loadFromStorage() {
	return storageService.loadFromStorage(KEY)
}
