import Announcements from '../components/announcements/Announcements'
import Events from '../components/events/Events'

const HomePage = () => {
    return (
        <div className="container col">
            <Announcements />
            <Events />
        </div>
    )
}

export default HomePage
