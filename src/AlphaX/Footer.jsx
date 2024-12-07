import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faCoffee,
  faXTwitter,
  faTruckFast,
  faTelegram,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <section className="quote">
          <h1>Let’s create a measurable impact on your business.</h1>

          <button className="quoteButton1">
            {" "}
            <Modal />{" "}
          </button>
        </section>
      </div>
      <section className="bottomFooter">
        <div className="row">
          <div className="col-3 footerLogo">
            <img
              src="https://th.bing.com/th/id/OIP.14wEUWaBPPcTMwkYc4vNpgHaE8?rs=1&pid=ImgDetMain"
              width="50%"
              alt="df"
            />
            <div className="socialMedia">
              <a href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                  alt=""
                  width={"50%"}
                />
              </a>
              <a href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png"
                  alt=""
                  width={"50%"}
                />
              </a>
              <a href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
                  alt=""
                  width={"50%"}
                />
              </a>
              <a href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  alt=""
                  width={"50%"}
                />
              </a>
              <a href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png"
                  alt=""
                  width={"50%"}
                />
              </a>
            </div>
            <div className="address">
              <h5>
                © AlphaX innovations. <br />
                All rights reserved 2023
              </h5>
            </div>
          </div>

          <div className="col-2 links services">
            <h4>Services</h4>
            <ul>
              <li>
                <Link>Design</Link>
              </li>
              <li>
                <Link>Technology</Link>
              </li>
              <li>
                <Link>Neuromarketing</Link>
              </li>
              <li>
                <Link>Digital Marketing</Link>
              </li>
            </ul>
          </div>
          <div className="col-2 links about">
            <h4>About</h4>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>

              <li>
                <Link>Team</Link>
              </li>
              <li>
                <Link>Career</Link>
              </li>
              <li>
                <Link>Clients</Link>
              </li>
            </ul>
          </div>
          <div className="col-2 links quicklinks">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link>Work</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Reach Us</Link>
              </li>
              <li>
                <Link>Site Map</Link>
              </li>
            </ul>
          </div>
          <div className="col-3 links quicklinks">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms of use</Link>
              </li>
              <li>
                <Link>Refund Policy</Link>
              </li>
              <li>
                <Link>Copyrights Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
