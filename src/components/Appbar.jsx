import React from 'react'
import classes from '../styles/Appbar.module.scss'

const AppBar = props => {
    return (
        <div className={classes.appbar}>
            <a href="#" className="material-icons menu-icon">menu</a>
            <a href="#" className="material-icons close-icon">power_settings_new</a>
        </div>
    )
}

export default AppBar