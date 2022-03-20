import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p style={{ color: "#ffff", fontSize: "80%" }}>
                <b className="text-white">Hidropol</b> is an application for
                monitoring and controlling Polibatam IoT Based Hydroponic Farm{" "}
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Menu</h6>
              <ul class="footer-links text-white">
                <li>
                  <a href="controling.html" className=" text-white">
                    Controling
                  </a>
                </li>
                <li>
                  <a href="about.html" className=" text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="tips.html" className=" text-white">
                    Tips
                  </a>
                </li>
                <li>
                  <a href="calender.html" className=" text-white">
                    Calendar
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <a
                  href="mailto: hidropoladmin@gmail.com"
                  className=" text-white"
                >
                  Contact Us
                </a>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p
                class="copyright-text"
                style={{ color: "#ffff", fontSize: "85%", textAlign: "center" }}
              >
                Copyright &copy; 2022 All Rights Reserved by
                <a href="#" class="text-success">
                  {" "}
                  Hidropol
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
