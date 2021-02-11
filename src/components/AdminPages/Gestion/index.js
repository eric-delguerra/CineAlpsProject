import RandomizeColor from "../../../service/RandomizeColor";
import {useState} from "react";
import FestivalGestion from "./Festival";
import GlobalAdministration from "./Administration";

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



export default FestivalHome
