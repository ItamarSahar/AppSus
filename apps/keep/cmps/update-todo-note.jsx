import { noteService } from '../services/note.service.js'

export class UpdateTodoNote extends React.Component {









	render() {






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
						
						onGoBack()
					}}
				>
					ADD
				</button>
			</section>
		)
	}
}
