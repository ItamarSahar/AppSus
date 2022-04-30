const { Link } = ReactRouterDOM

export function NoteTxt({ note, onRemoveNote, onDuplicateNote }) {
	const { type, info } = note
	return (
		<section className="note-txt">
			<section className="btn-container " >
				<Link to={`/keep/edit/${note.type}/${note.id}`}>
					<button className="btn-update-note"></button>
				</Link>
				<button
					onClick={() => onRemoveNote(note)}
					className="btn-delete-note"
				></button>
				<button
					onClick={() => onDuplicateNote(note)}
					className="btn-duplicate-note"
				>
					duplicate
				</button>
			</section>
			<section className="note-desc">
				<h5 className="note-header">{info.txt}</h5>
			</section>
		</section>
	)
}
