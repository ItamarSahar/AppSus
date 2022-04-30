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
		const { onRemoveNote ,onDuplicateNote } = this.props
		return (
			<section className="note-todos">
				<section className="btn-container ">
					<Link to={`/keep/edit/${note.type}/${note.id}`}>
						<button className="btn-update-note"></button>
					</Link>
					<button
						onClick={() => onRemoveNote(note)}
						className="btn-delete-note"
					></button>
							<button
					onClick={() => onDuplicateNote(note)}
					className="btn-duplicate-note"
				>
					duplicate
				</button>
				</section>
				<ul className="todos-list">
					<h5 className="note-header">{label}</h5>
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
