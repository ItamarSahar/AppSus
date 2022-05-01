import { BgColorInput } from './bg-color-note.jsx'

export class BtnColor extends React.Component {
	state = {
		isClicked: false,
	}

	render() {
		const { handleStyleChange } = this.props
		const { isClicked } = this.state
		return (
			<section>
				<button
					className="btn-color fo "
					onClick={() => this.onClick(isClicked)}
				>
					<img className='btn-fill-color' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA7UlEQVRIie3UOwrCQBSF4X8BaQ24I+0UFAt3kkZrl2UjiJUKFumiu4gQi5mBCyaZzEsscuA2YeDjJDcDY/44R+AC5L+G70AD3H6Jr4Faww3wAKap0Y1AD6jGyZvLpjv9bAJcSdi8DTVJhvehyfAhaHTcBY2G+6DB+EKge0fUJMfjV3sGot64gWOPFZevOvacba3l1RhjatSinWwwwCoS/ga2Q8CYuBcaigehvngbukQtrnOGLlytz8pkwEtPlgJvQwEKcabwgaH7tfd901KcK31h+G7e1dRE3oZVCAxqUSo9tqWZa7wCZqHwGOd8AKIS7PEnTZjuAAAAAElFTkSuQmCC" />
					<BgColorInput handleStyleChange={handleStyleChange} />
				</button>
			</section>
		)
	}
}
