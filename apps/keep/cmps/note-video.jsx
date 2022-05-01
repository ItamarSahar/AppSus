import { BtnColor } from './btn-color.jsx'
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
		const { onRemoveNote, onDuplicateNote, handleStyleChange } = this.props

		return (
			<section className="note-video">
				<section className="btn-container  ">
					<Link to={`/keep/edit/${note.type}/${note.id}`}>
						<button className="btn-update-note"></button>
					</Link>
					<button
						onClick={() => onRemoveNote(note)}
						className="btn-delete-note"
					></button>
					<button
						onClick={() => onDuplicateNote(note)}
						className="btn-duplicate-note fo"
					></button>
					<BtnColor handleStyleChange={handleStyleChange} />
				</section>

				<section className="note-desc">
					<h2 className="note-header">{note.info.title}</h2>
				</section>
				<div
					className="video-Container"
					dangerouslySetInnerHTML={{ __html: src }}
				></div>
			</section>
		)
	}
}
