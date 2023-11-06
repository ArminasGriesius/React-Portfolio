import css from "./AboutUsPage.module.css";

export default function AboutUsPage() {
  return (
    <div className="container">
      <h1 className={css.aboutUsTitle}>About Us</h1>
      <p className={css.aboutUsText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        corrupti aperiam tempora, aspernatur deserunt maiores.
      </p>
    </div>
  );
}
