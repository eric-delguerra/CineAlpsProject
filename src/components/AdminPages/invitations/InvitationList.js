import {useEffect, useState} from "react";
import RandomizeColor from "../../../service/RandomizeColor";
import CreateInvitation from "./Create";

function Invits() {
    const [invitsActive, setInvitsActive] = useState(0)

    const [firstConnection, setFirstConnexion] = useState(true)
    const [invitList, setInvitList] = useState([])
    const [watcher, setWatcher] = useState(true)

    useEffect(() => {
        fetch('http://192.168.1.85:7070/api/invitation/getAllInvitation', {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(res => {
                return res.json()
            })
            .then((e) => {
                if (e.status === 'success' && firstConnection){
                    console.log(e.result)
                    let tab = []

                    for (let i = 0; i < e.result.length; i++) {
                        tab.push(e.result[i].email)
                    }
                    console.log(tab)
                    setInvitList(tab)
                    setFirstConnexion(false)
                    console.log(invitList)
                }
            })
            .catch(e => console.error(e))

    })

    function AskList() {
        return invitList.map((name, index) =>
            (
                <div role="listitem" className="item" key={index}>
                    <div className="right floated content">
                        <button className="ui icon button green"><i aria-hidden="true" className="check icon"></i>
                        </button>
                        <button className="ui icon button red" onClick={() => {
                            let indexToDelete = invitList.findIndex((e) => e === name)
                            invitList.splice(indexToDelete, 1)
                            setInvitList(invitList)
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
                   onClick={() => {
                       setFirstConnexion(true)
                       setInvitsActive(0)
                   }}>Invitations en attentes</a>
                <a className={`item ${invitsActive === 1 ? "active" : null}`}
                   onClick={() => {
                       setFirstConnexion(true)
                       setInvitsActive(1)
                   }}>Créer une invitation</a>
            </div>
            {invitsActive === 0 ? waitingInvitations() : <CreateInvitation/>}
        </div>
    )
}

export default Invits
