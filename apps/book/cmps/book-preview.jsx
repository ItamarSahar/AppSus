const { Link } = ReactRouterDOM

export function BookPreview({ book, onSelectBook }) {
	let price
	switch (book.listPrice.currencyCode) {
		case 'ILS':
			price = `${book.listPrice.amount} ₪`
			break
		case 'USD':
			price = `$ ${book.listPrice.amount}`
			break
		case 'EUR':
			price = `${book.listPrice.amount} €`
			break
	}

	return (
		<Link to={`/book/${book.id}`}>
		<article className="book-preview" onClick={() => onSelectBook(book)}>
			<h5>{book.title}</h5>
			<h5>{price}</h5>
			<div className="img-container">
				<img src={book.thumbnail} />
			</div>
		</article>
		</Link>
	)
}





