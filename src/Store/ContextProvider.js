import React from 'react'
import { CartContext } from "./CartContext";
import { MealData } from '../Data/MealData'






export const ContextProvider = (props) => {
    return (
        <CartContext.Provider
            value={{
                mealList: MealData
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

