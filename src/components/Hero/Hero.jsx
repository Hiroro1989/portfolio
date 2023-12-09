/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hiro</h1>
        <p className={styles.description}>
        I am a bilingual full-stack web developer with a passion for crafting immersive online experiences. Reach out if you'd like to learn more!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero's image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottmBlur} />
    </section>
  );
};
