import SlideShow from '../Items/SlideShow';
import { Github, Globe, Award } from 'lucide-react';
import PropTypes from 'prop-types';

export default function ProjectCard({ project, index }) {
    const projectDemos = () => (
        <div className="project-demo-container rounded-4 overflow-hidden shadow-lg">
            <SlideShow images={project.demos} />
        </div>
    );

    const projectInfo = () => (
        <div className="project-info text-start text-white d-flex flex-column justify-content-center h-100 p-4">
            <h1 className="project-title fw-bold mb-3" style={{color: "#EB6620"}}>{project.projectName}</h1>
            <p className="project-description mb-4 fs-5">{project.description}</p>

            <h3 className="collaborators-title mt-3 mb-2 fs-4">Collaborators:</h3>
            <div className="d-flex flex-wrap gap-2 mb-4">
                {project.collaborators.map((collaborator, i) => (
                    <div
                        key={i}
                        className="collaborator-tag rounded-pill px-3 py-1 bg-white bg-opacity-10 hover-bg-opacity-20 transition-all"
                    >
                        {collaborator}
                    </div>
                ))}
            </div>

            <div className="project-links d-flex flex-wrap gap-3 mt-3">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link d-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-white bg-opacity-10 hover-bg-opacity-20 transition-all text-decoration-none"
                    >
                        <Github size={18} />
                        <span>GitHub</span>
                    </a>
                )}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link d-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-white bg-opacity-10 hover-bg-opacity-20 transition-all text-decoration-none"
                    >
                        <Globe size={18} />
                        <span>Live Demo</span>
                    </a>
                )}
                {project.devpost && (
                    <a
                        href={project.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link d-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-white bg-opacity-10 hover-bg-opacity-20 transition-all text-decoration-none"
                    >
                        <Award size={18} />
                        <span>DevPost</span>
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="project-card py-5" style={{marginBottom: "30vh"}}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    {index % 2 === 1 ? (
                        <>
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">{projectDemos()}</div>
                            <div className="col-lg-6 col-md-12">{projectInfo()}</div>
                        </>
                    ) : (
                        <>
                            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">{projectInfo()}</div>
                            <div className="col-lg-6 col-md-12">{projectDemos()}</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        projectName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        demos: PropTypes.array.isRequired,
        collaborators: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string,
        link: PropTypes.string,
        devpost: PropTypes.string
    }).isRequired,
    index: PropTypes.number.isRequired
};