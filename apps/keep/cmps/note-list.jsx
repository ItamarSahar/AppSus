import { NotePreview } from './note-preview.jsx'

export function NoteList(props) {
	const {notes} = props
	const {onRemoveNote} = props
	return (
		<section className="note-list">
			{notes.map((note) => (
				<NotePreview note={note} key={note.id} onRemoveNote={onRemoveNote}  />
			))}
		</section>
	)
}

