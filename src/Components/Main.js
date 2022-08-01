import React, { useContext, useEffect } from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import Meals from './Meals/Meals'
import { CartContext } from '../Store/CartContext'
import Modal from './UI/Modal'
import Cart from './Cart/Cart'
const Main = () => {



    const CartCtx = useContext(CartContext)

    const meals = CartCtx.mealList
    // console.log(meals)

    return (
        <div>
            <Header />
            <Body />
            <Meals meals={meals} />

        </div>
    )
}

export default Main