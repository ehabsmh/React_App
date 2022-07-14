import React from "react";
import styles from "./Portfolio.module.css";

export default function Portfolio_Images(props) {
  let { img, title, id } = props.imgInfo;

  return (
    <>
      <div className="col-md-4 p-4">
        <div
          className={`${styles.image} box overflow-hidden rounded-3 position-relative`}
          onClick={() => {
            const imgElement = document.querySelector(".custom-img");
            imgElement.src = img;
            const h1LightBoxEle = document.querySelector(".lightBoxItem h1");
            h1LightBoxEle.textContent = title;
            let customDiv = document.getElementById("custom");
            customDiv.classList.replace("d-none", "d-flex");
            const lightBoxEle = document.querySelector(".lightBoxItem");
            console.log(lightBoxEle);
            lightBoxEle.classList.remove(`${styles.top}`);
          }}
        >
          <img src={img} className="w-100 " alt="" />
          <div
            className={`${styles.icons_layer} d-flex justify-content-center rounded-3 align-items-center`}
          >
            <i className="fa-solid fa-plus fa-5x text-white"></i>
          </div>
        </div>
      </div>
      <div
        id="custom"
        onClick={() => {
          let customDiv = document.getElementById("custom");
          customDiv.classList.replace("d-flex", "d-none");
        }}
        className={`d-none m-0 ${styles.custom} top-0 bottom-0 end-0 start-0 bg-black justify-content-center align-items-center position-fixed bg-opacity-25`}
      >
        <div
          className={`lightBoxItem d-flex rounded-3 justify-content-center align-items-center position-relative bg-white w-50 p-5`}
        >
          <div className="text-center">
            <h1
              className={` fw-bold ${styles.custom_text} ${styles.custom_color}`}
            >
              {title}
            </h1>
            <div className={`icon position-relative ${styles.lines} mb-4`}>
              <i
                className={`fa-solid fa-star mt-3 fs-2 ${styles.custom_color}`}
              ></i>
            </div>
            <img src={img} className="w-50 custom-img" alt="" />
            <p className="mt-4 mb-4 w-75 m-auto card-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button
              className="btn btn-success p-2"
              onClick={() => {
                let customDiv = document.getElementById("custom");
                customDiv.classList.replace("d-flex", "d-none");
              }}
            >
              <i className="fa-solid fa-xmark pe-2"></i>Close Window
            </button>
            <span
              className="position-absolute top-0 end-0"
              onClick={() => {
                let customDiv = document.getElementById("custom");
                customDiv.classList.replace("d-flex", "d-none");
              }}
            >
              <i
                className="fa-solid fa-xmark pe-2 fs-1 text-success py-2 pe-4"
                id="custom"
              ></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
