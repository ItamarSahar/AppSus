import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const KEY = 'notesDB'

export const noteService = {
	createImgNote,
	createTodosNote,
	createTxtNote,
	createVideoNote,
	query,
	deleteTodo,
	updateNotes,
	getNoteById,
	// saveNote,
	updateNote,
	getNoteIdxById,
	getNotes: _getNotes,
	onChangeTxtNote,
	onChangeImgNote,
	onChangeVideoNote,
	onChangeTodosNote,
	onDuplicateNote,
}

function query() {
	let notes = _loadFromStorage()
	if (!notes || !notes.length) {
		notes = _getNotes()
		_saveToStorage(notes)
	}

	return Promise.resolve(notes)
}

function createTxtNote(txt) {
	let notes = _loadFromStorage()
	const newTxtNote = {
		id: utilService.makeId(),
		type: 'txt',
		isPinned: false,
		info: { txt },
	}
	notes.push(newTxtNote)
	_saveToStorage(notes)
}

function onChangeTxtNote(note, txt) {
	let notes = _loadFromStorage()
	const newTxtNote = {
		id: note.id,
		type: 'txt',
		isPinned: false,
		info: { txt },
	}
	const noteIdx = getNoteIdxById(newTxtNote.id)
	notes.splice(noteIdx, 1, newTxtNote)
	_saveToStorage(notes)
	return
}

function createTodosNote(info) {
	const { label, todos } = info
	const newTodos = typeof todos === 'string' ? _getTodos(todos) : todos
	console.log(newTodos)
	let notes = _loadFromStorage()
	const newTodosNote = {
		id: utilService.makeId(),
		type: 'todos',
		info: {
			label,
			todos: newTodos,
		},
	}
	notes.push(newTodosNote)
	_saveToStorage(notes)
}

function onChangeTodosNote(note, label, todos) {
	let notes = _loadFromStorage()
	const newTodos = _getTodos(todos)
	const newTodosNote = {
		id: note.id,
		type: 'todos',
		isPinned: false,
		info: {
			label,
			todos: newTodos,
		},
	}
	const noteIdx = getNoteIdxById(newTodosNote.id)
	notes.splice(noteIdx, 1, newTodosNote)
	_saveToStorage(notes)
	return
}

function createImgNote(url, title) {
	let notes = _loadFromStorage()
	const newImgNote = {
		id: utilService.makeId(),
		type: 'img',
		info: { url, title },
	}
	notes.push(newImgNote)
	_saveToStorage(notes)
}

function onChangeImgNote(note, url, title) {
	let notes = _loadFromStorage()
	const newImgNote = {
		id: note.id,
		type: 'img',
		info: { url, title },
	}
	const noteIdx = getNoteIdxById(newImgNote.id)
	notes.splice(noteIdx, 1, newImgNote)
	_saveToStorage(notes)
	return
}

function createVideoNote(url, title) {
	let notes = _loadFromStorage()
	const newVideoNote = {
		id: utilService.makeId(),
		type: 'video',
		info: { url, title },
	}
	notes.push(newVideoNote)
	_saveToStorage(notes)
}

function onChangeVideoNote(note, url, title) {
	let notes = _loadFromStorage()
	const newVideoNote = {
		id: note.id,
		type: 'video',
		info: { url, title },
	}
	const noteIdx = getNoteIdxById(newVideoNote.id)
	notes.splice(noteIdx, 1, newVideoNote)
	_saveToStorage(notes)
	return
}

function deleteTodo(idx, note) {
	let { todos } = note.info
	let notes = _loadFromStorage()
	todos.splice(idx, 1)
	const noteIdx = getNoteIdxById(note.id)
	notes.splice(noteIdx, 1, note)
	_saveToStorage(notes)
	return
}

function updateNote(noteToUpdate) {
	let notes = _loadFromStorage()
	notes = notes.map((note) =>
		note.id === noteToUpdate.id ? noteToUpdate : note
	)
	_saveToStorage(notes)
	return notes
}

function getNoteById(noteId) {
	let notes = _loadFromStorage()
	return notes.find((note) => noteId === note.id)
}
function getNoteIdxById(noteId) {
	let notes = _loadFromStorage()
	return notes.findIndex((note) => noteId === note.id)
}

function updateNotes(notes) {
	_saveToStorage(notes)
}

function _getTodos(todos) {
	const newTodos = todos.split(',')
	return newTodos.map((todo) => ({ txt: todo, doneAt: null }))
}

function onDuplicateNote(noteId) {
	const newNote = getNoteById(noteId)
	console.log(newNote)
	if (newNote.type === 'txt') createTxtNote(newNote.info.txt)
	else if (newNote.type === 'todos') createTodosNote(newNote.info)
	else if (newNote.type === 'img')
		createImgNote(newNote.info.url, newNote.info.title)
	else if (newNote.type === 'video')
		createVideoNote(newNote.info.url, newNote.info.title)
	return
}

function _getNotes() {
	return [
		{
			id: utilService.makeId(),
			type: 'txt',
			isPinned: false,
			info: { txt: 'Fullstack Me Baby!' },
			bgColor: utilService.getRandomColor(),
		},
		{
			id: utilService.makeId(),
			type: 'img',
			isPinned: false,
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
			isPinned: false,
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
			isPinned: false,
			info: {
				url: 'https://www.youtube.com/watch?v=l_Zb2W18MHc&ab_channel=MontyKamal',
				title: 'Itachi and Sasuke VS Kabuto',
			},
			bgColor: utilService.getRandomColor(),
		},
	]
}

// function remove(carId) {
// 	let cars = _loadFromStorage()
// 	cars = cars.filter((car) => car.id !== carId)
// 	_saveToStorage(cars)
// 	return Promise.resolve()
// }

function _saveToStorage(notes) {
	storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
	return storageService.loadFromStorage(KEY)
}
