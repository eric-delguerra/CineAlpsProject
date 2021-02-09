import React, {useState, useEffect} from 'react'
import {Button, Dropdown, Form, Grid, Header, Image, Input, Label, Message, Radio, Segment} from 'semantic-ui-react'
import Footer from "../../Footer/Footer";
import validateMail from '../../../service/validateMail'

const PartTwo = (props) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [verifPassword, setVerifPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [mailCheck, setMailCheck] = useState(false)
    const options = [
        { key: 1, text: '1 lien', value: 1 },
        { key: 2, text: '2 liens', value: 2 },
        { key: 3, text: '3 liens', value: 3 },
    ]
    useEffect(() => {
        //ca marche ici
    })



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
                            <Form.Input fluid icon='film' value={name} label="Nom de l'oeuvre" iconPosition='left'
                                        placeholder='Nom'
                                        onChange={(value) => setName(value.target.value)}/>
                            <Form.TextArea fluid icon='music' label="Description" iconPosition='left' placeholder='Description'
                                        onChange={(value) => setDescription(value.target.value)} value={description}/>

                            <Form.Input fluid iconPosition='left' icon='youtube' label='Lien 1' placeholder='mysite.com' />
                            <Form.Input iconPosition='left' icon='video' label='Lien 2' placeholder='mysite.com' />
                            <Form.Input iconPosition='left' icon='play circle outline' label='Lien 3' placeholder='mysite.com' />

                            <Button style={{color: '#FF7C6A'}} fluid size='large' onClick={() => console.log("finit")}>
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

export default PartTwo
