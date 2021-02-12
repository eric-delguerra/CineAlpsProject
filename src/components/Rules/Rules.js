/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import {createMedia} from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {
    Container,
    Grid,
    Header,
    Icon,
    Segment,
    Accordion,
} from 'semantic-ui-react'
import Footer from "../Footer/Footer";
import {DesktopContainer} from "../Menu/Menu";
import List from "semantic-ui-react/dist/commonjs/elements/List";

const {MediaContextProvider, Media} = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
});



class Rules extends Component {
    state = {activeIndex: 0};

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state;

        return (
         <div>
                <Segment style={{ padding: '8em 0em', background: 'linear-gradient( 0deg, rgba(255,255,255,1) 0%, rgba(255,124,106,1) 100% )' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Segment className="padded" textAlign='center' size='large' style={{ width:'50%', margin: '0px auto 80px',  backgroundColor:'rgba(0, 0, 61, 0.7)', borderRadius:'35px', display: 'flex', justifyContent: 'space-evenly', color: '#FF7C6A' }}>
                            <Header as='h1' id="countdown" style={{ color: '#FF7C6A', fontFamily: 'Barlow Condensed', fontWeight: '600', fontSize: '3rem' }}>Les règles</Header>
                        </Segment>
                        <div style={{ marginBottom: '50px' }}>
                            <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}>LE RÈGLEMENT DU FESTIVAL 2021</h2>
                            <p style={{ fontFamily: 'Barlow Condensed', fontWeight: '400' }}>
                                Le festival MULTIMEDIALPES 2020, nouvelle forme du festival Vidéalpes organisé en 2018 et 2019, aura lieu cette année en ligne.<br/>
                                Les résultats seront donnés le 19 juin 2020.<br/>
                                Cet événement est organisé par le département MMI de l’IUT1 de Grenoble.<br/> Ce concours est totalement gratuit.
                                La participation à MULTIMEDIALPES entraîne l’acceptation du règlement ci-dessous.
                            </p>
                        </div>

                        <Accordion fluid styled style={{ marginBottom: '50px' }}>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={this.handleClick}
                                id='title-accordion'
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 1 : Objectif du festival
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <p>MULTIMEDIALPES a pour but de mettre en valeur des œuvres réalisées par les étudiants
                                    du département MMI de Grenoble, et de les diffuser devant un public composé de
                                    professionnels et de futurs étudiants (lycéens).</p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handleClick}
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 2 : Qui peut déposer une œuvre ?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <p>Le festival est réservé aux étudiants MMI de 1ère ou 2ème année, inscrits en DUT MMI
                                    au moment de la réalisation.</p>
                                <p>Les productions peuvent être présentées par un étudiant seul ou par un groupe
                                    d’étudiants. Dans le cas d’une réalisation en groupe, le dépôt de l’œuvre garantit
                                    l’accord de tous les participants de l’équipe.</p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 2}
                                index={2}
                                onClick={this.handleClick}
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 3 : Que peut-on déposer ?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <p>
                                    Les étudiants MMI peuvent déposer tout contenu web, audiovisuel ou graphique,
                                    réalisé dans le cadre des cours (réalisation pédagogique) ou sous forme de projet
                                    personnel (réalisation personnelle).
                                </p>
                                <p>Ne pourront concourir que des productions originales réalisées depuis le 1er
                                    septembre 2019.
                                </p>
                                <p>Chaque contenu devra être totalement libre de droits d’auteurs et de droits voisins,
                                    car il pourra être utilisé pour les trailers, After-Movie ou encore pour leur
                                    diffusion sur la chaîne Youtube ou le site des réalisations du département.
                                </p>

                                <p style={{ fontFamily: 'Barlow', fontWeight: '600' }}>Au moment du dépôt, l’œuvre devra être placée dans une catégorie :</p>
                                <List>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Audiovisuel : vidéo, son, web-documentaire
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Photo
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Animation 2D et 3D, Motion Design
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Développement web : Sites Internet, plateformes, programmes,
                                        jeux,…
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Design graphique : PRINT ou web, identité visuelle et déclinaison, Motion
                                        design…
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Communication : e-portfolios
                                    </List.Item>
                                </List>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 3}
                                index={3}
                                onClick={this.handleClick}
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 4 : Formats d’envoi de vos contributions
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <p style={{ fontFamily: 'Barlow', fontWeight: '600' }}>Tous les dépôts devront être accompagnés des éléments suivants :</p>
                                <List>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Nom de l’auteur ou du représentant (si travail d’équipe)
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Date de réalisation (mois-année)
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Catégorie choisie (voire sous-catégorie)
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Un petit texte de 200 caractères présentant l’œuvre (cadre, consigne ou intention)
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Un accord de diffusion sur les réseaux sociaux et sites du département
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Un engagement à être libéré de tout droit d’auteur ou droit voisin.
                                    </List.Item>
                                </List>

                                <p style={{ fontFamily: 'Barlow', fontWeight: '600' }}>Les productions audiovisuelles devront respecter les consignes suivantes :</p>
                                <List>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Vidéos et Sons ne devront pas dépasser 13 minutes, générique compris (dans le cas de courts-métrages, clips).
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Pour la pré-selection, les photos devront être rendues sous forme d’URL de galerie web. Si les photos sont sélectionnées, des fichiers CMJN 300dpi TIFF/PDF aplatis seront demandés.
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Pour la préselection, les vidéos et sons devront être rendus sous forme
                                        d’une URL (Youtube, Viméo). Pas d’envoi de fichier physique ni wetransfer à
                                        cette étape. Si les vidéos/sons sont sélectionnés, des fichiers physiques seront
                                        demandés par mail, aux formats :
                                        <List.List>
                                            <List.Item>
                                                <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                                Vidéo : .mp4 – codec H264, en full HD si possible, export VBR 2 passes 15-30Mbps
                                            </List.Item>
                                            <List.Item>
                                                <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                                Son seul : WAV ou AIFF 44.1kHz 16bits
                                            </List.Item>
                                            <List.Item>
                                                <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                                Photo : JPG RVB 300dpi
                                            </List.Item>
                                        </List.List>
                                    </List.Item>
                                </List>

                                <p style={{ fontFamily: 'Barlow', fontWeight: '600' }}>Les productions web devront respecter les consignes suivantes :</p>
                                <List>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Image fixe d’illustration (un fichier png ou jpg &lt;2Mo)
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Capture vidéo du site qui démontre les fonctionnalités en 3 minutes maximum (URL youtube ou autre plateforme)
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Sources du site (lien vers dépôt github ou lien vers un fichier zip par filesender)
                                        optionnel : URL du site s’il est en ligne
                                    </List.Item>
                                </List>

                                <p style={{ fontFamily: 'Barlow', fontWeight: '600' }}>Les productions en design graphique devront respecter les consignes suivantes :</p>
                                <List>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        Format JPG ou PDF, 300dpi, 10Mo maximum
                                    </List.Item>
                                </List>

                                <p style={{ fontFamily: 'Barlow', fontWeight: '600' }}>Les productions en Communication devront respecter les consignes suivantes :</p>
                                <List>
                                    <List.Item>
                                        <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                        URL
                                    </List.Item>
                                </List>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 4}
                                index={4}
                                onClick={this.handleClick}
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 5 : Dates limites
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <p>Toutes les œuvres doivent être mises à la disposition de l’équipe organisatrice entre
                                    le 4 mars 2020 et le 29 mai 2020 à 23h59, via le site
                                    www.multimedialpes2020.fr.<br/>Au-delà de cette date, aucune œuvre ne pourra être
                                    retenue pour le concours.
                                </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 5}
                                index={5}
                                onClick={this.handleClick}
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 6 : Pré-sélection des œuvres
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 5}>
                                <p>Jusqu’au 12 juin 18h, toutes les oeuvres soumises seront affichées sur le site.<br/>
                                    A partir du 12 juin à 18h, ne seront visibles sur le site www.multimedialpes2020.fr
                                    que les œuvres nominées par un jury spécialiste du domaine (un jury par
                                    catégorie).<br/>
                                    Les auteurs des œuvres qualifiées seront contactés par e-mail.<br/>
                                    Le public (étudiants MMI et enseignants) sera alors invité à voter pour le prix du
                                    public.</p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 6}
                                index={6}
                                onClick={this.handleClick}
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 7 : Cérémonie et Prix
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 6}>
                                <p>Le 19 juin 2020 à 18h, les lauréats seront dévoilés, par catégories, sur le site
                                    www.multimedialpes2020.fr.</p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 7}
                                index={7}
                                onClick={this.handleClick}
                                style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}
                            >
                                <Icon name='dropdown'/>
                                ARTICLE 8 : Droits de diffusion et droits voisins
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 7}>
                                <p>Chaque participant accepte, par le dépôt de son œuvre, que celle-ci soit diffusée sur
                                    Internet (Youtube, site des réalisations MMI, réseaux sociaux du département).</p>
                            </Accordion.Content>
                        </Accordion>

                        <div>
                            <h2 style={{ fontFamily: 'Barlow Condensed', fontWeight: '600', color: '#FFC46A' }}>LES JURYS 2021</h2>
                            <p style={{ fontFamily: 'Barlow', fontWeight: '600' }}>
                                4 jurys étudieront les oeuvres déposées dans leur catégorie :
                            </p>
                            <List>
                                <List.Item>
                                    <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                    un jury Audiovisuel,
                                </List.Item>
                                <List.Item>
                                    <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                    un jury Design graphique,
                                </List.Item>
                                <List.Item>
                                    <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                    un jury Développement,
                                </List.Item>
                                <List.Item>
                                    <Icon name='bullseye' size='tiny' style={{ verticalAlign: 'middle', margin: '0 1em 0 2em' }}/>
                                    un jury Communication.
                                </List.Item>
                            </List>
                            <p>Les membres du jury seront communiqués début juin 2020.</p>
                        </div>
                    </Grid>
                </Segment>
                <Footer/>
        </div>
        )
    }
}

export default Rules
