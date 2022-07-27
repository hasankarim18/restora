import React, { useState, useReducer, useEffect } from 'react'
import { Context } from './Context'



// const defaultCartState = {
//     items: [],
//     totalAmount: 0
// }
const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
            //   const updatedItems = state.items.concat(action.payload)
            //  console.log(state)
            //  console.log(action.payload.id)
            const items = [...state.items]

            const existingCartItemIndex = items.findIndex(item => item.id === action.payload.id)

            const existingCartItem = items[existingCartItemIndex]

            let updatedItems = [];

            if (existingCartItem) {
                let updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                }

                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            } else {

                updatedItems = state.items.concat(action.payload)
            }
            //  console.log('updated items', updatedItems)
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        case 'REMOVE':
            console.log('payload id', action.payload)



            const currentItemIndex = state.items.findIndex(item => item.id === action.payload)
            const currentItem = state.items[currentItemIndex]

            const currentTotalAmout = state.totalAmount - currentItem.price

            let updatedItemsAfterRemove;

            if (currentItem.amount === 1) {
                // we want to remove the item from the array
                updatedItemsAfterRemove = state.items.filter(item => {
                    return item.id !== action.payload
                })
            } else {
                // if the amout is greater thant one 
                const newAmount = {
                    ...currentItem,
                    amount: currentItem.amount - 1
                }

                updatedItemsAfterRemove = [...state.items]
                updatedItemsAfterRemove[currentItemIndex] = newAmount

            }

            return {
                items: updatedItemsAfterRemove,
                totalAmount: currentTotalAmout
            }


        default:
            return state
    }

}


export const ContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    // when a item is added to cart first we want to check that the item is already present if present we want to update the item otherwise we want to remove the item
    const addItemFromCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            payload: item
        })
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            payload: id
        })
    }


    const CartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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

