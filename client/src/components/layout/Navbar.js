import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <header>
            <nav className="nav-desktop">
                <div className="logo">
                    <a href="https://www.wofford.edu/">
                        <img
                            src="https://www.wofford.edu/Wofford.edu/Images/development/logo.svg"
                            alt="Wofford logo"
                        />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="https://www.wofford.edu/about">About</a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/academics">
                            Academics
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/admission">
                            Admission
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/student-experiences">
                            Student Experiences
                        </a>
                    </li>
                    <li>
                        <a href="https://woffordterriers.com/">Athletics</a>
                    </li>
                </ul>
            </nav>
            <nav className="nav-mobile">
                <button
                    onClick={() => setToggle(!toggle)}
                    className={toggle ? 'menu close' : 'menu'}
                >
                    <div className="icon-bar"></div>
                    <div className="icon-bar"></div>
                    <div className="icon-bar"></div>
                </button>
                <div className="navbar">
                    <div className="mobile-logo">
                        <a href="https://www.wofford.edu/">
                            <img
                                src="https://www.wofford.edu/Wofford.edu/Images/development/logo-stacked.png"
                                alt="Wofford logo"
                            />
                        </a>
                    </div>

                    <ul
                        className={
                            toggle
                                ? 'nav-mobile-links'
                                : 'nav-mobile-links hidden'
                        }
                    >
                        <li>
                            <a href="https://www.wofford.edu/about">About</a>
                        </li>
                        <hr />
                        <li>
                            <a href="https://www.wofford.edu/academics">
                                Academics
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a href="https://www.wofford.edu/admission">
                                Admission
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a href="https://www.wofford.edu/student-experiences">
                                Student Experiences
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a href="https://woffordterriers.com/">Athletics</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
