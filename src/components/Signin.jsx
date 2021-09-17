import React from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import classes from '../styles/Signin.module.scss';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import signIn from '../utils/signIn';

dotenv.config();

const SignIn = props => {
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let userCredentials = {
            userName: event.target.elements.userName.value,
            userCardNumber: event.target.elements.userCardNumber.value,
            userPassword: event.target.elements.userPassword.value
        }
        let requestResult = await signIn(userCredentials)
        console.log(requestResult);

        if (requestResult.status === 100) {
            history.push('/account');
        } else {
            alert(requestResult.message)
        }
    }
    return (
        <div className="connect">
            <h3>Connexion</h3>
            <Row>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="userName">Name:</Label>
                        <Input type="text" name="userName" id="userName" placeholder="Votre nom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userCardNumber">Numero Carte Visa:</Label>
                        <Input type="number" name="userCardNumber" id="userCardNumber" placeholder="Numéro de votre carte Visa" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="userPassword">Mot de passe:</Label>
                        <Input type="password" name="userPassword" id="userPassword" placeholder="Votre mot de passe" />
                    </FormGroup>
                    <Button color='primary'>Connexion</Button>
                </Form>
            </Row>
        </div>
    )
}

export default SignIn;