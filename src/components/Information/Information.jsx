import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Information.module.css";

const Information = ({info: {Name, li1,li2,li3, Drive, Image}}) => {
    return (
        <section className={styles.container} id="information">
            
            <div className={styles.content}>
                <h1 className={styles.title}>{Name}</h1>
            </div>

            <div className={styles.container2} id="Body">
                <img src={getImageUrl({Image})} alt="information/diffod.png" className={styles.image}></img>
                <ul className={styles.unorderedList}>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                </ul>
            </div>
            
        </section>
    ); 
};

export default Information;