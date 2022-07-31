import React, { useContext, useEffect } from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import Meals from './Meals/Meals'
import { CartContext } from '../Store/CartContext'
import Modal from './UI/Modal'
import Cart from './Cart/Cart'
const Main = () => {



    const CartCtx = useContext(CartContext)


    return (
        <div>
            <Header />
            <Body />
            <Meals />

        </div>
    )
}

export default Main