import React from 'react'
import styles from './Footer.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faLinkedin, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.about}>
                    <h4>Solo, Inc</h4>
                    <ul className={styles.about__lists}>
                        <li>Purok 4, Brgy. Sara</li>
                        <li>9200, Iligan City</li>
                        <li>Call: 0926 833 9430</li>
                    </ul>
                    <div className={styles.about__social}>
                        <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={styles.quickLinks}>
                    <h4>Quick Links</h4>
                    <ul className={styles.quick__lists}>
                        <li>Development</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Map</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className={styles.quickLinks}>
                    <h4>Quick Links</h4>
                    <ul className={styles.quick__lists}>
                        <li>Development</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Map</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className={styles.newsletter}>
                    <h4>Newsletter</h4>
                    <p>Lorem ipsum dolor sit amet consectetur <br></br> adipisicing elit. Eos, ratione.</p>
                    <form className={styles.newsletter__form}>
                        <input type="email" placeholder="Enter email"/>
                        <div>
                        <button type="submit">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <footer>
                <p>All rights reserved 2020</p>
            </footer>
        </div>
    )
}

export default Footer
