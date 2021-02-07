import RandomizeColor from "../../service/RandomizeColor";
import {useState, useEffect} from "react";
import CreateInvitation from "./invitations/Create";


function AdminHome() {
    const [active, setActive] = useState(0)

    return (
        <div className="container">
            <div className={`ui three item menu ${RandomizeColor}`}>
                <a className={`item ${active === 0 ? "active" : null}`} onClick={() => setActive(0)}>AdminPage</a>
                <a className={`item ${active === 1 ? "active" : null}`} onClick={() => setActive(1)}>AdminPage</a>
                <a className={`item ${active === 2 ? "active" : null}`} onClick={() => setActive(2)}>Invitations</a>
            </div>
            {active === 2 ? <Invits/> : null}
        </div>
    )
}

function Invits() {
    const [invitsActive, setInvitsActive] = useState(0)
    const nomsExemples = ["John", "Damien", "Elena", "Sophie"]

    useEffect(() => {
        // Demande à l'api les demandes
    })

    function AskList() {
        return nomsExemples.map((name) =>
            (
                <div role="listitem" className="item">
                    <div className="right floated content">
                        <button className="ui icon button green"><i aria-hidden="true" className="check icon"></i>
                        </button>
                        <button className="ui icon button red"><i aria-hidden="true" className="close icon"></i>
                        </button>
                    </div>
                    <img src={"https://eu.ui-avatars.com/api/?name=" + name} className="ui avatar image"/>
                    <div className="content">{name}</div>
                </div>
            )
        )
    }

    function waitingInvitations() {
        return (
            <div role="list" className="ui divided middle aligned list">
                <AskList/>
            </div>
        )
    }


    return (
        <div className="ui container">
            <div className={`ui two item menu ${RandomizeColor}`}>
                <a className={`item ${invitsActive === 0 ? "active" : null}`}
                   onClick={() => setInvitsActive(0)}>Invitations en attentes</a>
                <a className={`item ${invitsActive === 1 ? "active" : null}`}
                   onClick={() => setInvitsActive(1)}>Créer une invitation</a>
            </div>
            {invitsActive === 0 ? waitingInvitations() : <CreateInvitation/>}
        </div>
    )
}

export default AdminHome

// parametrage du festival, gestion Categories, prix, heure,
