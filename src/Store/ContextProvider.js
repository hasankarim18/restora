import React, { useState } from 'react'
import { CartContext } from "./CartContext";
import { MealData } from '../Data/MealData'






export const ContextProvider = (props) => {

    const [showCart, setShowCart] = useState(false)
    const [showMealDetail, setMhowMealDetail] = useState(false)

    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        setShowCart(false)
    }

    const showMealDetailHandler = () => {
        setMhowMealDetail(true)
    }

    const hideMealDetailsHandler = () => {
        setMhowMealDetail(false)
    }

    return (
        <CartContext.Provider
            value={{
                mealList: MealData,
                onShowCart: showCartHandler,
                onHideCart: hideCartHandler,
                showCart: showCart,
                showMealDetailHandler: showMealDetailHandler,
                hideMealDetailsHandler: hideMealDetailsHandler,
                showMealDetail: showMealDetail
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

