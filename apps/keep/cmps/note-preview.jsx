import { NoteTxt } from '../cmps/note-txt.jsx'
import { NoteTodos } from '../cmps/note-todos.jsx'
import { NoteImg } from '../cmps/note-img.jsx'
import { NoteVideo } from '../cmps/note-video.jsx'
import { BgColorInput } from './bg-color-note.jsx'

const { Link } = ReactRouterDOM

export class NotePreview extends React.Component {
	state = {
		type: '',
		noteStyle: {
			backgroundColor: '',
		},
	}
	components = {
		txt: NoteTxt,
		img: NoteImg,
		todos: NoteTodos,
		video: NoteVideo,
	}

	handleStyleChange = (field, value) => {
		this.setState((prevState) => ({
			noteStyle: { ...prevState.noteStyle, [field]: value },
		}))
	}

	render() {
		const { note } = this.props
		const { onRemoveNote, onDuplicateNote } = this.props
		const { noteStyle } = this.state
		const SpecificNote = this.components[note.type]
		return (
			<section className="note-preview" style={noteStyle}>
				<SpecificNote
					note={note}
					onRemoveNote={onRemoveNote}
					onDuplicateNote={onDuplicateNote}
				/>
				<BgColorInput handleStyleChange={this.handleStyleChange} />
			</section>
		)
	}
}
