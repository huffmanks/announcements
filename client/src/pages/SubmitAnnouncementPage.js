import { Component } from 'react'
import axios from 'axios'

class SubmitAnnouncementPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            image: '',
            details: '',
            link: '',
            contact: '',
        }
    }

    handleChangeTitle = (e) => this.setState({ title: e.target.value })
    handleChangeImage = (e) => this.setState({ image: e.target.value })
    handleChangeDetails = (e) => this.setState({ details: e.target.value })
    handleChangeLink = (e) => this.setState({ link: e.target.value })
    handleChangeContact = (e) => this.setState({ contact: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()

        const announcements = {
            title: this.state.title,
            image: this.state.image,
            details: this.state.details,
            link: this.state.link,
            contact: this.state.contact,
        }

        axios
            .post('http://localhost:5000/api/announcements/', announcements)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })

        this.setState({
            title: '',
            image: '',
            details: '',
            link: '',
            contact: '',
        })

        window.location.href = '/announcements'
    }
    render() {
        return (
            <div className="container">
                <h1>Submit an Announcement</h1>
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

export default SubmitAnnouncementPage
