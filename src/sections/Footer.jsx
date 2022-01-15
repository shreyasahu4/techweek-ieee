import React from "react";
import BrandName from "../components/BrandName";
import { useScroll } from "../components/useScroll";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { AiFillInstagram, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styles/sections/Footer.scss";
import { fromUp, fromDown } from "../utils/Animations";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className="footer-container" ref={element}>
      <div className="container">
        <div className="main-container">
          <motion.div
            className="news-letter"
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <BrandName isFooter={true} />
            <p>
              <a href ="/">Fill this form to attend our event.</a>
            </p>
            <div className="mail">
              <input type="email" placeholder="Please Enter Your Email" />
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </motion.div>
          <motion.div
            className="quick-links"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="touch"
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3>This website was developed by:</h3>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Arya Pandey</div>
                <div className="detail-content">
                  <a href="#">aryapandey194@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="touch-section">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="detail">
                <div className="detail-name">Shreya Sahu</div>
                <div className="detail-content">
                  <a href="#">shreyasahu4@gmail.com</a>
                </div>
              </div>
            </div>

            {/* <div className="touch-section">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="detail">
                <div className="detail-name">Phone</div>
                <div className="detail-content">
                  <a href="#">+91 7551231231</a>
                </div>
              </div>
            </div>

            <div className="touch-section">
              <div className="icon">
                <ImLocation />
              </div>
              <div className="detail">
                <div className="detail-name">Location</div>
                <div className="detail-content">
                  <a href="#"> 32 StreetOne Boards, GJ 560123</a>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
        <div className="copyright">
          <div className="copy">
            <p>Copyright c 2021. All Rights Reserved.</p>
          </div>
          <div className="icons">
            <div className="icon">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                {" "}
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
