import React, { useState, useReducer } from 'react'
import { Context } from './Context'

export const ContextProvider = (props) => {


    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }


    const addItemFromCartHandler = item => { }

    const removeItemFromCartHandler = id => { }


    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler,
        cartIsShown: cartIsShown,
        onShowCart: showCartHandler,
        onHideCart: hideCartHandler
    }



    return (
        <Context.Provider
            value={CartContext}
        >
            {props.children}
        </Context.Provider >
    )

}

