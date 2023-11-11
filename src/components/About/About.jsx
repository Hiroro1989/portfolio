import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="sitting with laptop"
          className={styles.aboutImage}
        />
      </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="coursor icon" />
          <div className={styles.aboutItemText}>
            {/* about sec 1 */}
            <h3>Frontend developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laboriosam corrupti quod ullam autem suscipit eveniet earum sed
              ut! Eaque aliquid at officiis doloribus est saepe. Dolorum omnis
              autem cum?
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
          <div className={styles.aboutItemText}>
            {/* about sec2 */}
            <h3>Backend developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laboriosam corrupti quod ullam autem suscipit eveniet earum sed
              ut! Eaque aliquid at officiis doloribus est saepe. Dolorum omnis
              autem cum?
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
          <div className={styles.aboutItemText}>
            {/* about sec3 */}
            <h3>something</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              laboriosam corrupti quod ullam autem suscipit eveniet earum sed
              ut! Eaque aliquid at officiis doloribus est saepe. Dolorum omnis
              autem cum?
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
