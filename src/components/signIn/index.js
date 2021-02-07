import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import RandomizeColor from "../../service/RandomizeColor";

const SignInForm = () => (
    <Grid textAlign='center' style={{ height: '100vh', backgroundColor: '#f7f7f7' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color={RandomizeColor} textAlign='center'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' /> Demandez un accès au festival
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Adresse mail' />
                    <Button color={RandomizeColor} fluid size='large'>
                        Je m'inscris
                    </Button>
                </Segment>
            </Form>
            <Message>
                Un mail contenant votre ticket d'entré vous sera envoyez prochainement
            </Message>
        </Grid.Column>
    </Grid>
)

export default SignInForm
