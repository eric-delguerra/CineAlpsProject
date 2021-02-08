import RandomizeColor from "../../service/RandomizeColor";
import {useState, useEffect} from "react";
import Invits from "./invitations/InvitationList";
import General from "./general";



function AdminHome() {
    const [active, setActive] = useState(0)

    return (
        <div className="container">
            <div className={`ui four item menu ${RandomizeColor}`}>
                <a className={`item ${active === 0 ? "active" : null}`} onClick={() => setActive(0)}>Général</a>
                <a className={`item ${active === 1 ? "active" : null}`} onClick={() => setActive(1)}>AdminPage</a>
                <a className={`item ${active === 2 ? "active" : null}`} onClick={() => setActive(2)}>Invitations</a>
                <a className={`item `} href="/"><img src={process.env.PUBLIC_URL + "/logo_Multimedialpes.png"}/></a>
            </div>
            {active === 0 ? <General/> : null}
            {active === 2 ? <Invits/> : null}
        </div>
    )
}



export default AdminHome

// parametrage du festival, gestion Categories, prix, heure,
