import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Coding.module.css";

export default function Coding() {
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
    <div>
      <section className={css.codingContainer}>
        <h1 className={css.codingTitle}>Coding</h1>

        <div className={css.codingAbout}>
          <img
            className={css.myPhoto}
            src="src/fotos/MeCodingMain.png"
            alt="Arminas"
          />
          <div className={css.aboutCodingTopRight}>
            <h2 className={css.aboutCodingSectionTitle}>
              Let The Journey Begin
            </h2>

            <p>
              Fairly new to coding i find myself drawn into possibilities and
              creative ideas of this form of art. Eager to learn(as i know i've
              just touched the tip of the iceberg) i'm preparing to dive down
              the art of programming.
            </p>
            <div className={css.aboutCodingHash}>
              <h3 className={css.hashtag}>#</h3>
              <div>
                <h4 className={css.hashTitle}>My Portfolio</h4>
                <p>
                  The goal of this project was to learn the basics of HTML, CSS,
                  JS and React, develop a deeper skill of finding solutions to
                  the problems and all errors i face.
                </p>
              </div>
            </div>
            <div className={css.aboutCodingHash}>
              <h3 className={css.hashtag}>#</h3>
              <div>
                <h4 className={css.hashTitle}>Struggles</h4>
                <p>
                  As a freshly cooked programmer often i found myself
                  overwhealmed by the amount of files in one project or even
                  having no idea for even the simplest solutions. But this
                  project showed me that despite kindergarten style of code...
                  even I can somewhat understand it. And i know i will.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className={css.sliderTitle}>Before and after</h2>
      <section className={css.sliderContainer}>
        <Slider {...settings}>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/MeBeforeCoding.jpeg"
              alt="Me before coding"
            />
            <p className={css.sliderImgText}>Me before i started coding</p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/MeAfterCoding.jpeg"
              alt="Me after starting coding"
            />
            <p className={css.sliderImgText}>Me first week of coding</p>
          </div>
        </Slider>
      </section>
      <section className={css.codingContainer}>
        <h2 className={css.codintStartedTitle}>How it started</h2>

        <div className={css.howItStartedSection}>
          <div className={css.aboutCodingTopLeft}>
            <h2 className={css.aboutCodingSectionTitle}>CS50x</h2>
            <div>
              <p>
                Two years ago, when I was still a student of musical theatre, at
                the end of summer, a friend convinced me to try programming. I
                enrolled in the free CS50x courses offered by Harvard. As I
                began solving the course assignments, I quickly got immersed in
                them and felt a great sense of excitement. The moment when,
                after numerous unsuccessful attempts, I finally wrote a code
                that worked exactly as I wanted, brought me immense
                satisfaction. However, as the summer ended and the new academic
                year began, I realized that due to my demanding studies and lack
                of time, I wouldn't be able to continue this quality learning.
                Therefore, I decided that once I finish my musical theatre
                studies, I will return to programming, dedicating as much time
                to it as I truly want.
              </p>
            </div>
          </div>
          <img
            className={css.duckPhoto}
            src="src/fotos/Duck.jpeg"
            alt="CS50x"
          />
        </div>
      </section>
    </div>
  );
}
