export class AddBook extends React.Component {
	state = {
		book: '',
		res: '',
	}

	handleChange = ({ target }) => {
		const value = target.value
		this.setState(
			(prevState) => ({ ...prevState, book: value }),
			() => {
				this.booksFromApi(value)
			}
		)
	}

	booksFromApi = (name) => {
		axios
			.get(
				`https://www.googleapis.com/books/v1/volumes?q=inauthor:${name}&key=AIzaSyDYnI3sGuloYCHT0jO6RA8izoz81iFLGO8`
			)
			.then((res) => {
				this.setState((pervState) => ({ ...pervState, res }))
			})
	}

	render() {
		const {book} = this.state
		return (
			<section className="AddBook">
				<h1>hey Add book!</h1>
				<form>
					<label>
						{' '}
						Name
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={book}
							onChange={this.handleChange}
						/>
					</label>
				</form>
				<div className="Books-Contanier"></div>
			</section>
		)
	}
}
