import { BookPreview } from './book-preview.jsx'

export function BookList({ books, onSelectBook }) {
	return (
		<React.Fragment>
			{books && (
				<section className="book-list">
					{books.map((book) => (
						<BookPreview
							key={book.id}
							book={book}
							onSelectBook={onSelectBook}
						/>
					))}
				</section>
			)}
			{!books && <h1>Loader...</h1>}
		</React.Fragment>
	)
}
