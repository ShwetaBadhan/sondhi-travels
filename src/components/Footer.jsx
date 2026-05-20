import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="footer-logo">✈️ Sondhi Travels</h2>
          <p>
            Sondhi Travels connects agents and travelers with a streamlined digital platform, delivering expertise in aviation, tourism, and luxury experiences.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/cancellation">Cancellation</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col contact-col">
          <h4>Contact Us</h4>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <p>
              Opp. State Bank of India,<br />
              Civil Lines, Jalandhar – 144001,<br />
              Punjab, India
            </p>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <p>
              <a href="tel:+911812236659">+91-181-2236659</a>,{" "}
              <a href="tel:+911812237659">2237659</a>
            </p>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <p>
              <a href="mailto:kuldip@sondhitravels.com">
                kuldip@sondhitravels.com
              </a>
            </p>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Sondhi Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;