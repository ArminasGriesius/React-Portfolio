import css from "./Music.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Music() {
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
      <div className={css.musicContainer}>
        <h1 className={css.musicTitle}>Music</h1>

        <section className={css.musicAbout}>
          <img
            className={css.myPhoto}
            src="src/fotos/meMusicMain.jpeg"
            alt="Arminas"
          />
          <div className={css.aboutMusicTopRight}>
            <h2 className={css.aboutMusicSectionTitle}>Born To Funk</h2>

            <div>
              <p>
                One of my biggest passions in life is music. As a guitar player
                for 14 years i've played with countless bands, artists and other
                projects.
              </p>
              <div className={css.aboutMusicHash}>
                <h3 className={css.hashtag}>#</h3>
                <div>
                  <h4 className={css.hashTitle}>IAMREY</h4>
                  <p>
                    Guitar player of a fairly new band that just recently
                    released it's first album "Iš apačios".
                  </p>
                </div>
              </div>
              <div className={css.aboutMusicHash}>
                <h3 className={css.hashtag}>#</h3>
                <div>
                  <h4 className={css.hashTitle}>MiDi Roko Operos</h4>
                  <p>
                    In 2017, I auditioned to play in the Rock Opera 'Riba,' and
                    after being accepted, I had the opportunity not only to meet
                    new amazing musicians with whom I still play music today but
                    also to try myself in a slightly different sphere—playing in
                    an opera act. I also secured a part for the 2019 Rock Opera
                    'Kai Tik Atrasiu'.
                  </p>
                </div>
              </div>
              <div className={css.aboutMusicHash}>
                <h3 className={css.hashtag}>#</h3>
                <div>
                  <h4 className={css.hashTitle}>Impro 241</h4>
                  <p>
                    As a guitarist for improvisational actors, my responsibility
                    is to create atmospheric music. I also participate in
                    various types of music-based games involving improvisation,
                    where I must use my quick thinking and creativity to come up
                    with music that aligns with the improvisational theme and
                    atmosphere. This challenge encourages me to adapt swiftly
                    and showcase my creativity in the moment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 className={css.sliderTitle}>Moments</h2>
      </div>

      <div className={css.sliderSection}>
        <Slider {...settings}>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/meMusic1.png"
              alt="IAMREY concert in Druskininkai"
            />
            <p className={css.sliderImgText}>IAMREY concert in Druskininkai</p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/meMusic2.png"
              alt="Midi Roko Operos Kai Tik Atrasiu"
            />
            <p className={css.sliderImgText}>
              Midi Roko Operos "Kai Tik Atrasiu"
            </p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/meMusic6.jpeg"
              alt="Horse playing near White Bridge"
            />
            <p className={css.sliderImgText}>Horse playing near White Bridge</p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/meMusic4.png"
              alt="IAMREY Live Session"
            />
            <p className={css.sliderImgText}>IAMREY Live Session</p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/meMusic5.png"
              alt="Concert Po Bažnyčios Skliautais"
            />
            <p className={css.sliderImgText}>
              Concert "Po Bažnyčios Skliautais"
            </p>
          </div>
          <div>
            <img
              className={css.sliderImg}
              src="src/fotos/meMusic3.jpeg"
              alt=""
            />
            <p className={css.sliderImgText}>July 6th concert in Alytus</p>
          </div>
        </Slider>
      </div>
      <section className={css.musicContainer}>
        <h2 className={css.iamreyTitle}>IAMREY</h2>
        <div className={css.iamreyYoutubeLink}>
          <div className={css.iframeYoutubeContainer}>
            <iframe
              className={css.iamreyVideo}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CapQ2ygfjg8?si=tIP9nUsOEoG1ugZj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className={css.aboutMusicTopRight}>
            <h2 className={css.aboutMusicSectionTitle}>
              "Iš Apačios" live session
            </h2>
            <div>
              <p>
                Live performance of our Single "Iš Apačios". Video made By
                VILNIUS TECH „LinkMenų fabrikas“.
              </p>
            </div>
          </div>
        </div>
        <div className={css.iamreySpotifyLink}>
          <div className={css.aboutMusicTopLeft}>
            <h2 className={css.aboutMusicSectionTitle}>First IAMREY Album</h2>
            <div>
              <p>
                Album contains of 11 songs, all of which are in Lithuanian. A
                taste of Rap, pop, Alternative and even Metal sounds.
              </p>
            </div>
          </div>
          <iframe
            src="https://open.spotify.com/embed/album/1vpV3zCaTsfscSUEZj7rEK?utm_source=generator"
            width="50%"
            height="353"
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
