import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}> Arca Projects </h1>
        <p className={styles.description}> We are a consulting firm specializing in web and mobile development, data-driven decision-making, and cybersecurity. With a strong background in delivering innovative and secure solutions, we have collaborated with industry leaders like CISCO, AMAZON, Tecnológico de Monterrey, DIF de Atizapán, and SMEs. Our expertise ensures tailored, cutting-edge technology solutions that drive business success.</p>
        
      </div>
      <img className={styles.heroImg} src = {getImageUrl("hero/ArcaLogo.png")} alt = "Hero"></img>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};

export default Hero;
