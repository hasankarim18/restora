import React from 'react'
import classes from './MenuCard.module.css'

const MenuCard = (props) => {
    return (
        <div style={{ padding: "10px" }} >
            <div className={classes.MenuCard} >
                <div className={classes.imageBox} >
                    <img src={props.image} alt={props.alt} />
                    <div className={classes.imageOverlay}></div>
                </div>
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

export default MenuCard