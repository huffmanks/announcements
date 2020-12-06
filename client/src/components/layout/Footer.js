import { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul className="contact-links">
                    <li>
                        <a href="https://goo.gl/maps/ZcEbCWedKPo">
                            <div>429 North Church Street</div>
                            <div>Spartanburg, SC 29303-3663</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://connect.wofford.edu/myWofford/about/contact.aspx">
                            Email
                        </a>
                        | <a href="tel:864-597-4000">864-597-4000</a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/about/privacypolicy">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/administration/ada-compliance">
                            ADA Compliance/Accessibility
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/administration/title-ix">
                            Title IX/Sexual Harassment
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/administration/non-discrimination-statement">
                            Non-Discrimination Statement
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/sitemap">Sitemap</a>
                    </li>
                </ul>

                <ul className="primary-links">
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

                <ul className="secondary-links">
                    <li>
                        <a href="https://www.wofford.edu/admission/apply">
                            Apply
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/advancement/give-to-wofford">
                            Give
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/administration/human-resources/employment-opportunities">
                            Employment
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/academics/library">
                            Sandor Teszler Library
                        </a>
                    </li>
                </ul>

                <ul className="secondary-links">
                    <li>
                        <a href="https://my.wofford.edu/">myWofford</a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/about/news">
                            News + Wofford Today
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/admission/visit">
                            Visit
                        </a>
                    </li>
                    <li>
                        <a href="https://www.wofford.edu/administration">
                            Administration
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer
