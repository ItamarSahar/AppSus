import { bookService } from '../services/books-service.js'
import { BookList } from '../cmps/books-list.jsx'
import { BookDetails } from '../pages/book-details.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import {AddBook} from '../cmps/add-book.jsx'

export class BookApp extends React.Component {
	state = {
		books: [],
		filterBy: null,
		selectedBook: null,
	}
	componentDidMount() {
		this.loadBooks()
	}

	loadBooks = () => {
		bookService
			.query(this.state.filterBy)
			.then((books) => this.setState({ books }))
	}
	onSetFilter = (filterBy) => {
		this.setState({ filterBy }, this.loadBooks)
	}

	onSelectBook = (book) => {
		this.setState({ selectedBook: book })
	}
	onRemoveBook = (bookId) => {
		bookService.removeBook(bookId).then(() => {
			this.loadBooks()
			this.onSelectBook(null)
		})
	}

	render() {
		const { books, selectedBook } = this.state

		return (
			<section className="book-app">
				<AddBook/>
				<React.Fragment>
					<BookFilter onSetFilter={this.onSetFilter} />
					<BookList books={books} onSelectBook={this.onSelectBook} />
				</React.Fragment>
				)
			</section>
		)
	}
}

