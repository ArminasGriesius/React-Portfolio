import { Link, NavLink } from "react-router-dom";
import css from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={css.footerContainer}>
      <footer className="container">
        <div className={css.footer}>
          <div className={css.sideLine}>
            <h4 className={css.footerTitle}>About us</h4>
            <div className={css.footerListSection}>
              <NavLink to="course-htmlandcss">HTML and CSS</NavLink>
              <NavLink to="course-git">Git</NavLink>
              <NavLink to="course-javascript">JavaScript</NavLink>
              <NavLink to="course-react">REACT</NavLink>
              <NavLink to="passion-music">Music</NavLink>
              <NavLink to="passion-acting">Acting</NavLink>
              <NavLink to="passion-coding">Coding</NavLink>
            </div>
          </div>
          <div className={css.sideLine}>
            <div className={css.footerListSection}>
              <h4 className={css.footerTitle}>Help center</h4>
              <a href="https://www.w3schools.com/">W3schools</a>
              <a href="https://stackoverflow.com/">StackOverflow</a>
              <a href="https://www.w3schools.com/">W3schools</a>
            </div>
          </div>
          <div>
            <h4 className={css.footerTitle}>Contact Us</h4>
            <p>arminas.griesius@gmail.com</p>
            <p>+37064822663</p>
          </div>
        </div>
        <div className={css.icons}>
          <a
            className={css.iconLinks}
            href="https://www.facebook.com/arminas.griesius.5"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className={css.iconLinks}
            href="https://www.linkedin.com/in/arminas-griesius-31b055295/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className={css.iconLinks}
            href="https://www.instagram.com/arminvangriesius/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </div>
  );
}
