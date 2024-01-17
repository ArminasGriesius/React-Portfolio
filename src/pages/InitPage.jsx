import { useEffect, useState } from "react";
import css from "./InitPage.module.css";

export default function InitPage() {
  const [logoHeight, setLogoHeight] = useState("100%");

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      if (window.innerWidth >= 768) {
        setLogoHeight("45%");
      } else {
        setLogoHeight("");
      }
    } else {
      setLogoHeight("100%");
    }
  }, []);

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
        <div className={css.usedToolsField}>
          <div className={css.usedToolsFieldLeft}>
            <h2 className={css.usedToolsTitle}>Tools used</h2>
            <p>
              Creating this portfolio I tried to familiarise myself with as much
              tools as possible. I used React, Firebase, Formik, Yup, React Hot
              Toast, Module CSS, Font Awesome Icons, Slick Carousel.
            </p>
          </div>
          <div className={css.experienceFieldRight}>
            <img
              className={css.toolLogo}
              src="./fotos/React.png"
              alt="React logo"
              style={{ height: logoHeight }}
            />
            <img
              className={css.toolLogo}
              src="./fotos/FirebaseLogo.png"
              alt="Firebase logo"
              style={{ height: logoHeight }}
            />
            <img
              className={css.toolLogo}
              src="./fotos/Formik.png"
              alt="Formik logo"
              style={{ height: logoHeight }}
            />
            <img
              className={css.toolLogo}
              src="./fotos/YupLogo.png"
              alt="Yup logo"
              style={{ height: logoHeight }}
            />
            <img
              className={css.toolLogo}
              src="./fotos/HotToast.png"
              alt="Hot Toast logo"
              style={{ height: logoHeight }}
            />
            <img
              className={css.toolLogo}
              src="./fotos/ModulesLogo.png"
              alt="Modules Css logo"
              style={{ height: logoHeight }}
            />
            <img
              className={css.toolLogo}
              src="./fotos/FontAwesome.png"
              alt="Font Awesome logo"
              style={{ height: logoHeight }}
            />
            <img
              className={css.toolLogo}
              src="./fotos/SlickLogo.png"
              alt="Slick logo"
              style={{ height: logoHeight }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
