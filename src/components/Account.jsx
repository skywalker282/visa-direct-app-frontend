
import classes from '../styles/Account.module.scss'
import { Button, Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Account = props => {
    return (
        <>
            <div className={classes.accountPanel}>
                <div className={classes.lastTransaction}>
                    <h4 className={classes.contentTitle}>LAST TRANSACTION</h4>
                    <div className={classes.transaction}>
                        <div className={classes.transCard}>
                            <div className={classes.transBody}>
                                <div className={classes.bodyContent}>
                                    <span>Bénéficiaire</span>
                                    <span>{`Alexandre Tattoo`}</span>
                                </div>
                                <div className={classes.bodyContent}>
                                    <span>Montant</span>
                                    <span>{`${100} ${'EUR'}`}</span>
                                </div>
                            </div>
                            <small className={classes.transFoot}>22/09/2020</small>
                        </div>
                        <div className={classes.transCard}>
                            <div className={classes.transBody}>
                                <div className={classes.bodyContent}>
                                    <span>Bénéficiaire</span>
                                    <span>{`Alexandre Tattoo`}</span>
                                </div>
                                <div className={classes.bodyContent}>
                                    <span>Montant</span>
                                    <span>{`${100} ${'EUR'}`}</span>
                                </div>
                            </div>
                            <small className={classes.transFoot}>22/09/2020</small>
                        </div>
                        <div className={classes.transCard}>
                            <div className={classes.transBody}>
                                <div className={classes.bodyContent}>
                                    <span>Bénéficiaire</span>
                                    <span>{`Alexandre Tattoo`}</span>
                                </div>
                                <div className={classes.bodyContent}>
                                    <span>Montant</span>
                                    <span>{`${100} ${'EUR'}`}</span>
                                </div>
                            </div>
                            <small className={classes.transFoot}>22/09/2020</small>
                        </div>
                        <div className={classes.transCard}>
                            <div className={classes.transBody}>
                                <div className={classes.bodyContent}>
                                    <span>Bénéficiaire</span>
                                    <span>{`Alexandre Tattoo`}</span>
                                </div>
                                <div className={classes.bodyContent}>
                                    <span>Montant</span>
                                    <span>{`${100} ${'EUR'}`}</span>
                                </div>
                            </div>
                            <small className={classes.transFoot}>22/09/2020</small>
                        </div>
                        <div className={classes.transCard}>
                            <div className={classes.transBody}>
                                <div className={classes.bodyContent}>
                                    <span>Bénéficiaire</span>
                                    <span>{`Alexandre Tattoo`}</span>
                                </div>
                                <div className={classes.bodyContent}>
                                    <span>Montant</span>
                                    <span>{`${100} ${'EUR'}`}</span>
                                </div>
                            </div>
                            <small className={classes.transFoot}>22/09/2020</small>
                        </div>
                        <div className={classes.transCard}>
                            <div className={classes.transBody}>
                                <div className={classes.bodyContent}>
                                    <span>Bénéficiaire</span>
                                    <span>{`Alexandre Tattoo`}</span>
                                </div>
                                <div className={classes.bodyContent}>
                                    <span>Montant</span>
                                    <span>{`${100} ${'EUR'}`}</span>
                                </div>
                            </div>
                            <small className={classes.transFoot}>22/09/2020</small>
                        </div>
                        <div className={classes.transCard}>
                            <div className={classes.transBody}>
                                <div className={classes.bodyContent}>
                                    <span>Bénéficiaire</span>
                                    <span>{`Alexandre Tattoo`}</span>
                                </div>
                                <div className={classes.bodyContent}>
                                    <span>Montant</span>
                                    <span>{`${100} ${'EUR'}`}</span>
                                </div>
                            </div>
                            <small className={classes.transFoot}>22/09/2020</small>
                        </div>
                    </div>
                </div>
                <div className={classes.balanceStatus}>
                    <h4 className={classes.contentTitle}>MY PORTFOLIO</h4>
                    <p className={classes.statusHead}>
                        <span>Devises</span>
                        <span>Montant</span>
                    </p>
                    <div className={classes.statusBody}>
                        <p className={classes.statusRow}>
                            <span>Dollar(USD)</span>
                            <span>34500</span>
                        </p>
                        <p className={classes.statusRow}>
                            <span>Euros(EUR)</span>
                            <span>3400</span>
                        </p>
                        <p className={classes.statusRow}>
                            <span>Francs congolais(FC)</span>
                            <span>4900</span>
                        </p>
                    </div>
                </div>
            </div>
            <p className={classes.billAction}>
                <Button color="primary">Nouvelle transaction</Button>
            </p>
        </>
    )
}

export default Account;