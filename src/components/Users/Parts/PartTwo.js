import React, {useState, useEffect} from 'react'
import {
    Button,
    Dropdown,
    Form,
    Grid,
    Header,
    Icon,
    Popup,
    Segment
} from 'semantic-ui-react'
import Footer from "../../Footer/Footer";
import '../../../styles/global.css'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


const PartTwo = (props) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [currentDate, setNewDate] = useState(null);
    const [link, setLink] = useState("")
    const [poster, setPoster] = useState("")
    const [condition, setCondition] = useState("")
    const [category, setCategory] = useState("")
    const [categoryOptions, setCategoryOption] = useState([]);
    const [firstConnection, setFirstConnexion] = useState(true)
    const [technique, setTechnique] = useState('')

    const onChange = (event, data) => {
        let t = new Date(data.value).toDateString()
        console.log(formatDate(t))
        setNewDate(data.value)
    };

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    useEffect(() => {
        if (firstConnection) {
            setFirstConnexion(false)
            fetch('http://192.168.1.85:7070/api/category/getAllCategories', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
                .then(res => {
                    return res.json()
                })
                .then((e) => {
                    if (e.status === 'success') {
                        console.log(e.result)
                        let tab = []

                        for (let i = 0; i < e.result.length; i++) {
                            tab.push({key: e.result[i].id, text: e.result[i].name, value: e.result[i].name})
                        }
                        console.log(tab)
                        setCategoryOption(tab)
                        console.log(categoryOptions)
                    }
                })
                .catch(e => console.error(e))

        }

    })

    function keepData() {
        if (name !== "" && description !== "" && currentDate !== "" && link !== "" && condition !== "" && category !== "") {

            let data = {
                mediaName: name,
                description: description,
                link: link,
                realisationCondition: condition,
                creation_date: currentDate,
                category: category,
                score: 0,
                isVisible: 1,
                poster: 'nom',
                technique: technique
            }
            props.SaveData(data)
        }
    }

    function storePoster(e) {
        const file = e.target.files[0];
        const newImages = [];
        newImages.push(file);
        setPoster(file)
    }

    return (
        <div>
            <Grid textAlign='center' style={{height: '93vh', background: 'linear-gradient(#00003D 50%, #FF7C6A )'}}
                  verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h1' style={{color: '#FF7C6A'}} textAlign='center'>
                        Votre oeuvre
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Button icon={<Icon color={'orange'} name='left arrow'/>} floated='left'
                                    onClick={props.OnPreviousStep}/>

                            <Form.Input fluid icon='film' value={name} label="Nom de l'oeuvre" iconPosition='left'
                                        placeholder='Nom'
                                        onChange={(value) => setName(value.target.value)}/>
                            <Dropdown
                                placeholder='Catégorie'
                                fluid
                                selection
                                pointing='top'
                                options={categoryOptions}
                                onChange={(e) => setCategory(e.target.textContent)}
                            />
                            <Form.TextArea fluid icon='music' label="Description" iconPosition='left'
                                           placeholder='Description'
                                           onChange={(value) => setDescription(value.target.value)}
                                           value={description}/>

                            <SemanticDatepicker onChange={onChange}
                                                datePickerOnly={true}
                                                label='Date de réalisation'
                                                locale='fr-FR'
                                                format='DD-MM-YYYY'
                                                placeholder="Réalisation"
                                                iconPosition="right center"
                            />
                            <Popup content='Il nous faut au moins un lien valide'
                                   position='right center'
                                   trigger={
                                       <Form.Input fluid iconPosition='left' icon='youtube' label='Liens'
                                                   placeholder='youtube.com' onChange={(e) => setLink(e.target.value)}/>
                                   }/>
                            <Form.Input
                                label='Affiche'
                                iconPosition='left'
                                icon='file'
                                type='file'
                                accept="image/*"
                                onChange={(e) => storePoster(e)}
                                style={{color: 'red'}}
                            />

                            <Form.Input iconPosition='left'
                                        icon='outline'
                                        label='Condition de réalisation'
                                        placeholder=''
                                        onChange={(e) => setCondition(e.target.value)}/>
                            <Form.Input iconPosition='left'
                                        icon='outline'
                                        label='Technique de réalisation'
                                        placeholder=''
                                        onChange={(e) => setTechnique(e.target.value)}/>

                            <Button style={{color: '#FF7C6A', marginTop: "1rem"}}
                                    fluid size='large'
                                    onClick={() => keepData()}
                            >
                                Inscription
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
            <Footer/>
        </div>
    )
}

export default PartTwo
