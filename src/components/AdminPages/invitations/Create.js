import React, {Component} from 'react'
import {Container, Form} from 'semantic-ui-react'
import '../../../styles/global.css'
import validateEmail from "../../../service/validateMail";

class CreateInvitation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            mail: "",
            role: "",
            mailVerif: false,
            firstConnection : true,
            roleList: []
        }
    }

    componentDidMount() {
        if (this.state.firstConnection) {
            fetch('http://192.168.0.31:7070/api/role/getAllRoles', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(res => {
                    return res.json()
                })
                .then((e) => {
                    console.log(e.result)
                    if (e.status === 'success'){
                        console.log(e)
                        this.setState({firstConnection: false, roleList: e.result})
                    }
                })
                .catch(e => console.error(e))
        }
    }

    createInvite(){
        console.log(this.state.role)
        if (this.state.first !== "" && this.state.last !== "" && this.state.role !== ""){
            if (validateEmail(this.state.mail)){

                fetch('http://192.168.0.31:7070/api/invitation/addInvitation', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    body:
                        JSON.stringify(
                            {
                                "first_name": this.state.first,
                                "last_name": this.state.last,
                                "email": this.state.mail,
                                "role": this.state.role
                            })
                })
                    .then(res => {
                        return res.json()
                    })
                    .then((e) => {
                        console.log(e)
                        if (e.status === 'success'){
                            console.log(e)
                        }
                    })
                    .catch(e => console.error(e))

            } else {
                this.setState({mailVerif: true})
            }
        }
    }
    handleChange = (e, {value}) => this.setState({value})

    render() {
        const {value} = this.state
        return (
            <Container>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Prénom' placeholder='Prénom' onChange={(e) => this.setState({first: e.target.value})}/>
                        <Form.Input fluid label='Nom' placeholder='Nom' onChange={(e) => this.setState({last: e.target.value})}/>
                        <Form.Input fluid label='Mail' error={this.state.mailVerif} onChange={(e) => {
                            this.setState({mail: e.target.value, mailVerif: false})
                        }} placeholder='Mail'/>
                    </Form.Group>
                    <Form.Group inline >
                        <label>Rôle</label>
                        { this.state.roleList.map((role) =>
                             (
                                <Form.Radio
                                    onClick={() => {
                                        console.log(role.id)
                                        this.setState({role: role.id})
                                    }}
                                    label={role.name}
                                    value={role.id}
                                    checked={value === role.id}
                                    onChange={this.handleChange}
                                />
                            )
                        ) }
                    </Form.Group>
                    <Form.Button onClick={() => this.createInvite()}> Envoyer </Form.Button>
                </Form>
            </Container>
        )
    }
}



export default CreateInvitation
