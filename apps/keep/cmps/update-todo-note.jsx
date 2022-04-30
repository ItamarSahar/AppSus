import { noteService } from '../services/note.service.js'

export class UpdateTodoNote extends React.Component {
	state = {
		label: '',
		todos: '',
	}

	componentDidMount() {
		this.loadNote()
	}
	handleChange = ({ target }) => {
		const value = target.value
		const field = target.name
		this.setState((prevState) => ({ ...prevState, [field]: value }))
	}

	loadNote = () => {
		const { note } = this.props
		const { label, todos } = note.info
		console.log(todos.map((todo) => todo.txt).join(','))
		this.setState({ label, todos: todos.map((todo) => todo.txt).join(',') })
	}

	render() {
		const { label, todos } = this.state
		const { note, onGoBack } = this.props
		return (
			<section className="update-note">
				<input
					name="label"
					type="text"
					placeholder="label"
					value={label}
					onChange={this.handleChange}
				/>
				<input
					name="todos"
					type="text"
					placeholder="Enter a Comma Seperted List"
					value={todos}
					onChange={this.handleChange}
				/>
				<button
					onClick={() => {
						noteService.onChangeTodosNote(note, label, todos)
						onGoBack()
					}}
				>
					ADD
				</button>
			</section>
		)
	}
}
