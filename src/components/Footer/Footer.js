import useHover from '@react-hook/hover'
import * as React from "react";


const Footer = () => {
    const target = React.useRef(null)
    const isHovering = useHover(target, {enterDelay: 0, leaveDelay: 0})
    const year = new Date().getFullYear()
    return (
        <div style={{width: '100%', backgroundColor: '#000016', height: '10vh', position: "sticky"}}>
            <div className="" style={{margin: 'auto', width: '50%', textAlign: 'center'}}>
                <p style={{color: "#FF7C6A", paddingTop: "4%"}}>
                    •<a ref={target} href="/" style={isHovering ? style.colorBefore : style.colorHover}>  Festival Multimedi'Alpes {year}  </a>•
                </p>
            </div>

        </div>
    )
}

const style = {
    colorBefore: {
        color: '#FFC46A',
        transitionDuration: "0.5s"
    },
    colorHover: {
        color: '#FF7C6A',
        transitionDuration: "0.5s"
    }
}

export default Footer
