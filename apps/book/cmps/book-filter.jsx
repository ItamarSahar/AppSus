export class BookFilter extends React.Component {
	state = {
		filterBy: {
			name: '',
			minPrice: '',
			maxPrice: '',
		},
	}

	handleChange = ({ target }) => {
		const value = target.type === 'number' ? +target.value : target.value
		const field = target.name
		this.setState(
			(prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
			() => {
				this.props.onSetFilter(this.state.filterBy)
			}
		)
	}

	onFilter = (ev) => {
		ev.preventDefault()
		this.props.onSetFilter(this.state.filterBy)
	}

	render() {
		const { name, minPrice, maxPrice } = this.state.filterBy
		return (
            <section className="book-filter">
            <form onSubmit={this.onFilter}>
                <label> Name  
                    <input type="text" placeholder="Name" name="name"
                        value={name} onChange={this.handleChange} />
                </label>

                <label>Min Price  
                    <input type="number" placeholder="by min price" name="minPrice"
                        value={minPrice} onChange={this.handleChange} />
                </label>

                <label>Max Price  
                    <input type="number" placeholder="by max price" name="maxPrice"
                        value={maxPrice} onChange={this.handleChange} />
                </label>

                <button> go </button>
            </form>
        </section>
		)
	}
}
