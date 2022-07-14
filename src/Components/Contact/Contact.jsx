import React from "react";
import styles from "./contactUs.module.css";
export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-white text-dark mt-5">
        <div className="container">
          <div className="title text-center">
            <h2>Contact me</h2>
            <div className={`icon position-relative ${styles.lines} mb-4`}>
              <i
                className={`fa-solid fa-star mt-3 fs-2 ${styles.custom_color}`}
              ></i>
            </div>
          </div>
          <div className="mb-3 w-50 m-auto">
            <input
              type="text"
              className="form-control border-top-0 border-end-0 border-start-0"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="mb-3 w-50 m-auto">
            <input
              type="text"
              className="form-control border-top-0 border-end-0 border-start-0"
              id="exampleFormControlInput1"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3 w-50 m-auto">
            <input
              type="number"
              className="form-control border-top-0 border-end-0 border-start-0"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3 w-50 m-auto">
            <div class="mb-3">
              <textarea
                class="form-control border-top-0 border-end-0 border-start-0"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>{" "}
            <button
              className={`${styles.submitBtn} mb-3 m-auto btn btn-lg btn-primary`}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
