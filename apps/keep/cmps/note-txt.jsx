export function NoteTxt({note , onRemoveNote}) {
    const {type , info} = note
	return (
		<section className="note-txt">
            <button onClick={()=> onRemoveNote(note)}>X</button>
			<h1>{type}</h1>
            <p>{info.txt}</p>
		</section>
	)
}
