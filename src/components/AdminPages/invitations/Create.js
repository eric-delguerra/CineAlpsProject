import React, {Component} from 'react'
import {Container, Form} from 'semantic-ui-react'
import '../../../styles/global.css'

class CreateInvitation extends Component {
    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        const {value} = this.state
        return (
            <Container>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Nom' placeholder='Nom'/>
                        <Form.Input fluid label='Prénom' placeholder='Prénom'/>
                        <Form.Input fluid label='Mail' placeholder='Mail'/>
                    </Form.Group>
                    <Form.Group inline>
                        <label>Rôle</label>
                        <Form.Radio
                            label='Public'
                            value='sm'
                            checked={value === 'sm'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Jury'
                            value='md'
                            checked={value === 'md'}
                            onChange={this.handleChange}
                        />
                        <Form.Radio
                            label='Administatrateur'
                            value='lg'
                            checked={value === 'lg'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Button> Envoyer </Form.Button>
                </Form>
            </Container>
        )
    }
}

export default CreateInvitation
