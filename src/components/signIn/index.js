import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import RandomizeColor from "../../service/RandomizeColor";

const SignInForm = () => (
    <Grid textAlign='center' style={{ height: '100vh', background: 'linear-gradient(#00003D 50%, #FF7C6A )'  }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' style={{color: '#FF7C6A'}} textAlign='center'>
                 Demandez un accès au festival
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Adresse mail' />
                    <Button style={{color: '#FF7C6A'}} fluid size='large'>
                        Je m'inscris
                    </Button>
                    <div style={{marginTop: '1rem'}}>

                        <a style={{color: '#FF7C6A', marginLeft: "60%"}} href='/log'>J'ai déjà un compte</a>
                    </div>
                </Segment>
            </Form>
            <Message>
                Un mail contenant votre ticket d'entré vous sera envoyez prochainement <br/>
            </Message>
        </Grid.Column>
    </Grid>
)

export default SignInForm
