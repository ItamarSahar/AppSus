const { Link } = ReactRouterDOM
export class AddNote extends React.Component {
	state = {
		type: 'txt',
	}

	setType = (type) => {
		this.setState({ type })
	}

	render() {
		const { type } = this.state
		return (
			<section className="add-note">
				<button
					className="add-txt-btn fo"
					onClick={() => this.setType('txt')}
				></button>
				<button
					className="add-todos-btn fo"
					onClick={() => this.setType('todos')}
				></button>
				<button
					className="add-img-btn fo"
					onClick={() => this.setType('img')}
				></button>
				<button
					className="add-video-btn fo"
					onClick={() => this.setType('video')}
				></button>

				<Link to={`/keep/edit/${type}`}>
					<button className="add-note-btn">{`Add ${type} NOTE!`}</button>
				</Link>
			</section>
		)
	}
}
