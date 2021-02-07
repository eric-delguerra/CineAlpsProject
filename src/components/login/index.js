import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import RandomizeColor from "../../service/RandomizeColor";

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh', backgroundColor: '#f7f7f7' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color={RandomizeColor} textAlign='center'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' /> Suivez le tapis rouge
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

                    <Button color={RandomizeColor} fluid size='large'>
                        Connexion
                    </Button>
                </Segment>
            </Form>
            <Message>
                Vous voulez être membre du public ? <a href='/sign'>Contactez-nous</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm
