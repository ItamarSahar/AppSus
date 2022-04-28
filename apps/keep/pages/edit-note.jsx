import { noteService } from '../services/note.service.js'
import { AddNewNote } from '../cmps/add-new-note.jsx'
import { UpdateNote } from '../cmps/update-note.jsx'
const { Route, NavLink } = ReactRouterDOM
export class EditNote extends React.Component {
	state = {
		info: {
			label: '',
			todos: '',
		},
	}

	componentDidMount() {
		this.loadNoteInfo()
	}

	loadNoteInfo = () => {
		const { noteID } = this.props.match.params
		if (!noteID) return
		const note = noteService.getNoteById(noteID)
		this.setState({ note })
	}

	onGoBack = () => {
		this.props.history.push('/keep')
	}

	// handleChange = ({ target }) => {
	// 	const field = target.name
	// 	const value = target.value
	// 	this.setState((prevState) => ({
	// 		info: { ...prevState.info, [field]: value },
	// 	}))
	// }

	// get todosToDisplay() {
	// 	const txt = this.state.info.todos.map((todo) => todo.txt)

	// 	return txt.join(',')
	// }

	render() {
		const { noteID, noteType } = this.props.match.params
		return (
			<section className="Note-edit">
				{!noteID && <AddNewNote noteType={noteType} onGoBack={this.onGoBack} />}
				{noteID && <UpdateNote noteID={noteID} onGoBack={this.onGoBack} />}
			</section>
		)
	}
}
