/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
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

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: false })

    render() {
        const { children } = this.props
        const { fixed } = this.state

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
                        style={{ backgroundColor:'#FF7C6A', padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='big'
                            style={{ backgroundColor:'#FF7C6A', border:'none'}}
                        >
                            {/*<Image style={{height:'70px',width:'100px',marginLeft:'15px'}} src={process.env.PUBLIC_URL + "/logo_Multimedialpes_white.png"} />*/}

                            <Image
                                src={process.env.PUBLIC_URL + "/logo_Multimedialpes_white.png"}
                                as='a'
                                size='small'
                                href='/'
                                target='_self'
                                style={{margin: '0 25px'}}
                            />
                            <Menu.Item as='a' active style={{ fontFamily: 'Barlow', fontWeight: '400' }} >A propos</Menu.Item>
                            <Menu.Item as='a' style={{ fontFamily: 'Barlow', fontWeight: '400' }}>Le palmarès 2021</Menu.Item>
                            <Menu.Item as='a' style={{ fontFamily: 'Barlow', fontWeight: '400' }}>Les nommés</Menu.Item>
                            <Menu.Item as='a' style={{ fontFamily: 'Barlow', fontWeight: '400' }}>Festival 2021</Menu.Item>
                            <Menu.Item as='a' style={{ fontFamily: 'Barlow', fontWeight: '400' }}>Règlement</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted={!fixed} color='white'>
                                    S'inscrire
                                </Button>
                                <Button as='a' inverted={!fixed} primary={fixed} color='white' style={{ marginLeft: '0.5em' }}>
                                    Se connecter
                                </Button>
                            </Menu.Item>


                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Media>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

/*class MobileContainer extends Component {
    state = {isIdentidied:false}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened,isIdentidied } = this.state

        return (
            <Media as={Sidebar.Pushable} at='mobile'>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        style={{ backgroundColor:'#00003D'}}
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item as='a' active>
                            Accueil
                        </Menu.Item>
                        <Image
                            src={process.env.PUBLIC_URL + "/logo_Multimedialpes_white.png"}
                            as='a'
                            size='small'
                            href='/'
                            target='_self'
                            style={{marginBottom:'25px'}}
                        />

                        <Menu.Item as='a' style={{color: '#FFF'}}>A propos</Menu.Item>
                        <Menu.Item as='a' style={{color: '#FFF'}}>Le palmarès 2020</Menu.Item>
                        <Menu.Item as='a' style={{color: '#FFF'}}>Les nommés</Menu.Item>
                        <Menu.Item as='a' style={{color: '#FFF'}}>Festival 2021</Menu.Item>
                        <Menu.Item as='a' style={{color: '#FFF'}}>Règlement</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{  padding: '1em 0em', backgroundColor:'#FF7C6A' }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large' style={{  border: 'none' }}>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    {/!*<Image
                                        src={process.env.PUBLIC_URL + "/logo_Multimedialpes_white.png"}
                                        as='a'
                                        size='tiny'
                                        href='/'
                                        target='_self'
                                    />*!/}
                                    <Menu.Item inverted pointing secondary position='right'>
                                        <Button as='a' className="ui icon button" style={{backgroundColor:'#FF7C6A'}}>
                                            <Icon name='sign-in' size='large' style={{color:'#fff'}}/>
                                        </Button>
                                        <Button as='a' className="ui icon button" style={{backgroundColor:'#FF7C6A', marginLeft: '0.5em'}}>
                                            <Icon name='user circle' size='large' style={{color:'#fff'}}/>
                                        </Button>
                                        {/!*<Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            <Icon name='sign-in' size='large'/>
                                        </Button>*!/}
                                    </Menu.Item>
                                </Menu>
                            </Container>

                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};*/
export {
    DesktopContainer,
    // MobileContainer
}
