export function NoteImg({note , onRemoveNote}) {
	return (
		<section className="note-img">
			<button onClick={()=> onRemoveNote(note)}>X</button>
			<h1>{note.type}</h1>
            <h2>{note.info.title}</h2>
            <img src={`${note.info.url}`} alt="" />
		</section>
	)
}
