import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Acting.module.css";

export default function Acting() {
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
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
      <section className={css.actingContainer}>
        <h1 className={css.actingTitle}>Acting</h1>

        <div className={css.actingAbout}>
          <img
            className={css.myPhoto}
            src="./fotos/meActingMain.png"
            alt="Arminas"
          />
          <div className={css.aboutActingTopRight}>
            <h2 className={css.aboutActingSectionTitle}>Musical Theater</h2>

            <p>
              As a Musical Theater Bachelor's degree holder, I've merged my two
              greatest passions—music and acting. In musical theater, I not only
              portray characters but also handle singing roles. While initially
              viewing myself more as an instrumentalist than a singer, this
              challenge proved to be a driving force for personal and creative
              growth. It significantly expanded my creative thinking, a skill I
              now apply beyond just music and theater.
            </p>
            <div className={css.aboutActingHash}>
              <h3 className={css.hashtag}>#</h3>
              <div>
                <h4 className={css.hashTitle}>Musical "Mythos"</h4>
                <p>
                  A production based on the Broadway musical "Hadestown", which
                  retells the Greek mythology tale about Orpheus and Eurydice in
                  which i played the main role of Orpheus.
                </p>
              </div>
            </div>
            <div className={css.aboutActingHash}>
              <h3 className={css.hashtag}>#</h3>
              <div>
                <h4 className={css.hashTitle}>"Imaginacijaus Theater"</h4>
                <p>
                  A theater oriented for kids in which i play a number of roles
                  and also produce music for the plays and audiotales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className={css.sliderTitle}>Moments</h2>
      </section>

      <section className={css.sliderSection}>
        <Slider {...settings}>
          <div>
            <img
              className={css.sliderImg}
              src="./fotos/MeActing1.png"
              alt="Musical Mythos"
            />
            <p className={css.sliderImgText}>Moment from musical "Mythos"</p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="./fotos/meActing5.png"
              alt="Flowers Musical Mythis"
            />
            <p className={css.sliderImgText}>
              Magic flowers in musical "Mythos"
            </p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="./fotos/MeActing4.png"
              alt="Play for kids"
            />
            <p className={css.sliderImgText}>
              "Imaginacijaus Theater" play for kids
            </p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="./fotos/MeActing2.png"
              alt="Moustache man"
            />
            <p className={css.sliderImgText}>Epic moustache</p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="./fotos/MeActing3.png"
              alt="Playing santa"
            />
            <p className={css.sliderImgText}>Most important role of Santa</p>
          </div>
        </Slider>
      </section>
      <section className={css.actingContainer}>
        <h2 className={css.imaginacijusTitle}>Imaginacijaus Theater</h2>

        <div className={css.imaginacijusSpotifyLink}>
          <div className={css.aboutActingTopLeft}>
            <h2 className={css.aboutActingSectionTitle}>
              "Kalėdinis nuotykis"
            </h2>
            <p>
              Christmas based act written last year turned into an audiotale for
              this holiday season. A full tale of two elves that are trying to
              save christmas(not from Grinch). Along with two original christmas
              songs.
            </p>
          </div>
          <iframe
            src="https://open.spotify.com/embed/album/6LTusJW7xHQ4f4LdS0wYET?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
