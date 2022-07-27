import React from 'react'
import classes from './BannerContent.module.css'
const BannerContent = () => {

    const classesList = `${classes.bannerContent}`


    return (
        <div className={classesList}>
            <h1>We Prvide Excellent Food At Your Doorstep</h1>
        </div>
    )
}

export default BannerContent