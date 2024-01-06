import React from "react";
import css from "./JavascriptCourse.module.css";
import { NavLink } from "react-router-dom";

export default function JavascriptCourse() {
  return (
    <div className={css.javascriptContainer}>
      <h1 className={css.javascriptTitle}>JavaScript</h1>
      <section className={css.weeksList}>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/ForLoop.png"}
            alt="For Loop"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 1</h4>
            <ul className={css.subjectList}>
              <li>Nums, strings, conditionals</li>
              <li>Switch Functions</li>
              <li>Arrow Functions</li>
              <li>Loops</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img
            className={css.weekImg}
            src={"src/fotos/Array.png"}
            alt="Array"
          />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 2</h4>
            <ul className={css.subjectList}>
              <li>Arrays</li>
              <li>Objects</li>
              <li>ForEach, Map, Filter</li>
              <li>Sort, Reduce</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img className={css.weekImg} src={"src/fotos/Form.png"} alt="Form" />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 3</h4>
            <ul className={css.subjectList}>
              <li>Atributes, ClassLists, Events</li>
              <li>Functional Forms</li>
              <li>Forms Validation</li>
              <li>Modules</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img className={css.weekImg} src={"src/fotos/Oop.png"} alt="OOP" />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 4</h4>
            <ul className={css.subjectList}>
              <li>OOP</li>
              <li>Async</li>
              <li>Catch, Fetch, Post, Delete</li>
            </ul>
          </div>
        </div>
        <div className={css.singleBox}>
          <img className={css.weekImg} src={"src/fotos/Crud.png"} alt="Crud" />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 5</h4>
            <ul className={css.subjectList}>
              <li>Axios</li>
              <li>Local Storage</li>
              <li>Async, Await</li>
              <li>CRUD</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={css.subjectSection}>
        <img
          className={css.jsPageImg}
          src="src/fotos/ForEach.jpeg"
          alt="ForEach loop"
        />
        <div className={css.subjectTextSide}>
          <h2 className={css.subjectTitle}>Loops</h2>
          <p>
            The subject that probably caused the most frustration for my
            computer was loops. Countless infinite loops have taught me to tread
            carefully while handling them. Exploring various loop types expanded
            my understanding of their capabilities. I particularly favor using
            map, forEach, and other higher-order functions when working with
            arrays. These functions not only simplify the syntax but also
            provide a more expressive and functional approach to iterating
            through arrays.
          </p>
        </div>
      </section>
      <section className={css.secondSubjectSection}>
        <div className={css.subjectTextSide}>
          <h2 className={css.subjectTitle}>Functions</h2>
          <p>
            We familiarized ourselves with Sass and Bootstrap frameworks,
            discovering more diverse, faster, and practical ways to design or
            pages. Additionally, we explored the Figma design tool, replicating
            designs placed in Figma on our pages and completing the final HTML
            and CSS project based on the learned topics.
          </p>
          <div>
            <NavLink
              to="https://github.com/ArminasGriesius/Arminas_Griesius_JS_Exam.git"
              className={css.linkToGit}
            >
              JavaScript Final Work
            </NavLink>
          </div>
        </div>
        <img
          className={css.jsPageImg}
          src="src/fotos/Functions.png"
          alt="Functions"
        />
      </section>
    </div>
  );
}
