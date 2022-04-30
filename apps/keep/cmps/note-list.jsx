import { NotePreview } from './note-preview.jsx'
const { Link } = ReactRouterDOM

export function NoteList(props) {
	const { notes } = props
	const { onRemoveNote } = props
	const { onDuplicateNote } = props
	return (
		<section className="note-list">
			{notes.map((note) => (
				<NotePreview
					note={note}
					key={note.id}
					onRemoveNote={onRemoveNote}
					onDuplicateNote={onDuplicateNote}
				/>
			))}
		</section>
	)
}
