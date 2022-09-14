import ProjectOverview from "../ProjectOverview"
import React, { useState } from "react"
import styles from "./FrontPage.module.css"
import CursedLars from "../../assets/Cursed_Lars.jpg"
import Lars from "../../assets/Lars.jpg"

export const FrontPage: React.FC = () => {
  const [isDropping, setIsDropping] = useState(false)

  const onDragOver: React.DragEventHandler = (event) => {
    if (event.dataTransfer.effectAllowed === "copyLink") {
      setIsDropping(true)
      event.preventDefault()
    }
  }

  const onDragLeave: React.DragEventHandler = (event) => {
    setIsDropping(false)
    event.preventDefault()
  }

  const onDrop: React.DragEventHandler = (event) => {
    if (event.dataTransfer.effectAllowed === "copyLink") {
      const url = event.dataTransfer
        .getData("text/uri-list")
        .split("\n\r")
        .filter((line) => (line.at(0) ?? "#") !== "#")
        .at(0)

      if (url) {
        setIsDropping(false)
        window.location.href = url
      }
    }
  }

  return (
    <>
      <h1>Lars Mitsem Selbekk</h1>
      <div
        className={styles.portraitWrapper}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <img
          src={
            isDropping
              ? CursedLars
              : Lars
          }
          alt="A portrait picture of Lars"
          className={styles.portrait}
        />
      </div>
      <ProjectOverview />
    </>
  )
}
