import React from 'react'
import classes from '../styles/Signin.module.scss';
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const SignIn = props => {
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        history.push('/account');
    }
    return (
        <div className="connect">
            <h3>Connexion</h3>
            <Row>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">E-mail:</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Mot de passe:</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Numero Carte Visa:</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button color='primary' onClick={handleSubmit}>Connexion</Button>
                </Form>
            </Row>
        </div>
    )
}

export default SignIn;