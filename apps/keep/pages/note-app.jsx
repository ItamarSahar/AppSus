import { NoteList } from '../cmps/note-list.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'
import { noteService } from '../services/note.service.js'

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
			console.log(this.state)
		})
	}

	onRemoveNote = (note) => {
		let {notes} = this.state
		const noteIdx = noteService.getNoteById(note.id)
		notes.splice(noteIdx ,1 )
		noteService.updateNotes(notes)
		this.setState({notes})
	}

	render() {
		const { notes } = this.state
		return (
			<section>
				<NoteFilter />
				<NoteList notes={notes} onRemoveNote={this.onRemoveNote}/>
			</section>
		)
	}
}
