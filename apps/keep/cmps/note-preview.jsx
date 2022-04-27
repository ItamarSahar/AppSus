import { NoteTxt } from '../cmps/note-txt.jsx'
import { NoteTodos } from '../cmps/note-todos.jsx'
import { NoteImg } from '../cmps/note-img.jsx'
import { NoteVideo } from '../cmps/note-video.jsx'

const { Link } = ReactRouterDOM

export class NotePreview extends React.Component {
	state = {
		type: '',
	}
	components = {
		txt: NoteTxt,
		img: NoteImg,
		todos: NoteTodos,
		video: NoteVideo,
	}

	render() {
		const { note } = this.props
		const {onRemoveNote} = this.props
		const SpecificNote = this.components[note.type]
		return (
			<section className="note-preview">
				<SpecificNote  note={note} onRemoveNote={onRemoveNote}/>
			</section>
		)
	}
}
