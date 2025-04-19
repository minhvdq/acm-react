import SlideShow from '../Items/SlideShow';
import { Github, Globe, Award } from 'lucide-react';

export default function Projectcard({ project, index }) {
    const projectDemos = () => (
        <div>
            <SlideShow images={project.demos} />
        </div>
    );

    const projectInfo = () => (
        <div className="text-start">
            <h1>{project.projectName}</h1>
            <p>{project.description}</p>

            <h3>Collaborators:</h3>
            <div className="d-flex flex-wrap gap-2">
                {project.collaborators.map((collaborator, i) => (
                    <div
                        key={i}
                        className="rounded-full px-2 py-1 bg-gray-200"
                    >
                        {collaborator}
                    </div>
                ))}
            </div>

            <div className="d-flex flex-wrap gap-2 mt-3">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-1 bg-black text-white px-3 py-1 rounded hover:bg-dark"
                        style={{ borderColor: '#EB6620', borderWidth: '1px', color: '#EB6620' }}
                    >
                        <Github size={16} />
                        <span>GitHub</span>
                    </a>
                )}
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-1 bg-black text-white px-3 py-1 rounded hover:bg-dark"
                        style={{ borderColor: '#EB6620', borderWidth: '1px', color: '#EB6620' }}
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
                        className="d-flex align-items-center gap-1 bg-black text-white px-3 py-1 rounded hover:bg-dark"
                        style={{ borderColor: '#EB6620', borderWidth: '1px', color: '#EB6620' }}
                    >
                        <Award size={16} />
                        <span>DevPost</span>
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <div className="d-flex flex-column align-items-start justify-content-start flex-grow-1 p-3">
            <div className="container">
                <div className="row align-items-start">
                    {index % 2 === 1 ? (
                        <>
                            <div className="col-lg-6 col-md-12">{projectDemos()}</div>
                            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">{projectInfo()}</div>
                        </>
                    ) : (
                        <>
                            <div className="col-lg-6 col-md-12">{projectInfo()}</div>
                            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">{projectDemos()}</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
