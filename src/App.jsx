import React from 'react';
import './App.scss';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import AppBar from './components/Appbar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
    return (
        <Router>
            <AppBar />
            <div className="app-hero">
                <h1>BIENVENUE SUR LA PLATE-FORME SAFEtinda</h1>
                <span className="hero-foot">Transférer votre argent en toute sécurité.</span>
            </div>
            <div className="app-body">
                <a href="#">ENROLLEMENT</a>
                <p>Au cas où vous avez déjà un compte actif et vérifié <br /> alors connectez-vous</p>
                <a href="#">CONNEXION</a>
            </div>
            <div className="footer">
                <ul className="about-block">
                    <li>
                        <h3>A propos</h3>
                        <p>SafeTinda est une plateforme qui vous permet d'envoyer de l'argent partout en RDC et à qui vous voulez. La plateforme offre une interface USSD qui vous permet d'interragir avec votre compte Visa même sans Internet.</p>
                    </li>
                    <li>
                        <h3>Adresses</h3>
                        <address>Avenu du fleuve No 234, Commune Ngaliema Kinshasa</address>
                    </li>
                    <li>
                        <h3>Contacts</h3>
                        <p>Téléphone : <a href="tel:+243976380527">+243 976 380 527</a></p>
                        <p>Mail: <a href="mailto:celiitellu@gmail.com">celiitellu@gmail.com</a></p>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/signup'>
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;