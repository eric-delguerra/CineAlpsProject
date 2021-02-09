import RandomizeColor from "../../../service/RandomizeColor";
import {useState} from "react";

function FestivalHome() {
    const [menuNumber, setMenuNumber] = useState(0)

    return (
        <div className="ui container">
            <div className={`ui two item menu ${RandomizeColor}`}>
                <a className={`item ${menuNumber === 0 ? "active" : null}`}
                   onClick={() => setMenuNumber(0)}>Festival</a>
                <a className={`item ${menuNumber === 1 ? "active" : null}`}
                   onClick={() => setMenuNumber(1)}>Administration</a>
            </div>
            {menuNumber === 0 ? <FestivalGestion/> : null}
            {menuNumber === 1 ? <GlobalAdministration/> : null}
        </div>
    )
}

const FestivalGestion = () => {
    return (
        <div>
            <p>Gestion du festival</p>
        </div>
    )
}

const GlobalAdministration = () => {
    return (
        <div>
            <p>Administration Globale</p>
        </div>
    )
}

export default FestivalHome
