import React from "react";
import styles from "./Portfolio.module.css";
import img1 from "./imgs/cabin.png";
import img2 from "./imgs/cake.png";
import img3 from "./imgs/circus.png";
import img4 from "./imgs/game.png";
import img5 from "./imgs/safe.png";
import img6 from "./imgs/submarine.png";
import Portfolio_Images from "./Portfolio_Images";

export default function Portfolio() {
  let allImgs = [
    { id: 0, img: img1, title: "LOG CABIN" },
    { id: 1, img: img2, title: "TASTY CAKE" },
    { id: 2, img: img3, title: "CIRCUS TENT" },
    { id: 3, img: img4, title: "CONTROLLER" },
    { id: 4, img: img5, title: "LOCKED SAFE" },
    { id: 5, img: img6, title: "SUBMARINE" },
  ];

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="text-center">
            <h1
              className={`fw-bold display-5 ${styles.custom_text} ${styles.custom_color}`}
            >
              Portfolio
            </h1>
            <div className={`icon position-relative ${styles.lines} mb-4`}>
              <i
                className={`fa-solid fa-star mt-3 fs-2 ${styles.custom_color}`}
              ></i>
            </div>
          </div>
          <div className="row g-5">
            {allImgs.map((img, i) => (
              <Portfolio_Images key={i} imgInfo={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
