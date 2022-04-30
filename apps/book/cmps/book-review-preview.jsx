export function ReviewPreview({ bookId, onRemove ,review}) {
  return (
    <div key={review.id} className='review-card'>
      <button
        onClick={() => {
          onRemove(review.id, bookId)
        }}
      >
        x
      </button>
      <p>Name: {review.name}</p>
      <p>stars: {review.stars}</p>
      <p>Date of review: {review.date}</p>
      <p>Review: {review.review}</p>
    </div>
  )
}
