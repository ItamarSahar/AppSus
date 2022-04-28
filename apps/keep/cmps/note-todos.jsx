import { NoteTodo } from './note-todo.jsx'
import { noteService } from '../services/note.service.js'
const { Link } = ReactRouterDOM
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
		return (
			<section className="note-todos">
				<Link to={`/keep/edit/${note.type}/${note.id}`}>Update Note </Link>
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
