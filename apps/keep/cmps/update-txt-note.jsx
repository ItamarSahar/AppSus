import { noteService } from '../services/note.service.js'

export class UpdateTxtNote extends React.Component {
	state = {
		txt: '',
	}
	handleChange = ({ target }) => {
		const value = target.value
		const field = target.name
		this.setState((prevState) => ({ ...prevState, [field]: value }))
	}

	render() {
		const { txt } = this.state
		const { note, onGoBack } = this.props
		return (
			<section>
				<input
					name="txt"
					type="text"
					placeholder="Enter a text"
					value={txt}
					onChange={this.handleChange}
				/>
				<button
					onClick={() => {
						noteService.onChangeTxtNote(note, txt)
						onGoBack()
					}}
				>
					ADD
				</button>
			</section>
		)
	}
}
