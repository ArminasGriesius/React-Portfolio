import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useAuth } from "../../store/AuthProvider";
import { MdShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function logoutFire() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      toast.success("You have logged out");
    })
    .catch((error) => {
      toast.error(error);
    });
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ctx = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={css.headerContainer}>
      <header className={css.header}>
        <Link className={css.mainLink} to={"/"}>
          Breaking<strong>Shop</strong>
        </Link>

        <button onClick={toggleMenu} className={css.burger}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${css.navLinks} ${isMenuOpen ? css.overlayMenu : ""}`}>
          <NavLink onClick={closeMenu} className={css.navLink} to={"/"}>
            Home
          </NavLink>
          <NavLink onClick={closeMenu} className={css.navLink} to={"/about"}>
            About Me
          </NavLink>

          <NavLink onClick={closeMenu} className={css.navLink} to={"/store"}>
            Store
          </NavLink>

          {ctx.isUserLoggedIn && (
            <NavLink
              onClick={closeMenu}
              className={css.navLink}
              to={"/add-item-page"}
            >
              Add Item
            </NavLink>
          )}
          {!ctx.isUserLoggedIn && (
            <NavLink
              onClick={closeMenu}
              className={css.navLink}
              to={"/login-page"}
            >
              Login
            </NavLink>
          )}
          {!ctx.isUserLoggedIn && (
            <NavLink
              onClick={closeMenu}
              className={css.navLink}
              to={"/register-page"}
            >
              Register
            </NavLink>
          )}
          {ctx.isUserLoggedIn && (
            <NavLink
              onClick={logoutFire}
              className={css.navLink}
              to={"/login-page"}
            >
              Logout
            </NavLink>
          )}

          <NavLink
            onClick={closeMenu}
            className={`${css.navLink} ${css.cart}`}
            to={"/cart"}
          >
            <MdShoppingCart />
          </NavLink>

          {ctx.isUserLoggedIn && <p className={css.shownEmail}>{ctx.email}</p>}
        </nav>
      </header>
    </div>
  );
}
