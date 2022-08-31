import ProjectOverview from "../ProjectOverview";
import React from "react";
import styles from "./FrontPage.module.css";

export const FrontPage: React.FC = () => {
  return (
    <>
      <h1>Lars Mitsem Selbekk</h1>
      <div className={styles.portraitWrapper}>
        <img
          src="https://avatars.githubusercontent.com/u/6224384?v=4"
          alt="A portrait picture of Lars"
          className={styles.portrait}
        />
      </div>
      <ProjectOverview />
    </>
  );
};
