import { noteService } from '../services/note.service.js'

export class UpdateImgNote extends React.Component {
	state = {
		url: '',
		title: '',
	}
	handleChange = ({ target }) => {
		const value = target.value
		const field = target.name
		this.setState((prevState) => ({ ...prevState.filterBy, [field]: value }))
	}

	render() {
		const { url, title } = this.state
		const { note, onGoBack } = this.props
		return (
			<section>
				<input
					name="url"
					type="text"
					placeholder="Enter a IMG URL"
					value={url}
					onChange={this.handleChange}
				/>
				<input
					name="title"
					type="text"
					placeholder="TITLE"
					value={title}
					onChange={this.handleChange}
				/>
				<button
					onClick={() => {
						noteService.onChangeImgNote(note, url, title)
						onGoBack()
					}}
				>
					ADD
				</button>
			</section>
		)
	}
}
