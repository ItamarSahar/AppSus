import { BtnColor } from './btn-color.jsx'
const { Link } = ReactRouterDOM

export function NoteImg({ note, onRemoveNote, onDuplicateNote,handleStyleChange }) {
	return (
		<section className="note-img ">
			<section className="btn-container ">
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
			<img src={`${note.info.url}`} alt="" />
		</section>
	)
}
