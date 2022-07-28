import React from 'react'
import Navigation from './Navigation'
import classes from './Header.module.css'
import CartButton from './CartButton'

const Header = () => {
    return (
        <header className={`${classes.main_header}`} >
            <Navigation />
            <CartButton />
        </header>
    )
}

export default Header