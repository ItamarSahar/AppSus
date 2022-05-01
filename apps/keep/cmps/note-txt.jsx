import { BtnColor } from './btn-color.jsx'

const { Link } = ReactRouterDOM

export function NoteTxt({
	note,
	onRemoveNote,
	onDuplicateNote,
	handleStyleChange,
}) {
	const { type, info } = note
	return (
		<section className="note-txt">
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
				<h5 className="note-header">{info.txt}</h5>
			</section>
		</section>
	)
}
