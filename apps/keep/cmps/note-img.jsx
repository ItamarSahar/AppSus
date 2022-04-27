export function noteImg({note}) {
	return (
		<section className="note-img">
			<h1>{note.type}</h1>
            <h2>{note.info.title}</h2>
            <img src={`${note.info.url}`} alt="" />
		</section>
	)
}
