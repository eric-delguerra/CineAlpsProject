import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import useHover from '@react-hook/hover'


const LoginForm = () => {
    const target = React.useRef(null)
    const isHovering = useHover(target, {enterDelay: 0, leaveDelay: 0})

    return (
        <div>
            <Grid textAlign='center' style={{height: '93vh', background: 'linear-gradient(#00003D 50%, #FF7C6A )'}}
                  verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h1' style={{color: '#FF7C6A'}} textAlign='center'>
                        Votre ticket s'il vous plait
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' label="Mail" placeholder='Adresse mail'/>
                            <Form.Input
                                label="Mot de passe"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Mot de passe'
                                type='password'
                            />

                            <Button style={{color: '#FF7C6A', marginTop: '2rem'}} fluid size='large'>
                                Connexion
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Vous voulez être membre du public ? <a ref={target}
                                                               style={isHovering ? style.colorBefore : style.colorHover}
                                                               href='/sign'>Contactez-nous</a>
                    </Message>
                </Grid.Column>
            </Grid>
            <Footer/>
        </div>
    )

}


const style = {
    colorBefore: {
        color: '#00003D',
        transitionDuration: "0.5s"
    },
    colorHover: {
        color: '#FF7C6A',
        transitionDuration: "0.5s"
    }
}

export default LoginForm
