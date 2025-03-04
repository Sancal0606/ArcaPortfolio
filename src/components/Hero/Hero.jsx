import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I'm Carlos</h1>
        <p className={styles.description}>I'm an indie game developer who is passionate about creating games and finding new ways to tell a story.</p>
        <a className={styles.contactBtn} href="mailto:carloz1.2.sanchez@gmail.com"> Contact me</a>
        <a className={styles.contactBtn} href="https://drive.google.com/file/d/1UZ9g9F2sRIsHRlrTfHQH0rHQ_uSWhrXS/view?usp=sharing"> Curriculum</a>
      </div>
      <img className={styles.heroImg} src = {getImageUrl("hero/profile.png")} alt = "Hero"></img>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};

export default Hero;
