import React from "react";
import css from "./HtmlAndCssCourse.module.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

export default function HtmlAndCssCourse() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "30px", fontSize: 40 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "30px",
          zIndex: "1",
          fontSize: 40,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={css.htmlCssContainer}>
      <h1 className={css.htmlCssTitle}>HTML & CSS</h1>
      <section className={css.weeksList}>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/HtmlCssFoto1.png"}
            alt="Item picture"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 1</h4>
            <ul className={css.subjectList}>
              <li>Intro to HTMl and CSS</li>
              <li>Semantic CSS</li>
              <li>Box Models</li>
              <li>Forms</li>
              <li>Background Positions</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/HtmlCssFoto2.png"}
            alt="Item picture"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 2</h4>
            <ul className={css.subjectList}>
              <li>FlexBox</li>
              <li>Grid</li>
              <li>Responsive</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/HtmlCssFoto3.png"}
            alt="Item picture"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 3</h4>
            <ul className={css.subjectList}>
              <li>Bootstrap</li>
              <li>Saas</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={css.flexGridSection}>
        <div className={css.sliderContainer}>
          <Slider {...settings}>
            <img
              className={css.sliderImg}
              src="src/fotos/FlexGame.png"
              alt="Flex game"
            />
            <img
              className={css.sliderImg}
              src="src/fotos/GridGame.png"
              alt="Grid game"
            />
          </Slider>
        </div>
        <div className={css.aboutFlexGridRight}>
          <h2 className={css.aboutFlexGridRightTitle}>Flex & Grid</h2>
          <p>
            One of the most enjoyable subjects in the courses was Flexbox and
            Grid. In my classes, we learned them through engaging coding games.
            Despite being a bit whimsical, these games provided a profound
            understanding of how these styling components function and revealed
            their versatile possibilities.
          </p>
        </div>
      </section>
      <section className={css.flexGridSection}>
        <div className={css.aboutFlexGridRight}>
          <h2 className={css.aboutFlexGridRightTitle}>
            Sass, Bootstrap and Figma
          </h2>
          <p>
            We familiarized ourselves with Sass and Bootstrap frameworks,
            discovering more diverse, faster, and practical ways to design or
            pages. Additionally, we explored the Figma design tool, replicating
            designs placed in Figma on our pages and completing the final HTML
            and CSS project based on the learned topics.
          </p>
          <div>
            <NavLink
              to="https://github.com/ArminasGriesius/Arminas_Griesius_html_css_darbas.git"
              className={css.linkToGit}
            >
              HTML&CSS Final Work
            </NavLink>
          </div>
        </div>
        <div className={css.sliderContainer}>
          <Slider {...settings}>
            <img
              className={css.sliderImg}
              src="src/fotos/Scss.png"
              alt="SCSS"
            />
            <img
              className={css.sliderImg}
              src="src/fotos/Bootstrap.png"
              alt="Bootstrap Bill"
            />
            <img
              className={css.sliderImg}
              src="src/fotos/Figma.png"
              alt="Figma"
            />
          </Slider>
        </div>
      </section>
    </div>
  );
}
