import { LongText } from '../cmps/long-text.jsx'
import { ReviewAdd } from '../cmps/review-add.jsx'
import { bookService } from '../services/books-service.js'
import { ReviewList } from '../cmps/reviews-list.jsx'

export class BookDetails extends React.Component {
	state = {
		book: null,
	}

	componentDidMount() {
		this.loadBook()
	}

	loadBook = () => {
		const { bookId } = this.props.match.params
		bookService.getBookById(bookId).then((book) => {
			this.setState({ book })
		})
	}

	onRemoveReview = (reviewId, bookId) => {
		bookService.removeReview(reviewId, bookId).then(() => this.loadBook())
	}

	onSaveReview = (review) => {
		const { bookId } = this.props.match.params
		bookService.addReview(review, bookId).then(() => this.loadBook())
	}

	render() {
		const { book } = this.state
		if (!book) return <h1>Loading...</h1>
		return (
			<section className="book-details">
				<header>
					<h1
						className={
							book.listPrice.amount > 150
								? 'red'
								: book.listPrice.amount < 20
								? 'green'
								: ''
						}
					>
						Book title: {book.title}
					</h1>
				</header>
				<div className="img">
					<img src={book.thumbnail} />
				</div>
				<div className="desc">
					<h3>Description:</h3>
					<LongText text={book.description} />
					<p>
						Books Length: {book.pageCount}
						{book.pageCount > 500
							? ' - Long reading'
							: book.pageCount > 200
							? ' - Decent reading'
							: book.pageCount < 100
							? ' - Light reading'
							: ''}
					</p>
					<p>Subtitles: {book.subtilte}</p>
					<p>Author/s: {book.authors}</p>
					<p>Published at: {book.publishedDate}</p>
					<p>Categories: {book.categories.map((cat) => cat + ' ')}</p>
					<p>Language: {book.language}</p>
					<p>
						{2022 - book.publishDate > 10
							? 'Veteran book'
							: 2022 - book.publishedDate < 1
							? 'New'
							: ''}
					</p>
					<h1>{book.listPrice.isOnSale ? 'This book is now on sale!' : ''}</h1>
				</div>
				<div className="review">
					<ReviewList
						reviews={book.reviews}
						bookId={book.id}
						onRemove={this.onRemoveReview}
					/>
					<ReviewAdd onSaveReview={this.onSaveReview} />
				</div>
			</section>
		)
	}
}
