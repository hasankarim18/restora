import React from 'react'
import Restaurent from '../../images/restaurent.jpg'
import classes from './Body.module.css'

const Body = () => {
    return (
        <div className={classes.body} style={{ position: "relative" }} >
            <div style={{ position: 'absolute', left: "0", top: "0", width: "100%", zIndex: "-1" }} >
                <img className={classes.bodyImg} style={{ width: "100%" }} src={Restaurent} alt="" />
            </div>
            <div className={classes.bodyContent} >
                <h1>We Provide quality food to your doorstep</h1>
            </div>
        </div>
    )
}

export default Body