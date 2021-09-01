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
                <div className="left-block">

                </div>
                <div className="body-content">
                    <form className="signin-form">
                        <div className="input-field">
                            <label htmlFor="first-name">Prénom</label>
                            <input type="text" name="fist-name" id="first-name" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="second-name">Nom</label>
                            <input type="text" name="second-name" id="second-name" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="third-name">Post-nom</label>
                            <input type="text" name="third-name" id="third-name" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="num-visa">Num. Carte Visa</label>
                            <input type="number" name="num-visa" id="num-visa" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="num-visa-dest">Num. Carte Visa destinataire</label>
                            <input type="number" name="num-visa-dest" id="num-visa-dest" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="devise">Devise</label>
                            <select name="devises" id="devises">
                                <option value="fc">Franc Congolais</option>
                                <option value="ussd">Dollar US</option>
                                <option value="euro">Franc Euro</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label htmlFor="amount">Montant</label>
                            <input type="number" name="amount" id="amount" />
                        </div>
                        <div className="input-field">
                            <input type="checkbox" name="agree" id="agree" />
                            <p>En soumettant ce transfert, vous agréer avec notre <a href="/politics">politique de transfert des fonds</a></p>
                        </div>
                        <div className="input-field">
                            <input type="submit" value="Transfert" />
                        </div>
                    </form>
                </div>
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