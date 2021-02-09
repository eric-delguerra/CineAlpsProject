import React, {useEffect, useState} from 'react'
import {Button, Form, Grid, Header, Image, Label, Message, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import validateMail from '../../service/validateMail'
import PartOne from "./Parts/PartOne";
import '../../styles/animations.css'
import PartTwo from "./Parts/PartTwo";


const CreateUser = () => {

    const [step, setStep] = useState(1)

    useEffect(() => {
        //ca marche ici
    })

    function nextStep() {
        console.log("nextstep")
        setStep(2)
    }

    return (
        <div>
            { step === 1 ? <PartOne OnNextStep={nextStep} /> : <PartTwo /> }
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


export default CreateUser
