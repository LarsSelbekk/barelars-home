import React from "react"
import {Project} from "../ProjectOverview"
import styles from "./ProjectDisplay.module.css"
import useIsDarkMode from "../../hooks/useIsDarkMode";

export interface ProjectDisplayProps {
    project: Project;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({project}) => {
    const isDarkMode = useIsDarkMode()
    return (
        <a href={project.path} className={styles.ProjectDisplay}>
            <figure className={styles.ProjectDisplayContent}>
                <img src={isDarkMode ? project.darkIcon : project.lightIcon} alt={project.name}/>
                <figcaption>{project.name}</figcaption>
            </figure>
        </a>
    )
}


export default ProjectDisplay
