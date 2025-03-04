import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id = "about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/controller.jpg")} alt='me programming' className={styles.aboutImage}></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt = "cursor"></img>
                <div className={styles.aboutItemText}>
                    <h3>Game Designer</h3>
                    <p>
                        I'm a game designer who tries to archieve the best player experience.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt = "cursor"></img>
                <div className={styles.aboutItemText}>
                    <h3>Programmer</h3>
                    <p>
                        I'm a programmer that focus on clean and fast code.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt = "cursor"></img>
                <div className={styles.aboutItemText}>
                    <h3>Front and Back developer</h3>
                    <p>
                        I'm a front and back end developer with experience in building responisive sites
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About
