/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React from 'react'
import {
    Container,
    Grid,
    Header,
    Icon,
    Segment,
} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import { DesktopContainer } from "../Menu/Menu";
import '../../styles/global.css';

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
});

const ResponsiveContainer = ({ children }) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        {/*<MobileContainer>{children}</MobileContainer>*/}
    </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};




const Home = () => {

// Update the count down every 1 second

// Set the date we're counting down to
    const countDownDate = new Date("Apr 15, 2021 00:00:00").getTime();
    const x = setInterval(function () {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        if(days > 10) {
            document.getElementById("countdown").innerHTML = `J - ${days}`;
            document.getElementById("days-container").hidden = true;
            document.getElementById("hours-container").hidden = true;
            document.getElementById("minutes-container").hidden = true;
            document.getElementById("seconds-container").hidden = true;

        } else {
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            document.getElementById("countdown-container").hidden = true;
            document.getElementById("days-container").hidden = false;
            document.getElementById("hours-container").hidden = false;
            document.getElementById("minutes-container").hidden = false;
            document.getElementById("seconds-container").hidden = false;
        }


        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    return (
        <ResponsiveContainer>
            <Segment style={{ padding: '8em 0em', background: 'linear-gradient( 0deg, rgba(255,255,255,1) 0%, rgba(255,124,106,1) 100% )'}} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row centered>
                        <Segment className="padded" textAlign='center' size='large' style={{ width:'50%', backgroundColor:'rgba(0, 0, 61, 0.7)', borderRadius:'35px', display: 'flex', justifyContent: 'space-evenly', color: '#FF7C6A' }}>
                            <div id="countdown-container">
                                <p id="countdown" style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '2em' }}/>
                            </div>
                            <div id="days-container">
                                <p style={{ fontFamily: 'Barlow Condensed', fontWeight: '300' }}>Jours</p>
                                <p id="days" style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '2em' }}/>
                            </div>
                            <div id="hours-container">
                                <p style={{ fontFamily: 'Barlow Condensed', fontWeight: '300' }}>Heures</p>
                                <p id="hours" style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '2em' }}/>
                            </div>
                            <div id="minutes-container">
                                <p style={{ fontFamily: 'Barlow Condensed', fontWeight: '300' }}>Minutes</p>
                                <p id="minutes" style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '2em' }}/>
                            </div>
                            <div id="seconds-container">
                                <p style={{ fontFamily: 'Barlow Condensed', fontWeight: '300' }}>Secondes</p>
                                <p id="seconds" style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '2em' }}/>
                            </div>
                            {/*<Header as='h1' id="countdown" style={{ color: '#FF7C6A', fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '3rem' }}></Header>*/}
                        </Segment>
                    </Grid.Row>
                    <Grid.Row centered style={{ marginBottom: '80px' }}>
                        <Header as='h2' style={{ color: '#FFC46A', fontFamily: 'Barlow Condensed', fontWeight: '300', fontSize: '3rem'}}>15 Avril 2021</Header>
                    </Grid.Row>

                    <Grid.Row style={{ marginBottom: '80px' }}>
                        <Container text textAlign='left'>
                            <Header as='h3' style={{ color: '#FFC46A', fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '1.5em'}}>Détails</Header>
                            <div style={{display: 'flex', marginBottom: '2em'}}>
                                <Icon name='map marker alternate' size='large' style={{color:'#00003D', marginRight: '0.7em'}}/>
                                <p style={{ color: '#00003D', fontFamily: 'Barlow', fontWeight: '400' }}>Grand Amphithéâtre de la Maison des Arts, de la Création et de l’Innovation (MACI), Campus universitaire de Grenoble.</p>
                            </div>
                            <div style={{display: 'flex'}}>
                                <Icon name='clock' size='large' style={{color:'#00003D', marginRight: '0.5em'}}/>
                                <p style={{ color: '#00003D', fontFamily: 'Barlow', fontWeight: '400' }}>17h : Exposition photo et d’immersion sonore dans le hall<br/>19h : Cérémonie</p>
                            </div>
                        </Container>
                    </Grid.Row>
                    <Container style={{ marginBottom: '80px' }}>
                        <Grid.Row style={{ marginBottom: '20px' }}>
                            <iframe
                                width="550"
                                height="309"
                                src="https://www.youtube.com/embed/o8AinLmF1CQ"
                                allow="accelerometer;
                            autoplay;
                            clipboard-write;
                            encrypted-media;
                            gyroscope;
                            picture-in-picture"
                                allowFullScreen
                                style={{ border: 'none' }}/>
                        </Grid.Row>
                        <Grid.Row>
                            <iframe
                                width="550"
                                height="309"
                                src="https://www.youtube.com/embed/YmRw0A-HeQE"
                                frameBorder="0"
                                allow="accelerometer;
                                autoplay;
                                clipboard-write;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture"
                                allowFullScreen
                                style={{ border: 'none' }}/>
                        </Grid.Row>
                    </Container>
                    <Grid.Row>
                        <Container text textAlign='left'>
                            <Header as='h3' style={{ color: '#FFC46A', fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '1.5em' }}>Le département Métiers du Multimédia et de l'Internet</Header>
                            <p style={{ color: '#00003D', fontFamily: 'Barlow', fontWeight: '400' }}>Au carrefour du développement web, du design graphique et de la communication, le diplôme de DUT MMI conduit aux métiers de la communication d’entreprise, de la création multimédia, de la gestion de réseaux sociaux numériques.</p>
                            <p style={{ color: '#00003D', fontFamily: 'Barlow', fontWeight: '400' }}>Toutes les étapes de la conception et du développement des produits multimédias sont traités dans cette formation : charte graphique, identité visuelle et sonore, print, audiovisuel, motion design…</p>
                        </Container>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Footer/>
        </ResponsiveContainer>
    )
}


export default Home
