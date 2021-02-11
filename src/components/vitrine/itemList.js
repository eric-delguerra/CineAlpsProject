import React, {Component} from 'react'
import {Card, Grid, Form, Icon, Image, Modal, Button, GridRow, Embed} from 'semantic-ui-react'
import ReactPlayer from "react-player"

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            media: [],
            modaleDescription: false,
            itemSelected: {}
        }
    }

    componentDidMount() {
        console.log('this.state.media')
        fetch('http://192.168.1.85:7070/api/media/getAllMedias', {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then(res => {
            return res.json()
        }).then((res2) => {
            this.setState({media: res2.result})
        }).catch(e => console.log(e))
    }

    OpenDescription = (item) => {
        this.setState({itemSelected: item, modaleDescription: true})
    }

    formateString=(str)=>{

        if(str && str.length > 50){
            str = str.substring(0,50);
            str+= "..."
        }
        return str

    }
    buildGrid = () => {
        if (this.state.media) {
            let typeCopy = [...this.state.media]
            let gridArray = []
            let gridRow = []

            while (typeCopy[0]) {
                for (let i = 0; i < 4; i++) {
                    if (typeCopy[0]) {
                        gridRow.push(typeCopy.shift())
                    }
                }
                gridArray.push(gridRow)
                gridRow = []

            }
            return gridArray.map((row, idx) => {
                return (
                    <Grid.Row key={idx}>
                        {row.map(item => <Grid.Column key={item.id}>
                            <div style={{margin: 'auto'}}>
                                <Card style={{margin: 'auto'}} onClick={() => this.OpenDescription(item)}>
                                    <Image style={{height:'400px'}} src={item.poster} />
                                    <Card.Content>
                                        <Card.Header>{item.name}</Card.Header>
                                        <Card.Meta>
                                        </Card.Meta>
                                        <Card.Description style={{minHeight:'50px'}}>
                                            {this.formateString(item.description)}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            Total vote: {item.score}

                                        </a>
                                    </Card.Content>
                                </Card>
                            </div>

                        </Grid.Column>)}
                    </Grid.Row>
                )
            })

        }
    }
    iframe=(link)=>{
        return (
            <iframe width="560" height="315"
                    src={link} frameBorder="0"
                    allowFullScreen></iframe>
        )
    }


    render() {
        const {itemSelected} = this.state
        console.log(this.state.media)
        return (

            <div>
                <Modal
                    open={this.state.modaleDescription}
                    onClose={() => this.setState({modaleDescription: false})}
                    onOpen={() => this.setState({modaleDescription: true})}
                >
                    <Modal.Header>{itemSelected.name}</Modal.Header>
                    <Modal.Content>


                                <Embed
                                    icon='right circle arrow'
                                    source={"youtube"}
                                    iframe={this.iframe(itemSelected.link)}
                                />

                            <div style={{margin: 'auto', alignItems: 'center'}}>
                                <Button color="violet">
                                    Je vote pour cette oeuvre
                                </Button>


                        </div>
                        <div>
                            <p style={{fontSize: 25, fontWeight: 'bold'}}>En résumé </p>
                            <p>{itemSelected.description}</p>
                        </div>


                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({modaleDescription: false})} color="violet" primary>
                            Fermer <Icon name='chevron right'/>
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Grid columns={4} celled>
                    {this.buildGrid()}
                </Grid>


            </div>
        )
    }


}

export default ItemList
