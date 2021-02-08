import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh', background: 'linear-gradient(#00003D 50%, #FF7C6A )' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450}}>
            <Header as='h1' style={{color: '#FF7C6A'}} textAlign='center'>
                Votre ticket s'il vous plait
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Adresse mail' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Mot de passe'
                        type='Mot de passe'
                    />

                    <Button style={{color: '#FF7C6A'}} fluid size='large'>
                        Connexion
                    </Button>
                </Segment>
            </Form>
            <Message>
                Vous voulez être membre du public ? <a style={{color: '#FF7C6A'}} href='/sign'>Contactez-nous</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm
