import { noteService } from '../services/note.service.js'
const { Link } = ReactRouterDOM
export class NoteVideo extends React.Component {
	state = {
		src: '',
	}

	componentDidMount() {
		this.getUrl(this.props.note)
	}

	getUrl(note) {
		axios
			.get(`https://www.youtube.com/oembed?url=${note.info.url}`)
			.then((res) => {
				this.setState({ src: res.data.html })
			})
	}

	render() {
		const { src } = this.state
		const { note } = this.props
		const {onRemoveNote} = this.props

		return (
			<section className="note-video">
				<Link to={`/keep/edit/${note.type}/${note.id}`}>Update Note </Link>
				<button onClick={() => onRemoveNote(note)}>X</button>
				<h1>{note.type}</h1>
				<h2>{note.info.title}</h2>
				<div
					className="Container"
					dangerouslySetInnerHTML={{ __html: src }}
				></div>
			</section>
		)
	}
}
