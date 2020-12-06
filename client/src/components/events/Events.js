import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Event from './Event'

class Events extends Component {
    state = {
        events: [],
    }
    componentDidMount() {
        this.getEvents()
    }
    getEvents = async () => {
        let res = await axios.get('http://localhost:5000/api/events/')
        let events = res.data
        this.setState({ events })
    }

    render() {
        const events = this.state.events
        return (
            <div className="container">
                <div className="submit">
                    <div className="title">Events</div>
                    <Link to="/events/submit">
                        <button className="btn">Submit</button>
                    </Link>
                </div>
                <div className="events">
                    {events.map((event) => {
                        return (
                            <Event
                                key={event._id}
                                title={event.title}
                                date={event.date}
                                image={event.image}
                                location={event.location}
                                cost={event.cost}
                                details={event.details}
                                link={event.link}
                                contact={event.contact}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Events
