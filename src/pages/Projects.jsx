import Project from "../components/project/Project";

import {projects} from '../helpers/projectList';

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="section__title margin-title">Projects</h2>
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (<Project key={index} title={project.title} img={project.img} id={index} />)
                    })}
                </ul>
            </div>
        </main>
    );
}
 
export default Projects;