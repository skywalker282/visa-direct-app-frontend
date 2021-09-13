
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classes from '../styles/Contact.module.scss'
import profile from '../cris.jpeg'

const Contact = props => {
    return (
        <>
            <div className={classes.contacts}>
                <div className={classes.contactCard}>
                    <div className={classes.contactIdentity}>
                        <img src={profile} alt="img" className={classes.contactProfile} />
                        <p className={classes.contactContent}>
                            <span>Bashonga Elvisse</span>
                            <span>Mbandaka</span>
                            <span>9094929838596894</span>
                        </p>
                    </div>
                    <div className={classes.contactAction}>
                        <Button size="sm" color="primary">Transfert</Button>
                    </div>
                </div>
                <div className={classes.contactCard}>
                    <div className={classes.contactIdentity}>
                        <img src={profile} alt="img" className={classes.contactProfile} />
                        <p className={classes.contactContent}>
                            <span>Bashonga Elvisse</span>
                            <span>Mbandaka</span>
                            <span>9094929838596894</span>
                        </p>
                    </div>
                    <div className={classes.contactAction}>
                        <Button size="sm" color="primary">Transfert</Button>
                    </div>
                </div>
                <div className={classes.contactCard}>
                    <div className={classes.contactIdentity}>
                        <img src={profile} alt="img" className={classes.contactProfile} />
                        <p className={classes.contactContent}>
                            <span>Bashonga Elvisse</span>
                            <span>Mbandaka</span>
                            <span>9094929838596894</span>
                        </p>
                    </div>
                    <div className={classes.contactAction}>
                        <Button size="sm" color="primary">Transfert</Button>
                    </div>
                </div>
                <div className={classes.contactCard}>
                    <div className={classes.contactIdentity}>
                        <img src={profile} alt="img" className={classes.contactProfile} />
                        <p className={classes.contactContent}>
                            <span>Bashonga Elvisse</span>
                            <span>Mbandaka</span>
                            <span>9094929838596894</span>
                        </p>
                    </div>
                    <div className={classes.contactAction}>
                        <Button size="sm" color="primary">Transfert</Button>
                    </div>
                </div>
                <div className={classes.contactCard}>
                    <div className={classes.contactIdentity}>
                        <img src={profile} alt="img" className={classes.contactProfile} />
                        <p className={classes.contactContent}>
                            <span>Bashonga Elvisse</span>
                            <span>Mbandaka</span>
                            <span>9094929838596894</span>
                        </p>
                    </div>
                    <div className={classes.contactAction}>
                        <Button size="sm" color="primary">Transfert</Button>
                    </div>
                </div>
                <div className={classes.contactCard}>
                    <div className={classes.contactIdentity}>
                        <img src={profile} alt="img" className={classes.contactProfile} />
                        <p className={classes.contactContent}>
                            <span>Bashonga Elvisse</span>
                            <span>Mbandaka</span>
                            <span>9094929838596894</span>
                        </p>
                    </div>
                    <div className={classes.contactAction}>
                        <Button size="sm" color="primary">Transfert</Button>
                    </div>
                </div>
                <div className={classes.contactCard}>
                    <div className={classes.contactIdentity}>
                        <img src={profile} alt="img" className={classes.contactProfile} />
                        <p className={classes.contactContent}>
                            <span>Bashonga Elvisse</span>
                            <span>Mbandaka</span>
                            <span>9094929838596894</span>
                        </p>
                    </div>
                    <div className={classes.contactAction}>
                        <Button size="sm" color="primary">Transfert</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;