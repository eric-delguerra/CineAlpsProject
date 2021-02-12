import React, {useState} from 'react'
import {Button, Checkbox, Form, Grid, Header, Image, Message, Modal, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import useHover from '@react-hook/hover'
import validateMail from '../../service/validateMail'


function reducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {open: true, dimmer: action.dimmer}
        case 'CLOSE_MODAL':
            return {open: false}
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
    const [message, setMessage] = useState("")
    const {open, dimmer} = state
    const [mail, setMail] = useState("")
    const [verifMail, setVerifMail] = useState(false)

    function createInvit() {
        if (validateMail(mail)) {
            fetch('http://192.168.1.85:7070/api/invitation/addInvitationByMail', {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body:
                    JSON.stringify(
                        {
                            "email": mail,
                        })
            })
                .then((res) => {
                    return res.json()
                })
                .then((r) => {
                    console.log(r)
                    if (r.status === 'success') {
                        setMessage("Vous recevrez un mail lorsque l'adminastrateur aura validé votre demande.")
                        dispatch({type: 'OPEN_MODAL', dimmer: 'blurring'})
                    } else {
                        setMessage(r.message)
                        dispatch({type: 'OPEN_MODAL', dimmer: 'blurring'})
                    }
                })
                .catch(e => console.error(e))
        } else {
            setVerifMail(true)
        }
    }

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
                            <Form.Input error={verifMail}
                                        fluid icon='user'
                                        iconPosition='left'
                                        placeholder='Adresse mail'
                                        onChange={(e) => {
                                            setVerifMail(false)
                                            setMail(e.target.value)
                                        }}
                            />
                            <Button style={{color: '#FF7C6A'}} onClick={() => createInvit()} fluid size='large'>
                                Je m'inscris
                            </Button>
                            <div style={{marginTop: '1rem'}}>
                                <a ref={target} style={isHovering ? style.colorBefore : style.colorHover} href='/log'>J'ai
                                    déjà un compte</a>
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
                onClose={() => dispatch({type: 'CLOSE_MODAL'})}
                style={{width: "55%"}}
            >
                <Modal.Header>C'est enregistré !</Modal.Header>
                <Modal.Content>
                    {message}
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({type: 'CLOSE_MODAL'})}>
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
