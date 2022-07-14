import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <>
      <section id="about" className="p-5 ">
        <div className="container">
          <div className="text-center">
            <h1
              className={`mt-5 fw-bold display-5 ${styles.custom_text} ${styles.custom_color}`}
            >
              About
            </h1>
            <div className={`icon position-relative ${styles.lines} mb-4`}>
              <i
                className={`fa-solid fa-star mt-3 fs-2 ${styles.custom_color}`}
              ></i>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <p className={`${styles.about_desc}`}>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className={`${styles.about_desc}`}>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
