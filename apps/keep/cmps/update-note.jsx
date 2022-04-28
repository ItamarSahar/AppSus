import { UpdateImgNote } from './update-img-note.jsx'
// import { UpdateVideoNote } from './update-video-note.jsx'
import { UpdateTxtNote } from './update-txt-note.jsx'
import { noteService } from '../services/note.service.js'
// import { UpdateTodoNote } from './update-todo-note.jsx'

export class UpdateNote extends React.Component {
	state = {
		note: null,
	}

	components = {
		txt: UpdateTxtNote,
		img: UpdateImgNote,
		// todos: UpdateTodoNote,
		// video: UpdateVideoNote,
	}

	componentDidMount() {
		this.loadNote()
	}

	loadNote = () => {
		const { noteID } = this.props
		const note = noteService.getNoteById(noteID)
		this.setState({ note })
	}

	render() {
		const { onGoBack, noteID } = this.props
		const { note } = this.state
		if (!note) return <h1>loading..</h1>

		const SpecificAddNote = this.components[note.type]

		return (
			<section className="update-note">
				<SpecificAddNote note={note} onGoBack={onGoBack} />
			</section>
		)
	}
}
