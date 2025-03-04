import React from "react";
import projects from "../../data/projects.json";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <iframe className={styles.video}
        
        src="https://www.youtube.com/embed/PxMMX5Qe8eI?si=sYCTubsikup4UOXb"
      ></iframe>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}></ProjectCard>;
        })}
      </div>
    </section>
  );
};

export default Project;
