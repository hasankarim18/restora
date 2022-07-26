import React from 'react'
import Navigation from './Navigation'
import classes from './Header.module.css'
import CartButton from './CartButton'

const Header = (props) => {
    return (
        <header style={{ zIndex: "10" }} className={`${classes.main_header}`} >
            <Navigation />
            <CartButton onShowCart={props.onShowCart} />
        </header>
    )
}

export default Header