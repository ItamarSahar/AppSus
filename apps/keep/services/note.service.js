import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const KEY = 'notesDB'

export const noteService = {
	createImgNote,
	createTodosNote,
	createTxtNote,
	createVideoNote,
	query,
}

const gNotes = [
	{
		id: utilService.makeId(),
		type: 'txt',
		isPinned: true,
		info: { txt: 'Fullstack Me Baby!' },
		bgColor: utilService.getRandomColor(),
	},
	{
		id: utilService.makeId(),
		type: 'img',
		info: {
			url: '../../../assets/img/parrots_paradise.jpg',
			title: 'Bobi and Me',
		},
		style: { backgroundColor: '#00d' },
		bgColor: utilService.getRandomColor(),
	},
	{
		id: utilService.makeId(),
		type: 'todos',
		info: {
			label: 'Get my stuff together',
			todos: [
				{ txt: 'Driving liscence', doneAt: null },
				{ txt: 'Coding power', doneAt: 187111111 },
			],
		},
		bgColor: utilService.getRandomColor(),
	},
	{
		id: utilService.makeId(),
		type: 'video',
		label: 'Get my stuff together',
		info: {
			url: 'https://www.youtube.com/watch?v=l_Zb2W18MHc&ab_channel=MontyKamal',
			title: 'Itachi',
		},
		bgColor: utilService.getRandomColor(),
	},
]

function query() {
	let notes = _loadFromStorage()
	if (!notes) {
		notes = gNotes
		_saveToStorage(notes)
	}

	return Promise.resolve(notes)
}

function createTxtNote(txt) {
	return {
		id: utilService.makeId(),
		type: 'txt',
		isPinned: false,
		info: { txt },
	}
}
function createTodosNote(label, todos) {
	return {
		id: utilService.makeId(),
		type: 'todos',
		info: {
			label,
			todos,
		},
	}
}
function createImgNote(url, title) {
	return {
		id: utilService.makeId(),
		type: 'img',
		info: { url, title },
	}
}
function createVideoNote(label, url, title) {
	return {
		id: utilService.makeId(label),
		type: 'video',
		info: {
			label,
			info: { url, title },
		},
	}
}

function _add(noteToAdd, cb) {
	let notes = _loadFromStorage()
	const note = cb(noteToAdd)
	notes = [note, ...notes]
	_saveToStorage(notes)
	return Promise.resolve()
}

function getNoteById(noteId) {
	const notes = _loadFromStorage()
	const note = notes.find((note) => noteId === note.id)
	return Promise.resolve(note)
}

function removeEmail(noteId) {
	let notes = _loadFromStorage()
	notes = note.filter((note) => note.id !== noteId)
	_saveToStorage(notes)
	return Promise.resolve()
}

function _saveToStorage(notes) {
	storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
	return storageService.loadFromStorage(KEY)
}
