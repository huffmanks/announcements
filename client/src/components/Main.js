import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AnnouncementsPage from '../pages/AnnouncementsPage'
import EventsPage from '../pages/EventsPage'
import SubmitAnnouncementPage from '../pages/SubmitAnnouncementPage'
import SubmitEventPage from '../pages/SubmitEventPage'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route
                exact
                path="/announcements"
                component={AnnouncementsPage}
            ></Route>
            <Route exact path="/events" component={EventsPage}></Route>
            <Route
                exact
                path="/announcements/submit"
                component={SubmitAnnouncementPage}
            ></Route>
            <Route
                exact
                path="/events/submit"
                component={SubmitEventPage}
            ></Route>
        </Switch>
    )
}

export default Main
