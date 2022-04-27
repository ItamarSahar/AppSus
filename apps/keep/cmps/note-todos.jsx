import { NoteTodo } from './note-todo.jsx'
import { noteService } from '../services/note.service.js'

export class NoteTodos extends React.Component {
	state = {
		todos: this.props.note.info,
	}

	onDeleteTodo = (idx) => {
		const { note } = this.props
		const todos = noteService.deleteTodo(idx, note)
		this.setState({ todos })
	}

	render() {
		const { note } = this.props
		const { todos } = this.props.note.info
		const { label } = this.props.note.info
		const { onRemoveNote } = this.props
		console.log(todos)
		return (
			<section className="note-todos">
				<button onClick={() => onRemoveNote(note)}>X</button>
				<ul>
					<h5>{label}</h5>
					{todos.map((todo, idx) => (
						<NoteTodo
							todo={todo}
							idx={idx}
							onDeleteTodo={this.onDeleteTodo}
							key={idx}
						/>
					))}
				</ul>
			</section>
		)
	}
}
