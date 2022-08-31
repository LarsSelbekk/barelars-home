import React, { DragEventHandler } from "react"
import { Project } from "../ProjectOverview"
import styles from "./ProjectDisplay.module.css"
import useIsDarkMode from "../../hooks/useIsDarkMode"

export interface ProjectDisplayProps {
  project: Project
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ project }) => {
  const isDarkMode = useIsDarkMode()

  const onDragStart: DragEventHandler<HTMLAnchorElement> = (event) => {
    event.dataTransfer.setData("text/uri-list", project.path)
    event.dataTransfer.effectAllowed = "copyLink"
  }

  return (
    <a
      href={project.path}
      className={styles.ProjectDisplay}
      draggable={true}
      onDragStart={onDragStart}
    >
      <figure className={styles.ProjectDisplayContent} draggable={false}>
        <img
          src={isDarkMode ? project.darkIcon : project.lightIcon}
          alt={project.name}
          draggable={false}
        />
        <figcaption>{project.name}</figcaption>
      </figure>
    </a>
  )
}

export default ProjectDisplay
