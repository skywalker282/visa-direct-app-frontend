import { React, useState } from 'react';
import './App.scss';
import AppBar from './components/Appbar'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Footer from './components/Footer';
import classnames from 'classnames';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Connect from './components/Connect';
import Panel from './components/Panel';
import { Switch, Route } from 'react-router-dom';

const App = props => {

    return (
        <div>
            <AppBar />
            <Switch>
                <Route exact path='/'>
                    <Connect />
                </Route>
                <Route path='/account'>
                    <Panel />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
