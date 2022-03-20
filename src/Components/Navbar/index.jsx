import React from "react";
import logoPol from "../../Assets/images/logopol.png";
import logoHidro from "../../Assets/images/logo2.png";

const Navbar = () => {
  return (
    <div id="wrapper">
      <nav class="fixed-top navbar navbar-expand-lg navbar-light px-5 shadow">
        <div class="container-fluid">
          <div className="logo1">
            <a class="navbar-brand" href="#">
              <img
                src={logoPol}
                width="50"
                height="50"
                class="d-inline-block align-top"
                alt=""
              />
            </a>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto text-center">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/controlling">
                  Controlling
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tips.html">
                  Tips
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="calender.html">
                  Calendar
                </a>
              </li>
            </ul>
          </div>

          <div className="logo2">
            <img
              src={logoHidro}
              width="50"
              height="50"
              class="d-inline-block align-top ml-3"
              alt=""
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
