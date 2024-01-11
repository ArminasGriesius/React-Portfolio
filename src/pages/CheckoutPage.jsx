import { NavLink } from "react-router-dom";
import css from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  return (
    <section className={css.checkoutPageContainer}>
      <div className={css.congrate}>
        <h1 className={css.congrateTitle}> Congratulations!! </h1>
        <h4>
          You have successfully bought nothing. This is not a real shopping
          page, so please don't ask for a refund.
        </h4>

        <div>
          <NavLink to="/" className={css.linkToInit}>
            Back to Home Page
          </NavLink>
        </div>
      </div>
    </section>
  );
}
