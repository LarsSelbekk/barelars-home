import React from "react"
import ProjectDisplay from "../ProjectDisplay"
import projects from "../../projects.json"
import styles from "./ProjectOverview.module.css"

export interface Project {
    name: string;
    path: string;
    lightIcon: string;
    darkIcon: string;
}

const ProjectOverview: React.FC = () => {
    return (
        <ul className={styles.ul}>
            {projects.map(project => (
                <li className={styles.li} key={project.name}>
                    <ProjectDisplay project={project}/>
                </li>)
            )}
        </ul>)
}

export default ProjectOverview
