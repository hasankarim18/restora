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
        const items = state.items

        //   console.log(updatedPrice)
        const existingCartIndex = items.findIndex(item => {
            return item.id === action.payload.id
        })

        const existingCartItem = items[existingCartIndex]
        console.log(existingCartItem)
        let updatedItems = []
        const newCartItem = action.payload

        if (existingCartItem) {
            const updateItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.payload.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartIndex] = updateItem

        } else {
            updatedItems = state.items.concat(action.payload)
        }

        return {
            ...state,
            items: updatedItems,
            amount: action.payload.amount,
            totalPrice: updatedPrice
        }

    }

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

