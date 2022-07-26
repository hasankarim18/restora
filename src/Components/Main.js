import React, { useState, useContext } from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'
import { Context } from '../Context/Context'

const Main = (props) => {

    const ctx = useContext(Context)

    return (
        <div>
            <Header />
            <Body />
            <main>
                <Meals />
            </main>
            {ctx.cartIsShown ? <Cart /> : null}

        </div>
    )
}

export default Main