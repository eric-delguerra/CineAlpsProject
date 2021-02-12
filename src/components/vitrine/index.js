import {withRouter} from 'react-router-dom';
import {createMedia} from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import Footer from '../Footer/Footer'
import ListItem from '../vitrine/itemList'
import AdminPage from '../AdminPages/index'
import Home from '../Home/Home'
import Rules from '../Rules/Rules'

const {MediaContextProvider, Media} = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

class DesktopContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reglement: false,
            apropos: true,
            palmares: false,
            listFilm: false,
            admin: false,
            viewAdmin: false,
            user: JSON.parse(localStorage.getItem('userInfo'))
        }

    }

    componentDidMount() {
        if (this.state.user.result.roleName === 'admin') {
            this.setState({
                admin: true,
                activeItem: 'Admin',
                apropos: false,
                reglement: false,
                palmares: false,
                listFilm: false,
                viewAdmin: true
            })
        }

    }

    hideFixedMenu = () => this.setState({fixed: false})
    showFixedMenu = () => this.setState({fixed: false})
    handleItemClick = (name) => this.setState({activeItem: name})
    changeItem = (item) => {
        this.setState({itemSelected: 'A propos'})
    }
    onChangeItem = (value) => {
        console.log(value)

        if (value === 'A propos') {
            this.setState({apropos: true, reglement: false, palmares: false, listFilm: false, viewAdmin: false})
        }
        if (value === 'Le palmarès 2021') {
            this.setState({apropos: false, reglement: false, palmares: true, listFilm: false, viewAdmin: false})
        }
        if (value === 'Les nommés') {
            this.setState({apropos: false, reglement: false, palmares: false, listFilm: true, viewAdmin: false})
        }
        if (value === 'Reglement') {
            this.setState({apropos: false, reglement: true, palmares: false, listFilm: false, viewAdmin: false})
        }
        if (value === 'Admin') {
            this.setState({apropos: false, reglement: false, palmares: false, listFilm: false, viewAdmin: true})
        }

    }
    logout = () => {
        console.log('logout')
        window.location.href = "/"
        localStorage.removeItem('userInfo')
    }

    render() {
        const {children} = this.props
        const {fixed, activeItem} = this.state
        console.log(this.state.user)

        return (
            <Media greaterThan='mobile'>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{backgroundColor: '#FFFF', padding: '1em 0em'}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}

                            size='big'
                        >
                            <Image style={{height: '70px', width: '100px', marginLeft: '15px'}}
                                   src={process.env.PUBLIC_URL + "/logo_Multimedialpes.png"}/>

                            <Menu.Item as='a' name='A propos' active={activeItem === 'A propos'}
                                       onClick={() => {
                                           this.handleItemClick('A propos')
                                           this.onChangeItem('A propos')
                                       }}>
                                A propos
                            </Menu.Item>
                            <Menu.Item
                                as='a' name='Le palmarès 2021'
                                active={activeItem === 'Le palmarès 2021'}
                                onClick={() => {
                                    this.handleItemClick('Le palmarès 2021')
                                    this.onChangeItem('Le palmarès 2021')
                                }}>
                                Le palmarès 2021
                            </Menu.Item>
                            <Menu.Item
                                as='a' name='Les nommés'
                                active={activeItem === 'Les nommés'}
                                onClick={() => {
                                    this.handleItemClick('Les nommés')
                                    this.onChangeItem('Les nommés')
                                }}>
                                Les nommés
                            </Menu.Item>
                            <Menu.Item
                                as='a'
                                name='Reglement'
                                active={activeItem === 'Reglement'}
                                onClick={() => {
                                    this.handleItemClick('Reglement')
                                    this.onChangeItem('Reglement')
                                }}>
                                Reglement
                            </Menu.Item>
                            {this.state.admin &&
                            <Menu.Item
                                as='a'
                                name='Admin'
                                active={activeItem === 'Admin'}
                                onClick={() => {
                                    this.handleItemClick('Admin')
                                    this.onChangeItem('Admin')
                                }}>
                                Administration
                            </Menu.Item>
                            }

                            <Menu.Item position='right'>
                                <Button as='a' inverted={!fixed} color='violet'>
                                    Mon compte
                                </Button>
                                <Button as='a' inverted={!fixed} primary={fixed} color='violet'
                                        style={{marginLeft: '0.5em'}} onClick={() => this.logout()}>
                                    Deconnexion
                                </Button>
                            </Menu.Item>


                        </Menu>
                    </Segment>
                </Visibility>
                {this.state.listFilm && <ListItem user={this.state.user.result}/>}
                {this.state.viewAdmin && <AdminPage/>}
                {this.state.apropos && <Home/>}
                {this.state.reglement && <Rules/>}
            </Media>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}


const ResponsiveContainer = ({children}) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>

    </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const Vitrine = (props) => (
    <ResponsiveContainer>
        <div style={{width: '80%'}}>
            <ListItem/>
        </div>

        <Footer/>
    </ResponsiveContainer>
)

export default DesktopContainer
