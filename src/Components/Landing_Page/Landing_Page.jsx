import React from "react";
import styles from "./Landing.module.css";
import logo from "./imgs/avataaars.svg";
export default function Landing_Page() {
  return (
    <main className={styles.hero_bg}>
      <div className="image text-center">
        <img src={logo} className="w-25 mt-5" alt="" />
        <h1 className={`display-2 fw-bold text-white ${styles.custom_text} `}>
          Start React
        </h1>
        <div className={`icon position-relative ${styles.lines} mb-4`}>
          <i className="fa-solid fa-star mt-3 fs-2 text-white"></i>
        </div>
        <h4 className="text-white fw-normal">
          Graphic Artist - Web Designer - Illustrator
        </h4>
      </div>
    </main>
  );
}
