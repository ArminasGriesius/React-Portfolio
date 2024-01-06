import React from "react";
import css from "./GitCourse.module.css";
import { NavLink } from "react-router-dom";

export default function GitCourse() {
  return (
    <div className={css.gitContainer}>
      <h1 className={css.gitTitle}>Git</h1>
      <section className={css.weeksList}>
        <div className={css.singleBox}>
          <img className={css.weekImg} src={"src/fotos/Git.png"} alt="Git" />
          <div className={css.subjectInfo}>
            <h4 className={css.subjectTitle}>Week 1</h4>
            <ul className={css.subjectList}>
              <li>Push, pull requests</li>
              <li>Branches</li>
              <li>Merging</li>
              <li>Colaborators</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={css.gitSection}>
        <div>
          <img
            className={css.branchesImg}
            src="src/fotos/Branches.png"
            alt="Git branches"
          />
        </div>
        <div className={css.aboutGitTextSide}>
          <h2 className={css.aboutGitTitle}>Working Together</h2>
          <p>
            We gained familiarity with Git, understanding how to collaborate
            within a team on a shared project. This involved learning version
            control, effective branch management, and collaborative workflows
            using Git. We also delved into conflict resolution strategies,
            addressing issues that may arise during collaborative development in
            the Git platform.
          </p>
        </div>
      </section>
    </div>
  );
}
