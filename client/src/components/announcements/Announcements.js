import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Announcement from './Announcement'

class Announcements extends Component {
    state = {
        announcements: [],
    }
    componentDidMount() {
        this.getAnnouncements()
    }
    getAnnouncements = async () => {
        let res = await axios.get('http://localhost:5000/api/announcements/')
        let announcements = res.data
        this.setState({ announcements })
    }

    render() {
        const announcements = this.state.announcements
        return (
            <div className="container">
                <div className="submit">
                    <div className="title">Announcements</div>
                    <Link to="/announcements/submit">
                        <button className="btn">Submit</button>
                    </Link>
                </div>
                <div className="events">
                    {announcements.map((announcement) => {
                        return (
                            <Announcement
                                key={announcement._id}
                                title={announcement.title}
                                image={announcement.image}
                                details={announcement.details}
                                link={announcement.link}
                                contact={announcement.contact}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Announcements
