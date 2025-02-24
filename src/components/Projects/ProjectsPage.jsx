import NavBar from "../Items/NavBar"
import FooterPage from "../Items/Footer"
import ParticlesComponent from "../Events/particles"

export default function ProjectsPage () {

    return (
        <>
        <ParticlesComponent id="particles" />
        <div style={{height: '84.8vh'}}>
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
                <p style={{ margin: 0, color: 'white', fontSize: '2rem' }}>We are working on this page. Contact us if you want to be our partner.</p>
                <button style={{ 
                    backgroundColor: '#EB6620', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 20px', 
                    borderRadius: '5px', 
                    cursor: 'pointer', 
                    fontSize: '16px'
                }}>
                    CONTACT
                </button>
            </div>

        </div>
        <FooterPage  />
        </>
    )
}