import React from 'react'
import {Button, Checkbox, Form, Grid, Header, Image, Message, Modal, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import useHover from '@react-hook/hover'


function reducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { open: true, dimmer: action.dimmer }
        case 'CLOSE_MODAL':
            return { open: false }
        default:
            throw new Error()
    }
}

const SignInForm = () => {
    const target = React.useRef(null)
    const isHovering = useHover(target, {enterDelay: 0, leaveDelay: 0})
    const [state, dispatch] = React.useReducer(reducer, {
        open: false,
        dimmer: undefined,
    })
    const { open, dimmer } = state

    return (
        <div>
            <Grid textAlign='center' style={{height: '93vh', background: 'linear-gradient(#00003D 50%, #FF7C6A )'}}
                  verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h1' style={{color: '#FF7C6A'}} textAlign='center'>
                        Demandez un accès au festival
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Adresse mail'/>
                            <Button style={{color: '#FF7C6A'}} onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })} fluid size='large'>
                                Je m'inscris
                            </Button>
                            <div style={{marginTop: '1rem'}}>

                                <a ref={target} style={isHovering ? style.colorBefore : style.colorHover} href='/log' >J'ai déjà un compte</a>
                            </div>
                        </Segment>
                    </Form>
                    <Message>
                        Vous voulez presenter votre oeuvre ? C'est par <a href="">ici</a>
                    </Message>
                </Grid.Column>
            </Grid>
            <Footer/>

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
                style={{width: "55%"}}
            >
                <Modal.Header>C'est enregistré !</Modal.Header>
                <Modal.Content>
                    Vous recevrez un mail lorsque l'adminastrateur aura validé votre demande.
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Fermer
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}


const style = {
    colorBefore: {
        color: '#00003D',
        transitionDuration: "0.5s",
        marginLeft: "60%"
    },
    colorHover: {
        color: '#FF7C6A',
        transitionDuration: "0.5s",
        marginLeft: "60%"
    }
}

export default SignInForm
