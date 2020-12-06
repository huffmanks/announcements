import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="container navigation">
            <Link to="/">
                <button className="btn">Home</button>
            </Link>
            <Link to="/announcements">
                <button className="btn">Announcements</button>
            </Link>
            <Link to="/events">
                <button className="btn">Events</button>
            </Link>
        </div>
    )
}

export default Navigation
