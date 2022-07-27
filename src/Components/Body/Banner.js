import React from 'react'
import BannerImg from '../../assets/images/banner.jpg'
import classes from './Banner.module.css'
import BannerContent from './BannerContent'



const Banner = () => {
    return (
        <div className={classes.banner} >
            <img className={classes.banner_img} src={BannerImg} alt="" />
            <BannerContent />
        </div>
    )
}

export default Banner