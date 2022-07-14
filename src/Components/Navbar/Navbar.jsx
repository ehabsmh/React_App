import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  let navLis = document.querySelectorAll(".nav-item");
  navLis.forEach(function (link) {
    link.addEventListener("click", function () {
      navLis.forEach(function (otherLink) {
        otherLink.classList.remove("bg-success");
      });

      link.classList.add("bg-success");
    });
  });
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-dark text-dark`}>
        <div className="container">
          <Link className="navbar-brand text-white fs-2" to={"home"}>
            Start React
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 p-4 mb-lg-0">
              <li className="nav-item rounded-3">
                <Link
                  className={`${styles.nav_link} fs-5`}
                  aria-current="page"
                  to={"home"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item rounded-3">
                <Link className={`${styles.nav_link} fs-5`} to={"portfolio"}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item rounded-3">
                <Link className={`${styles.nav_link} fs-5`} to={"about"}>
                  About
                </Link>
              </li>
              <li className="nav-item rounded-3">
                <Link className={`${styles.nav_link} fs-5`} to={"contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
