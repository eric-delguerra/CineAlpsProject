import React, {useState}  from 'react'
import {Button, Form, Grid, Header, Image, Label, Message, Segment} from 'semantic-ui-react'

const CreateUser = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [verifPassword, setVerifPassword] = useState("")

    const [passwordCheck, setPasswordCheck] = useState(false)

    function createUser(){
        console.log('zee')
        if (firstName !== "" && lastName !== "" && mail !== "" && password !== "" && verifPassword !== "") {
            if (password !== verifPassword) {
                console.log("pas le bon pass")
                setPasswordCheck(true)
            } else {

            }
        }
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh', background: 'linear-gradient(#00003D 50%, #FF7C6A )' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450}}>
                <Header as='h1' style={{color: '#FF7C6A'}} textAlign='center'>
                    Bienvenue
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' label="Prénom" iconPosition='left' placeholder='Prénom' onChange={(value) => setFirstName(value.target.value)}/>
                        <Form.Input fluid icon='user' label="Nom" iconPosition='left' placeholder='Nom' onChange={(value) => setLastName(value.target.value)}/>
                        <Form.Input fluid icon='mail' label="Mail" iconPosition='left' placeholder='Adresse mail' onChange={(value) => setMail(value.target.value)}/>
                        <Form.Input
                            onChange={(value) => setPassword(value.target.value)}
                            error={passwordCheck}
                            label="Mot de passe"
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Mot de passe'
                            type='password'
                        />
                        <Form.Input
                            onChange={(value) => setVerifPassword(value.target.value)}
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
    )
}

// backgroundColor: '#00003D' background: 'linear-gradient(#00003D 20%, rgb(72, 72, 115) 50%, white 100%)'


export default CreateUser
