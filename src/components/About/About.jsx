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
            <h3>Web Development</h3>
            <p>
              Equipped with hands-on experience in crafting end-to-end web
              solutions, I specialize in delivering seamless and innovative user
              experiences. My proficiency extends to both front-end and back-end
              development, allowing me to create robust and scalable
              applications.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
          <div className={styles.aboutItemText}>
            {/* about sec2 */}
            <h3>Bilingual Proficiency</h3>
            <p>
              Fluent in both English and Japanese, I bring a unique cultural
              perspective to my work. This linguistic versatility enhances my
              ability to communicate effectively and work seamlessly in diverse
              and global teams.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
          <div className={styles.aboutItemText}>
            {/* about sec3 */}
            <h3>Team Collaboration</h3>
            <p>
              Recognized as a dedicated team player, I thrive in collaborative
              environments where creative ideas converge to drive projects
              forward. My communication skills, coupled with a proactive
              attitude, contribute to fostering a positive and efficient work
              atmosphere.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
