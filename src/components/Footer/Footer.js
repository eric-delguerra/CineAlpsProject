import useHover from '@react-hook/hover'
import * as React from "react";
import '../../styles/global.css'
import {useHistory} from "react-router-dom";


const Footer = () => {
    const history = useHistory()
    const target = React.useRef(null)
    const isHovering = useHover(target, {enterDelay: 0, leaveDelay: 0})
    const year = new Date().getFullYear()

    function openLink(link){
        const win = window.open(link, "_blank");
        win.focus();
    }
    return (
        <div style={{width: '100%', backgroundColor: '#000016', height: '10vh', position: "sticky"}}>
            <div className="" style={{margin: 'auto', width: '50%', textAlign: 'center'}}>
                <p style={{color: "#FF7C6A", paddingTop: "4%"}}>
                    •
                    <a ref={target} href="/" style={isHovering ? style.colorBefore : style.colorHover} className="titleFooter title">  Festival Multimedi'Alpes {year}  </a>
                    •

                    <i aria-hidden="true"
                       className="instagram link icon large"
                       style={style.iconAlignement}
                       onClick={() => openLink('https://www.instagram.com/mmi_grenoble/')}/>

                    <i aria-hidden="true"
                       className="twitter link icon large"
                       style={style.iconAlignement}
                       onClick={() => openLink('https://twitter.com/mmi_grenoble')}/>

                    <i aria-hidden="true"
                       className="pinterest link icon large"
                       style={style.iconAlignement}
                       onClick={() => openLink('https://www.pinterest.fr/mmi_grenoble/')}/>

                    <i aria-hidden="true"
                       className="youtube link icon large"
                       style={style.iconAlignement}
                       onClick={() => openLink('https://www.youtube.com/channel/UCiW0GK295Nze-Ew5_Kiz34A')}/>

                    <i aria-hidden="true"
                       className="facebook link icon large"
                       style={style.iconAlignement}
                       onClick={() => openLink('https://www.facebook.com/multimedialpes')}/>
                    •

                </p>
            </div>
        </div>
    )
}

const style = {
    colorBefore: {
        fontsize: "6em",
        color: '#FFC46A',
        transitionDuration: "0.5s",
    },
    colorHover: {
        fontsize: "6em",
        color: '#FF7C6A',
        transitionDuration: "0.5s"
    },
    iconAlignement: {
        verticalAlign: "baseline"
    }
}

export default Footer
