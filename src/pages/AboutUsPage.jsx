import { Link, NavLink } from "react-router-dom";
import css from "./AboutUsPage.module.css";

export default function AboutUsPage() {
  return (
    <div>
      <section className={css.aboutUsContainer}>
        <h1 className={css.aboutUsTitle}>About Us</h1>
        <p className={css.aboutUsText}>
          Hello, my name is Arminas Griesius <br />
          And i aspire to be a front end engineer
        </p>
        <div className={css.myAbout}>
          <img
            className={css.myPhoto}
            src="src/fotos/meMainMain.png"
            alt="Arminas"
          />
          <div className={css.aboutMeTopRight}>
            <p className={css.textOverTitle}>FRONTEND DEVELOPER</p>
            <h2 className={css.myName}>Arminas Griesius</h2>
            <div className={css.aboutMeHash}>
              <h3 className={css.hashtag}>#</h3>
              <div>
                <h4 className={css.hashTitle}>Education</h4>
                <p>
                  Dual-degree holder in Business(Mykolas Romeris University) and
                  Musical Theater(Vilnius College) with a passion for creativity
                  and technology.
                </p>
              </div>
            </div>
            <div className={css.aboutMeHash}>
              <h3 className={css.hashtag}>#</h3>
              <div>
                <h4 className={css.hashTitle}>Experience</h4>
                <p>
                  Two years of experience working as an Export Sales Coordinator
                  in one of the largest food manufacturing companies in
                  Lithuania - KG Group, in which I gained valuable insights into
                  effective teamwork, working according to a set schedule, and
                  thriving under pressure. These experiences have equipped me
                  with the ability to collaborate seamlessly within a team and
                  perform efficiently even in high-pressure environments.
                </p>
              </div>
            </div>
            <div className={css.aboutMeHash}>
              <h3 className={css.hashtag}>#</h3>
              <div>
                <h4 className={css.hashTitle}>Freelance</h4>
                <p>
                  As I strive to remain productive, I dedicate my free time to
                  musical collaborations with various artists, offer private
                  guitar lessons, and engage in acting roles for various plays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={css.experienceFieldContainer}>
        <img
          className={css.experienceFieldImg}
          src="src/fotos/codingBackground.avif"
          alt="Coding background"
        />
        <div className={css.experienceFieldGrid}>
          <div className={css.experienceFieldLeft}>
            <p className={css.textOverTitle}>CODE ACADEMY COURSES</p>
            <h2 className={css.courseName}>FrontEnd Serverless</h2>
            <p>
              560 hours of intense proggraming in which I sharpened my skills in
              HTML and CSS, Git JavaScript and React
            </p>
          </div>
          <div className={css.experienceFieldRight}>
            <h2 className={css.experienceFieldRightTitle}>
              I have learned <br /> (press logo)
            </h2>
            <div className={css.learnedListFlex}>
              <NavLink className={css.logosLink} to="/course-htmlandcss">
                <img
                  className={css.logos}
                  src="src/fotos/logoHtmlCss.png"
                  alt="HTML and CSS logo"
                />
              </NavLink>
              <div>
                <h4 className={css.learnedListTitle}>HTML and CSS</h4>
                <p>120 hours</p>
              </div>
            </div>
            <div className={css.learnedListFlex}>
              <NavLink className={css.logosLink} to="/course-git">
                <img
                  className={css.logos}
                  src="src/fotos/logoGit.png"
                  alt="Git logo"
                />
              </NavLink>
              <div>
                <h4 className={css.learnedListTitle}>Git</h4>
                <p>40 hours</p>
              </div>
            </div>
            <div className={css.learnedListFlex}>
              <NavLink className={css.logosLink} to="/course-javascript">
                <img
                  className={css.logos}
                  src="src/fotos/logoJs.jpeg"
                  alt="JavaScript logo"
                />
              </NavLink>
              <div>
                <h4 className={css.learnedListTitle}>Javascript</h4>
                <p>200 hours</p>
              </div>
            </div>
            <div className={css.learnedListFlex}>
              <NavLink className={css.logosLink} to="/course-react">
                <img
                  className={css.logos}
                  src="src/fotos/logoReact.png"
                  alt="React logo"
                />
              </NavLink>
              <div>
                <h4 className={css.learnedListTitle}>React</h4>
                <p>200 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={css.aboutUsContainer}>
        <h2 className={css.passionTitle}>My Passions</h2>
        <div className={css.passionBoxesGrid}>
          <NavLink to="/passion-music">
            <div className={`${css.passionBox} ${css.passionImg1}`}>
              <h4 className={css.passionSubject}>MUSIC</h4>
            </div>
          </NavLink>
          <NavLink to="/passion-acting">
            <div className={`${css.passionBox} ${css.passionImg2}`}>
              <h4 className={css.passionSubject}>ACTING</h4>
            </div>
          </NavLink>
          <NavLink to="/passion-coding">
            <div className={`${css.passionBox} ${css.passionImg3}`}>
              <h4 className={css.passionSubject}>CODING</h4>
            </div>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
