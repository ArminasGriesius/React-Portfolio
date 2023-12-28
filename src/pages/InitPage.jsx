import css from "./InitPage.module.css";
export default function InitPage() {
  return (
    <div>
      <div className={css.initContainer}>
        <section className={css.initFirstSection}>
          <p className={css.initHeadline}>ARMINAS GRIESIUS</p>
          <h1 className={css.initTitle}>Portfolio Project</h1>
          <p>
            Welcome to my portfolio project, where I aim to demonstrate my
            FrontEnd development skills while further enhancing my proficiency
            in the field. In this project, my main objectives were to showcase
            my abilities by replicating an online shop, and to introduce myself
            along with my journey in life. This journey has led me to pursue a
            career as a full-time programmer. I hope you enjoy exploring my
            page, even though it may have a few imperfections.
          </p>
        </section>
      </div>
      <section className={css.usedToolsGridSection}>
        <div className={css.usedToolsFieldLeft}>
          <h2 className={css.usedToolsTitle}>Tools used</h2>
          <p>
            Creating this portfolio i tried to familiarise myself with as much
            tools as possible. I used React, Firebase, Formik, Yup, React Hot
            Toast, Module CSS, Font Awesome Icons, Slick Carousel.
          </p>
        </div>
        <div className={css.experienceFieldRight}>
          <img
            className={css.toolLogo}
            src="src/fotos/React.png"
            alt="React logo"
          />
          <img
            className={css.toolLogo}
            src="src/fotos/FirebaseLogo.jpeg"
            alt="Firebase logo"
          />
          <img
            className={css.toolLogo}
            src="src/fotos/Formik.png"
            alt="Formik logo"
          />
          <img
            className={css.toolLogo}
            src="src/fotos/YupLogo.png"
            alt="Yup logo"
          />
          <img
            className={css.toolLogo}
            src="src/fotos/HotToast.jpeg"
            alt="Hot Toast logo"
          />
          <img
            className={css.toolLogo}
            src="src/fotos/ModulesLogo.png"
            alt="Modules Css logo"
          />
          <img
            className={css.toolLogo}
            src="src/fotos/FontAwesome.png"
            alt="Font Awesome logo"
          />
          <img
            className={css.toolLogo}
            src="src/fotos/SlickLogo.png"
            alt="Slick logo"
          />
        </div>
      </section>
    </div>
  );
}
