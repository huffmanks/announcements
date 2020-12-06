import { Component } from 'react'
import Navbar from './components/layout/Navbar'
import Navigation from './components/layout/Navigation'
import Main from './components/Main'
import Footer from './components/layout/Footer'

import './css/App.css'

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Navigation />
                <Main />
                <Footer />
            </>
        )
    }
}

export default App
