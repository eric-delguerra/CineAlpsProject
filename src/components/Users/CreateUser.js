import React, {useState, useEffect} from 'react'
import {Button, Form, Grid, Header, Image, Label, Message, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";

const CreateUser = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [verifPassword, setVerifPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [mailCheck, setMailCheck] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFirstName("Truc")
            console.log('timeout')
        }, 1000)
    })
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    function createUser() {
        if (firstName !== "" && lastName !== "" && mail !== "" && password !== "" && verifPassword !== "") {
            if (validateEmail(mail)){
                if (password !== verifPassword) {
                    setPasswordCheck(true)
                } else {
                    console.log("ca passe")
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

// backgroundColor: '#00003D' background: 'linear-gradient(#00003D 20%, rgb(72, 72, 115) 50%, white 100%)'


export default CreateUser
