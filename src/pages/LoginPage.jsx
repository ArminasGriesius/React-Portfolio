import LoginForm from "../components/auth/LoginForm";
import { useAuth } from "../store/AuthProvider";
import css from "./LoginPage.module.css";
export default function LoginPage() {
  const ctx = useAuth();
  console.log(ctx.isUserLoggedIn);
  console.log("ctx ===", ctx);
  return (
    <div className="container">
      <h1 className={css.loginPageTitle}>Login Page</h1>
      <section className={css.loginSection}>
        <LoginForm />
        <div className={css.loginPageText}>
          <h4>Already a member? Login and enjoy! </h4>
          <ul>
            <li>
              <p>Create your own item</p>
            </li>
            <li>
              <p>Manage your items</p>
            </li>
            <li>
              <p>Shop for items</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
