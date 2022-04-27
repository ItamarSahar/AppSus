


export class noteVideo extends React.Component {
	state = {
		src: '',
	}

	componentDidMount() {
		this.getUrl(this.props.note)
	}



	getUrl(note) {
		axios
			.get(`https://www.youtube.com/oembed?url=${note.info.url}`)
			.then((res) => {
				this.setState({ src: res.data.html })
				console.log(this.state)
			})
	}

	render() {
		const { src } = this.state
		const { note } = this.props
		console.log(src)
		return (
			<section className="note-video">
				<h1>{note.type}</h1>
				<h2>{note.info.title}</h2>
                <div className="Container" dangerouslySetInnerHTML={{__html: src}}></div>
			</section>
		)
	}
}
