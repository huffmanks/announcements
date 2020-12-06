import { Component } from 'react'
import axios from 'axios'

class SubmitEventPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            location: '',
            cost: '',
            details: '',
            link: '',
            contact: '',
        }
    }

    handleChangeTitle = (e) => this.setState({ title: e.target.value })
    handleChangeImage = (e) => this.setState({ image: e.target.value })
    handleChangeLocation = (e) => this.setState({ location: e.target.value })
    handleChangeCost = (e) => this.setState({ cost: e.target.value })
    handleChangeDetails = (e) => this.setState({ details: e.target.value })
    handleChangeLink = (e) => this.setState({ link: e.target.value })
    handleChangeContact = (e) => this.setState({ contact: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()

        const events = {
            title: this.state.title,
            image: this.state.image,
            location: this.state.location,
            cost: this.state.cost,
            details: this.state.details,
            link: this.state.link,
            contact: this.state.contact,
        }

        axios
            .post('http://localhost:5000/api/events/', events)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

        this.setState({
            title: '',
            image: '',
            location: '',
            cost: '',
            details: '',
            link: '',
            contact: '',
        })

        window.location.href = '/events'
    }
    render() {
        return (
            <div className="container">
                <h1>Submit an Event</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                        required
                    />

                    <label>Image URL</label>
                    <input
                        type="text"
                        value={this.state.image}
                        onChange={this.handleChangeImage}
                        required
                    />

                    <label>Location</label>
                    <input
                        type="text"
                        value={this.state.location}
                        onChange={this.handleChangeLocation}
                        required
                    />

                    <label>Cost</label>
                    <input
                        type="text"
                        value={this.state.cost}
                        onChange={this.handleChangeCost}
                        required
                    />

                    <label>Details</label>
                    <input
                        type="text"
                        value={this.state.details}
                        onChange={this.handleChangeDetails}
                        required
                    />

                    <label>Link</label>
                    <input
                        type="text"
                        value={this.state.link}
                        onChange={this.handleChangeLink}
                        required
                    />

                    <label>Contact</label>
                    <input
                        type="text"
                        value={this.state.contact}
                        onChange={this.handleChangeContact}
                        required
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SubmitEventPage
