import React, { useState } from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'

const Main = (props) => {

    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }


    return (
        <div>
            <Header onShowCart={showCartHandler} />
            <Body />
            <main>
                <Meals />
            </main>
            {cartIsShown ? <Cart onHideCart={hideCartHandler} /> : null}

        </div>
    )
}

export default Main