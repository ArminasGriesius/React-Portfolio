import React from "react";
import css from "./ReactCourse.module.css";
import { NavLink } from "react-router-dom";

export default function ReactCourse() {
  return (
    <div className={css.reactContainer}>
      <h1 className={css.reactTitle}>REACT</h1>
      <section className={css.weeksList}>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/React.png"}
            alt="React"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 1</h4>
            <ul className={css.subjectList}>
              <li>Create React App</li>
              <li>Events</li>
              <li>States</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img className={css.weekImg} src={"src/fotos/Hook.png"} alt="Array" />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 2</h4>
            <ul className={css.subjectList}>
              <li>Use Effect, Fetch</li>

              <li>Props</li>
              <li>Module CSS</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/Formik.png"}
            alt="Formik"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 3</h4>
            <ul className={css.subjectList}>
              <li>Styled Components</li>
              <li>Formik</li>
              <li>ContextApi</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/Firebase.jpeg"}
            alt="Firebase"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 4</h4>
            <ul className={css.subjectList}>
              <li>Reducer</li>

              <li>FireBase</li>
              <li>Authorisation</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/Tailwind.png"}
            alt="Tailwind"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 5</h4>
            <ul className={css.subjectList}>
              <li>React Router Dom</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={css.aboutSubjectSection}>
        <img
          className={css.reactPageImg}
          src="src/fotos/PropsState.png"
          alt="Props and State"
        />
        <div className={css.aboutSubjectTextSide}>
          <h2 className={css.aboutSubjectTitle}>Props & State</h2>
          <p>
            Props and state are fundamental aspects of React. The ability to
            pass props between components serves as a valuable tool for creating
            efficient, readable, and easily reusable code. Although it presented
            some challenges initially, such as grasping how to use it, these
            challenges are still encountered from time to time. <br /> <br />
            Maintaining state information within a component unveils numerous
            possibilities for problem-solving. I frequently encountered tasks
            where I wasn't initially certain about the solution. However,
            through deeper exploration and research, I consistently discovered
            that utilizing state proved to be a viable solution for achieving
            the desired goal.
          </p>
        </div>
      </section>
      <section className={css.aboutSubjectSection}>
        <div className={css.aboutGridTextSide}>
          <h2 className={css.aboutSubjectTitle}>Firebase</h2>
          <p>
            We familiarized ourselves with Sass and Bootstrap frameworks,
            discovering more diverse, faster, and practical ways to design or
            pages. Additionally, we explored the Figma design tool, replicating
            designs placed in Figma on our pages and completing the final HTML
            and CSS project based on the learned topics.
          </p>
          <div>
            <NavLink
              to="https://github.com/ArminasGriesius/Arminas-Griesius-FEU8-baigiamasis-darbas"
              className={css.linkToGit}
            >
              REACT Final Work
            </NavLink>
          </div>
        </div>
        <img
          className={css.reactPageImg}
          src="src/fotos/Functions.png"
          alt="Functions"
        />
      </section>
    </div>
  );
}
