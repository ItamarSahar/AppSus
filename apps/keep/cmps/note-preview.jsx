import { noteTxt } from '../cmps/note-txt.jsx'
import { noteTodos } from '../cmps/note-todos.jsx'
import { noteImg } from '../cmps/note-img.jsx'
import { noteVideo } from '../cmps/note-video.jsx'

const { Link } = ReactRouterDOM

export class NotePreview extends React.Component {
	state = {
		type: '',
	}
	components = {
		txt: noteTxt,
		img: noteImg,
		todos: noteTodos,
		video: noteVideo,
	}

	render() {
		const { note } = this.props
		const SpecificNote = this.components[note.type]
		return (
			<section className="note-preview">
				<SpecificNote  note={note}/>
			</section>
		)
	}
}
