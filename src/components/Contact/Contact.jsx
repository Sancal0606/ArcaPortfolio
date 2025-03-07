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
            <a href= "mailto: arcaprojectsw@gmail.com">  arcaprojectsw@gmail.com</a>
        </li>
        
    </ul>
  </footer>
}
