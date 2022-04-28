
const { Link } = ReactRouterDOM
export class AddNote extends React.Component {
	state = {
		type: '',
	}

	setType = (type) => {
		this.setState({ type })
	}

	render() {
		const { type } = this.state
		return (
			<section className="add-note">
				<h1>add note!</h1>
				<button className="add-btn" onClick={() => this.setType('txt')}>
					text Note
				</button>
				<button className="add-btn" onClick={() => this.setType('todos')}>
					Todos Note
				</button>
				<button className="add-btn" onClick={() => this.setType('img')}>
					img Note
				</button>
				<button className="add-btn" onClick={() => this.setType('video')}>
					video Note
				</button>

				{type && <Link to={`/keep/edit/${type}`}>{`Add ${type} NOTE!`}</Link>}
			</section>
		)
	}
}
