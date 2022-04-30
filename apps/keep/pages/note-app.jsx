import { NoteList } from '../cmps/note-list.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { noteService } from '../services/note.service.js'
import { AddNote } from '../cmps/add-note.jsx'

export class NoteApp extends React.Component {
	state = {
		notes: [],
	}

	componentDidMount() {
		this.loadNotes()
	}

	loadNotes = () => {
		noteService.query().then((notes) => {
			this.setState({ notes })
		})
	}
	onDuplicateNote = (note) => {
		noteService.onDuplicateNote(note.id)
		this.loadNotes()
	}

	onRemoveNote = (note) => {
		let { notes } = this.state
		const noteIdx = noteService.getNoteIdxById(note.id)
		notes.splice(noteIdx, 1)
		noteService.updateNotes(notes)
		this.loadNotes()
	}

	render() {
		const { notes } = this.state
		return (
			<section>
				<AddNote />
				{/* <NoteFilter /> */}
				<NoteList notes={notes} onDuplicateNote={this.onDuplicateNote} onRemoveNote={this.onRemoveNote} />
			</section>
		)
	}
}
