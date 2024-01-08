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
              <Link to="https://www.w3schools.com/" target="_blank">
                W3schools
              </Link>
              <Link to="https://stackoverflow.com/" target="_blank">
                StackOverflow
              </Link>
              <Link to="https://www.geeksforgeeks.org/" target="_blank">
                Geeks For Geeks
              </Link>
            </div>
          </div>
          <div>
            <h4 className={css.footerTitle}>Contact Us</h4>
            <p>arminas.griesius@gmail.com</p>
            <p>+37064822663</p>
          </div>
        </div>
        <div className={css.icons}>
          <Link
            className={css.iconLinks}
            to="https://www.facebook.com/arminas.griesius.5"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            className={css.iconLinks}
            to="https://www.linkedin.com/in/arminas-griesius-31b055295/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            className={css.iconLinks}
            to="https://www.instagram.com/arminvangriesius/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
