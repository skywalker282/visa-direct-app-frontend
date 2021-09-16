import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from '../styles/Signup.module.scss'
import AppBar from './Appbar'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Footer from './Footer';
import classnames from 'classnames';
import Sigin from './Signin'
import SignIn from './Signin';
import signUp from '../utils/signUp'

const SignUp = props => {
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        const userData = {
            userName: event.target.elements.firstName.value,
            password: event.target.elements.password.value,
            cardNumber: event.target.elements.cardNumber.value
        };

        let requestStatus = signUp(userData);

        requestStatus
            .then(data => {
                history.push('/account');
            })
            .catch(err => {
                alert(err)
            })

    }

    return (
        <div className="register">
            <h3>Inscription</h3>
            <Col sm="12">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">Prénom:</Label>
                        <Input type="text" name="firstName" id="firsName" placeholder="Votre nom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Nom:</Label>
                        <Input type="text" name="name" id="name" placeholder="Votre nom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Post-nom:</Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="Votre post-nom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail:</Label>
                        <Input type="email" name="email" id="email" placeholder="Votre adresse mail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="adress">Adresse:</Label>
                        <Input type="password" name="adress" id="adress" placeholder="Votre adresse" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Mot de passe:</Label>
                        <Input type="password" name="password" id="password" placeholder="Votre mot de passe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="passwordConfirm">Confirmation:</Label>
                        <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer votre mot de passe" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cardNumber">Numero Carte Visa:</Label>
                        <Input type="number" name="cardNumber" id="cardNumber" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
          Vous agréer avec nos termes et politique de confidentialité
        </Label>
                    </FormGroup>
                    <Button type="submit" color='primary'>Inscription</Button>
                </Form>
            </Col>
        </div>
    )
}

export default SignUp;
