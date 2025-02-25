import './style.css'
const homeUrl = '/~vudimi01/myApp'

export default function Card({person, cl, onClick}) {
    return(
        <div className="col-6 col-md-4 col-lg-3">
            <button style={{backgroundColor: '#2C2C2C'}} className="card text-white w-100 border-0 shadow-sm" aria-label="open James Spokes's details" onClick={onClick}>
                <div className="card-body d-flex flex-column align-items-center p-3">
                    <img src={`${homeUrl}${person.photo}`} alt="James-Spokes" className="img-fluid rounded mb-3 card-img" />
                    <div className="w-100 d-flex flex-column align-items-start">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <p className="font-weight-bold h5 mb-0">{person?.name}</p>
                        </div>
                        <p style={{backgroundColor: cl}} className="badge text-light mt-2">{person.role}</p>
                    </div>
                </div>
            </button>
        </div>
    )
}