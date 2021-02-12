import React, {useState, useEffect} from 'react'
import {Button, Form, Grid, Header, Image, Label, Message, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import validateMail from '../../service/validateMail'
import {useHistory} from "react-router-dom";


const CreateUser = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [verifPassword, setVerifPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [mailCheck, setMailCheck] = useState(false)
    const [firstConnection, setFirstConnection] = useState(true)

    useEffect(() => {
        if (firstConnection) {
            setFirstConnection(false)
            fetch('http://192.168.1.85:7070/api/invitation/getInvitationId/' + props.match.params.id, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            }).then(res => {
                return res.json()
            }).then((res2) => {
                if (res2.result[0].last_name && res2.result[0].first_name) {
                    setLastName(res2.result[0].last_name)
                    setFirstName(res2.result[0].first_name)
                }
                setMail(res2.result[0].email)
            }).catch(e => console.log(e))
        }
    })

    const history = useHistory()

    function createUser() {
        if (firstName !== "" && lastName !== "" && mail !== "" && password !== "" && verifPassword !== "") {
            if (validateMail(mail)){
                if (password !== verifPassword) {
                    setPasswordCheck(true)
                } else {
                    fetch('http://192.168.1.85:7070/api/user/adduser', {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        },
                        body:
                            JSON.stringify(
                                {
                                    "first_name": firstName,
                                    "last_name": lastName,
                                    "email": mail,
                                    "password": password,
                                    "phone_number": ""
                                })
                    })
                        .then(res => { history.push(
                            '/accueil'

                        )})
                        .catch(e => console.error(e))
                }
            } else {
                setMailCheck(true)
            }

        }
    }


    return (
        <div>
            <Grid textAlign='center' style={{height: '93vh', background: 'linear-gradient(#00003D 50%, #FF7C6A )'}}
                  verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h1' style={{color: '#FF7C6A'}} textAlign='center'>
                        Bienvenue
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' value={firstName} label="Prénom" iconPosition='left'
                                        placeholder='Prénom'
                                        onChange={(value) => setFirstName(value.target.value)}/>
                            <Form.Input fluid icon='user' label="Nom" iconPosition='left' placeholder='Nom'
                                        onChange={(value) => setLastName(value.target.value)} value={lastName}/>
                            <Form.Input fluid icon='mail' type='mail' label="Mail" iconPosition='left' placeholder='Adresse mail'
                                        onChange={(value) => {
                                            setMailCheck(false)
                                            setMail(value.target.value)
                                        }} value={mail} error={mailCheck}/>
                            <Form.Input
                                onChange={(value) => {
                                    setPasswordCheck(false)
                                    setPassword(value.target.value)
                                }}
                                value={password}
                                error={passwordCheck}
                                label="Mot de passe"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Mot de passe'
                                type='password'
                            />
                            <Form.Input
                                value={verifPassword}
                                onChange={(value) => {
                                    setPasswordCheck(false)
                                    setVerifPassword(value.target.value)
                                }}
                                error={passwordCheck}
                                label="Confirmation"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirmer Mot de passe'
                                type='password'
                                style={{marginBottom: "2rem"}}
                            />

                            <Button style={{color: '#FF7C6A'}} fluid size='large' onClick={() => createUser()}>
                                Inscription
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Veuillez renseigner tout les champs pour finaliser votre inscription
                    </Message>
                </Grid.Column>
            </Grid>
            <Footer/>
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
