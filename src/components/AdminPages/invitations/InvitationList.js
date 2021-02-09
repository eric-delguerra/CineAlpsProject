import {useEffect, useState} from "react";
import RandomizeColor from "../../../service/RandomizeColor";
import CreateInvitation from "./Create";

function Invits() {
    const [invitsActive, setInvitsActive] = useState(0)

    const [nomsExemples, setNomEx] = useState(["John", "Damien", "Elena", "Sophie"])
    const [watcher, setWatcher] = useState(true)

    useEffect(() => {
        // Demande à l'api les demandes d'invites
    })

    function AskList() {
        return nomsExemples.map((name, index) =>
            (
                <div role="listitem" className="item" key={index}>
                    <div className="right floated content">
                        <button className="ui icon button green"><i aria-hidden="true" className="check icon"></i>
                        </button>
                        <button className="ui icon button red" onClick={() => {
                            let indexToDelete = nomsExemples.findIndex((e) => e === name)
                            nomsExemples.splice(indexToDelete, 1)
                            setNomEx(nomsExemples)
                            setWatcher(!watcher)
                        }}><i aria-hidden="true" className="close icon"></i>
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

export default Invits
