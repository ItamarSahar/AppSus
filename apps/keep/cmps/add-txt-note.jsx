import { noteService } from '../services/note.service.js'

export class AddTxtNote extends React.Component {
	state = {
		txt: '',
	}
	handleChange = ({ target }) => {
		const value = target.value
		const field = target.name
		this.setState((prevState) => ({ ...prevState ,[field]: value }))
	}

	render() {
		const { txt } = this.state
		const { onGoBack } = this.props
		return (
			<section>
				<input
					name="txt"
					type="text"
					placeholder="Enter a Comma Seperted List"
					value={txt}
					onChange={this.handleChange}
				/>
				<button
					onClick={() => {
						noteService.createTxtNote(txt)
						onGoBack()
					}}
				>ADD</button>
			</section>
		)
	}
}
