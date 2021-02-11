import React,{useState} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import useHover from '@react-hook/hover'


const LoginForm = () => {
    const target = React.useRef(null)
    const isHovering = useHover(target, {enterDelay: 0, leaveDelay: 0})

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [userInfo, setUserInfo] = useState(null)

    function connection(){
        if (mail !== "" && password !== ""){
            fetch('http://192.168.0.31:7070/api/user/checkAuth', {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body:
                    JSON.stringify(
                        {
                            "email": mail,
                            "password": password
                        })
            })
                .then(res => {
                    return res.json()
                })
                .then((e) => {
                    if (e.status === 'success'){
                        localStorage.setItem('userInfo', JSON.stringify(e.result[0]))
                        console.log(e)
                    }

                })
                .catch(e => console.error(e))

        }
    }

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
                            <Form.Input fluid icon='user' iconPosition='left' label="Mail" placeholder='Adresse mail' onChange={(e) => setMail(e.target.value)}/>
                            <Form.Input
                                onChange={(e) => setPassword(e.target.value)}
                                label="Mot de passe"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Mot de passe'
                                type='password'
                            />
                            <Button style={{color: '#FF7C6A', marginTop: '2rem'}} fluid size='large' onClick={() => connection()}>
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
