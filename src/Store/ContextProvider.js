import React, { useState, useReducer } from 'react'
import { CartContext } from "./CartContext";
import { MealData } from '../Data/MealData'

const cartDefaultState = {
    items: [],
    amount: 0,
    totalPrice: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedPrice = state.totalPrice + action.payload.price * action.payload.amount
        console.log(updatedPrice)

        const newCartItem = action.payload

        return {
            ...state,
            items: state.items.concat(newCartItem),
            amount: action.payload.amount,
            totalPrice: updatedPrice
        }
    }
    return state
}




export const ContextProvider = (props) => {

    const [showCart, setShowCart] = useState(false)
    const [showMealDetail, setMhowMealDetail] = useState(false)
    const [selectedMealId, setSelectedMealId] = useState('')

    const [cartState, dispatchCartAction] = useReducer(cartReducer, cartDefaultState)

    const addItemHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            payload: item
        })
    }

    const removeItemHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            payload: id
        })
    }


    const showCartHandler = () => {
        setShowCart(true)
    }

    const hideCartHandler = () => {
        console.log('hide cart')
        setShowCart(false)
    }

    const showMealDetailHandler = (id) => {
        setMhowMealDetail(true)
        setSelectedMealId(id)
    }

    const hideMealDetailsHandler = () => {
        //  console.log('hide meal detail')
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
                showMealDetail: showMealDetail,
                selectedMealId: selectedMealId,
                addItemHandler: addItemHandler,
                removeItemHandler: removeItemHandler,
                cartState: cartState

            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

