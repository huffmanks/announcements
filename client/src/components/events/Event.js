import { Component } from 'react'

class Event extends Component {
    render() {
        const {
            title,
            date,
            image,
            location,
            cost,
            details,
            link,
            contact,
        } = this.props
        return (
            <div className="event">
                <div className="image">
                    <img src={image} alt={title} />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <div>
                        <span className="heading">Date/Time:</span> {date}
                    </div>
                    <div>
                        <span className="heading">Location:</span> {location}
                    </div>
                    <div>
                        <span className="heading">Cost:</span> {cost}
                    </div>
                    <div>
                        <span className="heading">Details:</span> {details}
                    </div>
                    <div>
                        <span className="heading">Link:</span>{' '}
                        <a href={link}>{link}</a>
                    </div>
                    <div>
                        <span className="heading">Contact:</span>{' '}
                        <a href={contact}>{contact}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event
