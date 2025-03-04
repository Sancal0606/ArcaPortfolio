import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export default function Contact() {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")}></img>
            <a href= "mailto: carloz1.2.sanchez@gmail.com"> carloz1.2.sanchez@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")}></img>
            <a href= "https://www.linkedin.com/in/carlos-sanchez-calderon-614aa42a8/"> LinkedIn.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")}></img>
            <a href= "https://github.com/Sancal0606"> Github</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/docIcon.png")}></img>
            <a href= "https://drive.google.com/file/d/1UZ9g9F2sRIsHRlrTfHQH0rHQ_uSWhrXS/view?usp=sharing"> Curriculum</a>
        </li>
    </ul>
  </footer>
}
