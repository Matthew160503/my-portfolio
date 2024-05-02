import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectList";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const ProjectPage = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
        <div className="container">
            <div className="project-details">
                <h1 className="section__title">{project.title}</h1>
                <img src={project.bigImg} alt={project.title} className="project-details__image"/>
                <div className="project-details__description">
                    <p className="subtitle">{project.skills}</p>
                </div>
                {project.gitHubLink && <BtnGitHub link={project.gitHubLink}/>}
            </div>
        </div>

    </main>
    );
}
 
export default ProjectPage;