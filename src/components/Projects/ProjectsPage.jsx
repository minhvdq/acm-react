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

        </div>
        <FooterPage  />
        </>
    )
}