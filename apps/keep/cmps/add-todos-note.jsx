import { noteService } from '../services/note.service.js'

export class AddTodosNote extends React.Component {
	state = {
		type: 'todos',
		info: {
			label: '',
			todos: '',
		},
	}

	// componentDidMount() {
	// 	this.updateNote()
	// }

	handleChange = ({ target }) => {
		const value = target.value
		const field = target.name
		this.setState({ info: { ...this.state.info, [field]: value } })
	}

	// updateNote = () => {
	// 	const { noteID } = this.props
	// 	if (!noteID) return
	// 	const note = noteService.getNoteById(noteID)
	// 	const { info } = note
	// 	const todos = info.todos.map((todo) => `${todo.txt}`)
	// 	this.setState((prevState) => ({
	// 		...prevState,
	// 		id: noteID,
	// 		info: { label: info.label, todos: todos },
	// 	}))
	// }

	render() {
		const { info } = this.state
		const { label, todos } = info
		const { onGoBack, noteID } = this.props
		console.log(this.state)
		return (
			<section>
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
						noteService.createTodosNote(info)
						onGoBack()
					}}
				>
					ADD
				</button>
			</section>
		)
	}
}
