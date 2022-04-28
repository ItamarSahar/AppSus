const { Link } = ReactRouterDOM

export function NoteImg({ note, onRemoveNote }) {
	return (
		<section className="note-img">
			<Link to={`/keep/edit/${note.type}/${note.id}`}>Update Note </Link>
			<button onClick={() => onRemoveNote(note)}>X</button>
			<h1>{note.type}</h1>
			<h2>{note.info.title}</h2>
			<img src={`${note.info.url}`} alt="" />
		</section>
	)
}
