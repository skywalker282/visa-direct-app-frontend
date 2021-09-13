import React from 'react'
import classes from '../styles/Appbar.module.scss'

const AppBar = props => {
    return (
        <div className={classes.appbar}>
            <a href="#" className={classes.brandLogo}>TransExpress</a>
            <a href="#" className={classes.closeIcon}><div className="material-icons">settings</div></a>
        </div>
    )
}

export default AppBar