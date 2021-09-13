
import { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Account from './Account';
import Notification from './Notification';
import Contact from './Contact';
import classnames from 'classnames';
import classes from '../styles/Panel.module.scss'

const Panel = props => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>

            <div className="app-hero">
                <h2>Express Transfert Platform</h2>
            </div>
            <div className={classes.panel}>
                <div className={classes.aside}>
                    <h4 className="">EXPRESS TRANSFERT</h4>
                    <span>Transférer votre argent en sécurité et sans limites</span>
                    <p>Avec votre compte Express Trans , vous pouvez dès alors soutenir vos proches utilisant Visa direct partout sur la planète</p>
                    <span>Express Transfert 2021. All rights reserved</span>
                </div>
                <div className={classes.content}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Mon compte
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Notifications
          </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggle('3'); }}
                            >
                                Contact
          </NavLink>
                        </NavItem>
                    </Nav>
                    <div className={classes.accountPanel}>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Account />
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Notification />
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Contact />
                                </Row>
                            </TabPane>
                        </TabContent>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Panel;