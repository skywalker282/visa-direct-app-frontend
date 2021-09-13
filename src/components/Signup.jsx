import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from '../styles/Signup.module.scss'
import AppBar from './Appbar'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Footer from './Footer';
import classnames from 'classnames';
import Sigin from './Signin'
import SignIn from './Signin';

const SignUp = props => {
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        history.push('/account');
    }

    return (
        <div className="register">
            <h3>Inscription</h3>
            <Col sm="12">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Prénom:</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Nom:</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Post-nom:</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">E-mail:</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Adresse:</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Mot de passe:</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Confirmation:</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Numero Carte Visa:</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
          Vous agréer avec nos termes et politique de confidentialité
        </Label>
                    </FormGroup>
                    <Button color='primary' onClick={handleSubmit}>Inscription</Button>
                </Form>
            </Col>
        </div>
    )
}

export default SignUp;
