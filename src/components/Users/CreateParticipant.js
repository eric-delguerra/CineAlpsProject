import React, {useEffect, useState} from 'react'
import {Button, Form, Grid, Header, Image, Label, Message, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import validateMail from '../../service/validateMail'
import PartOne from "./Parts/PartOne";
import '../../styles/animations.css'
import PartTwo from "./Parts/PartTwo";


const CreateUser = (props) => {

    const [step, setStep] = useState(1)
    const [data, setData] = useState([])
    const [preloadData, setPreloadData] = useState(null)
    const [firstConnection, setFirstConnection] = useState(true)
    let tab = []

    useEffect(() => {
        console.log("DATA")
        console.log(data)
        if (firstConnection) {
            setFirstConnection(false)
            fetch('http://192.168.0.31:7070/api/invitation/getInvitationId/' + props.match.params.id, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            }).then(res => {
                return res.json()
            }).then((res2) => {
                setPreloadData(res2.result[0])
            }).catch(e => console.log(e))
        }

    })

    function nextStep() {
        console.log("nextstep")
        setStep(2)
    }
    function previousStep() {
        console.log("previousstep")
        setStep(1)
    }

    function saveData(e){
        if (data[0]){
            tab = data[0]
            let result = {...tab, ...e}
            setData(result)
            createNewParticipant(result)
        } else {
            tab.push(e)
            setData(tab)
        }
    }

    function createNewParticipant(result){
        console.log("DATAMERE")
        console.log(data[0])

        fetch('http://192.168.0.31:7070/api/user/addUserMedia', {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body:
                JSON.stringify(result)
        })
            .then((res) => {
                console.log(res)
            })
            .catch(e => console.error(e))
    }

    return (
        <div>
            { step === 1 ?
                <PartOne OnNextStep={nextStep}
                                    SaveData={(e) => saveData(e)}
                                    data={data}
                                    preloadData={preloadData}
                />
                                    :
                <PartTwo OnPreviousStep={previousStep}
                         SaveData={(e) => saveData(e)}
                /> }
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
