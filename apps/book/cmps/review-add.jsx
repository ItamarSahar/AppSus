import { BookService } from "../services/books-service.js"
import { eventBusService } from '../services/event-bus-service.js'
export class ReviewAdd extends React.Component {
    state = {
        review: {
            name:'',
            stars:'',
            date:'',
            review:''
        }
    }

    onAddReview = (ev) => {
        ev.preventDefault()
        this.props.onSaveReview(this.state.review)
        this.setState({  
            review: {
            name:'',
            stars:'',
            date:'',
            review:''
        }})
        eventBusService.emit('user-msg', {
            type: 'success', txt: 'Add review successfully'
        })
    }

    handleChange = ({target}) => {
        const value = target.value
        const stateKey = target.name
        this.setState((prevState)=>({review:{...prevState.review,[stateKey]:value}}),()=>{
            // console.log(this.state)
        })
    }

    render() {
        const {name,stars,date,review} = this.state.review
        return <section className="reviews">
            <form onSubmit={this.onAddReview}>
                <input name="name" value={name} type="text" placeholder="Your name" onChange={this.handleChange} />
                <label htmlFor="stars">
                    <select value={stars} name="stars" id="stars" onChange={this.handleChange}>
                        <option value="1">1 Star!</option>
                        <option value="2">2 Stars!</option>
                        <option value="3">3 Stars!</option>
                        <option value="4">4 Stars!</option>
                        <option value="5">5 Stars!</option>
                    </select>
                </label>
                <input value={date} name="date" type="date" onChange={this.handleChange}/>
                <textarea value={review} name="review" id="review" cols="20" rows="5" onChange={this.handleChange}></textarea>
                <button>Save your review!</button>
            </form>
        </section>
    }
}






