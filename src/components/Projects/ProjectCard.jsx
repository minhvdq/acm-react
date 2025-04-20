import SlideShow from '../Items/SlideShow';
import { Github, Globe, Award } from 'lucide-react';

export default function Projectcard({ project, index }) {
    const projectDemos = () => (
        <div className="project-demo-container">
            <SlideShow images={project.demos} />
        </div>
    );

    const projectInfo = () => (
        <div className="project-info text-start text-white d-flex flex-column justify-content-center h-100">
            <h1 className="project-title" style={{color: "#EB6620"}}>{project.projectName}</h1>
            <p className="project-description mb-2">{project.description}</p>

            <h3 className="collaborators-title mt-2 mb-1">Collaborators:</h3>
            <div className="d-flex flex-wrap gap-2 mb-2">
                {project.collaborators.map((collaborator, i) => (
                    <div
                        key={i}
                        className="collaborator-tag rounded-pill px-3 py-1"
                    >
                        {collaborator}
                    </div>
                ))}
            </div>

            <div className="project-links d-flex flex-wrap gap-3 mt-2">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link d-flex align-items-center gap-2 px-3 py-1 rounded"
                    >
                        <Github size={16} />
                        <span>GitHub</span>
                    </a>
                )}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link d-flex align-items-center gap-2 px-3 py-1 rounded"
                    >
                        <Globe size={16} />
                        <span>Live Demo</span>
                    </a>
                )}
                {project.devpost && (
                    <a
                        href={project.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link d-flex align-items-center gap-2 px-3 py-1 rounded"
                    >
                        <Award size={16} />
                        <span>DevPost</span>
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="project-card" style={{marginBottom: "50vh"}}>
            <div className="container" >
                <div className="row g-4 align-items-center">
                    {index % 2 === 1 ? (
                        <>
                            <div className="col-lg-6 col-md-12 mb-3 mb-lg-0">{projectDemos()}</div>
                            <div className="col-lg-6 col-md-12">{projectInfo()}</div>
                        </>
                    ) : (
                        <>
                            <div className="col-lg-6 col-md-12 mb-3 mb-lg-0">{projectInfo()}</div>
                            <div className="col-lg-6 col-md-12">{projectDemos()}</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}