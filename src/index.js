import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import LoginForm from "./components/Login";
import SignInForm from "./components/signIn";
import AdminHome from "./components/AdminPages"
import CreateUser from "./components/Users/CreateUser";

import CreateParticipant from "./components/Users/CreateParticipant";

import ItemList from './components/vitrine/itemList'
import Rules from "./components/Rules/Rules";


ReactDOM.render(

        <Router>
                <Route exact path="/" component={LoginForm}/>
                <Route exact path="/log" component={LoginForm}/>
                <Route exact path="/accueil" component={App}/>
                <Route exact path="/adminpage" component={AdminHome}/>
                <Route exact path="/newuser/:id" component={CreateUser}/>
                <Route exact path="/newparticipant/:id" component={CreateParticipant}/>
                <Route exact path="/listitems" component={ItemList}/>
                <Route exact path="/sign" component={SignInForm}/>
                <Route exact path="/reglement" component={Rules}/>
        </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
