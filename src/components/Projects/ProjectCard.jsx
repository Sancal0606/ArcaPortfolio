import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, li1,li2,li3, skills, demo, source },
}) => {
  return (
    <div className={styles.container} onClick={console.log("hola")}>
      <img
        src={getImageUrl(imageSrc)}
        alt={imageSrc}
        className={styles.image}
      ></img>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.unorderedList}>
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
      </ul>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Info
        </a>
       
      </div>
    </div>
  );
};

export default ProjectCard;
