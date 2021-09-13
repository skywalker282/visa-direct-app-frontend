import React from 'react';
import './App.scss';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import AppBar from './components/Appbar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Transfert from './components/transfert/transfert'
import Forum from './components/forum/forum'
import Contact from './components/forum/forum'
import History from './components/forum/forum'
import Footer from './Footer'

function App() {
    return (
        <Router>
            <AppBar />
            <div className="app-hero">
                <h1>BIENVENUE SUR LA PLATE-FORME SAFETINDA</h1>
                <span className="hero-foot">Transférer votre argent en toute sécurité.</span>
            </div>
            <div className="app-body">
                <div className="left-block">

                </div>
                <div className="body-content">
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <Link to='/'>Transfert</Link>
                            </li>
                            <li>
                                <Link to='/contacts'>Contacts</Link>
                            </li>
                            <li>
                                <Link to='/history'>Historique</Link>
                            </li>
                            <li>
                                <Link to='/forums'>Forums</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
            <Footer />
            <Switch>
                <Route exact path='/transfert'>
                    <Transfert />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/history'>
                    <History />
                </Route>
                <Route path='/forum'>
                    <Forum />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;