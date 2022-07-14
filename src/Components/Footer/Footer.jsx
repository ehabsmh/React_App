import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className="pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h2>Location</h2>
              <h5 className="w-75 m-auto fw-normal">
                2215 John Daniel Drive Clark, MO 65243
              </h5>
            </div>
            <div className="col-md-4">
              <h2 className="text-center">AROUND THE WEB</h2>
              <div className="icons text-center">
                <a
                  href="#"
                  className={`${styles.btn_social} btn btn-outline-light`}
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>

                <a
                  href="#"
                  className={`${styles.btn_social} btn btn-outline-light`}
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className={`${styles.btn_social} btn btn-outline-light`}
                >
                  <i class="fa-brands fa-linkedin  "></i>
                </a>
                <a
                  href="#"
                  className={`${styles.btn_social} btn btn-outline-light`}
                >
                  <i class="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h2>ABOUT FREELANCER</h2>
              <h5 className="fw-normal">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </h5>
            </div>
          </div>
        </div>
      </footer>
      <div className={`${styles.copyright} text-white pt-3 pb-3`}>
        <h6 className="m-0 text-center fw-normal">
          Copyright © Your Website 2021
        </h6>
      </div>
    </>
  );
}
