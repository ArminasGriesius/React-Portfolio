import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useAuth } from "../../store/AuthProvider";

function logoutFire() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      toast.success("You have logged out");
    })
    .catch((error) => {
      console.log("error ===", error);
    });
}

export default function Header() {
  const ctx = useAuth();
  console.log("ctx ===", ctx);
  return (
    <div className={css.headerContainer}>
      <header className={css.header}>
        <Link className={css.mainLink} to={"/"}>
          Breaking<strong>Shop</strong>
        </Link>

        <nav className={css.navLinks}>
          <NavLink className={css.navLink} to={"/"}>
            Home
          </NavLink>
          <NavLink className={css.navLink} to={"/about"}>
            About Us
          </NavLink>

          <NavLink className={css.navLink} to={"/store"}>
            Store
          </NavLink>

          {ctx.isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/add-item-page"}>
              Add Item
            </NavLink>
          )}
          {!ctx.isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/login-page"}>
              Login
            </NavLink>
          )}
          {!ctx.isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/register-page"}>
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
          {ctx.isUserLoggedIn && <p className={css.shownEmail}>{ctx.email}</p>}
        </nav>
      </header>
    </div>
  );
}
