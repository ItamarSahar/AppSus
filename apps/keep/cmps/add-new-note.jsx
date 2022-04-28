import { AddVideoNote } from './add-video-note.jsx'
import { AddImgNote } from './add-img-note.jsx'
import { AddTodosNote } from './add-todos-note.jsx'
import { AddTxtNote } from './add-txt-note.jsx'

export class AddNewNote extends React.Component {
	components = {
		txt: AddTxtNote,
		img: AddImgNote,
		todos: AddTodosNote,
		video: AddVideoNote,
	}

	render() {
		const { onGoBack, noteType } = this.props

		const SpecificAddNote = this.components[noteType]
		return (
			<section>
				<SpecificAddNote onGoBack={onGoBack} />
			</section>
		)
	}
}
