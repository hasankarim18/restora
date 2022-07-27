import React from 'react'
import classes from './MenuCard.module.css'

const MenuCard = (props) => {
    return (
        <div onClick={props.onClick} style={{ padding: "10px" }} >
            <div className={classes.MenuCard} >
                <div className={classes.viewDetails} >View Details</div>
                <div className={classes.imageBox} >
                    <img className={classes.img} src={props.image} alt={props.alt} />
                    <div className={classes.imageOverlay}></div>
                </div>
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

export default MenuCard