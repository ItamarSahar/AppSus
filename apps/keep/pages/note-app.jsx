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

	render() {
		const { notes } = this.state
		return (
			<section>
				<NoteFilter />
				<NoteList notes={notes} />
			</section>
		)
	}
}
