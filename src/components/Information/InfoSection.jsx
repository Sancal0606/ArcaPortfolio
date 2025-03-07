import React from "react";
import infos from '../../data/information.json'
import Information from "../../components/Information/Information"; // Remove this line
import styles from "./InfoSection.module.css";

function InfoSection() {
  return (
    <div className={styles.container}>
      {infos.map((info, id) => {
        return <Information key={id} info={info}></Information>;
      })}
    </div>
  );
}

export default InfoSection;
