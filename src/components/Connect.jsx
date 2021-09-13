
import { useState } from 'react';
import classnames from 'classnames';
import SignIn from './Signin';
import SignUp from './Signup';
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Connect = props => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>

            <div className="app-hero">
                <h1>BIENVENUE SUR EXPRESS-TRANSFERT</h1>
                <span className="hero-foot">Transférer votre argent en toute sécurité.</span>
            </div>
            <div className="connect-form">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Inscription
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Connexion
          </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <SignUp />
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <SignIn />
                    </TabPane>
                </TabContent>

            </div>

        </>
    )
}

export default Connect;