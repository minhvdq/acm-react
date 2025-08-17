import NavBar from "../Items/NavBar"
import FooterPage from "../Items/Footer"
import ParticlesComponent from "../Events/particles"
import projects from "./projects.json"
import ProjectCard from "./ProjectCard"

export default function ProjectsPage () {
    let index = 0
    return (
        <div style={{backgroundColor: "#111"}}>
            <ParticlesComponent id="particles" />
            <div>
                <div className="flex flex-col" style={{height: "100vh"}}>
                    <NavBar />
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        textAlign: 'center', 
                        gap: '10px', // Adds space between text and button,
                        marginTop: '10vh',
                        marginBottom: '15vh'
                    }}>
                        <div>
                        <h1 className="text-4xl font-bold mb-4" style={{ color: '#EB6620', fontWeight: "bold" }}>
                            OUR PROJECTS
                        </h1>
                        <p className="text-white max-w-xl" >
                            A showcase of innovative projects created by students at Gettysburg College, highlighting their creativity, skills, and impact.
                        </p>
                        </div>
                    </div>
                </div>

                {projects.map(project => {
                    index ++
                    return(
                        <div style={{marginBottom: "20vh"}}>
                            <ProjectCard project={project} index={index} />
                        </div>
                    )
                })}
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center', 
                    gap: '10px', // Adds space between text and button,
                    marginTop: '10vh',
                    marginBottom: '30vh'
                }}>
                    <p style={{ margin: 0, color: 'white', fontSize: '2rem' }}>Want to showcase your project?</p>
                    <button style={{ 
                        backgroundColor: '#EB6620', 
                        color: 'white', 
                        border: 'none', 
                        padding: '10px 20px', 
                        borderRadius: '5px', 
                        cursor: 'pointer', 
                        fontSize: '16px'
                    }}>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfLPpcILfwc71X9QU6K4PaJc0ov6LTxDdjQjzBYORMkyrykkQ/viewform?usp=header" 
                            target="_blank" 
                            style={{
                                textDecoration: 'none', 
                                color: 'white', 
                                display: 'block', 
                                width: '100%', 
                                height: '100%'
                            }}
                        > 
                        CONTACT
                        </a>
                    
                    </button>
                </div>
                <FooterPage  />
            </div>
        </div>
    )
}