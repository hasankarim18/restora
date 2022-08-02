import React, { useState, useReducer, useEffect } from 'react'
import { CartContext } from "./CartContext";
import { MealData } from '../Data/MealData'
import { url } from './url'

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

        let updatedItems = []

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


    if (action.type === 'REMOVE') {
        console.log('payload id', action.payload)

        const currentItemIndex = state.items.findIndex(item => item.id === action.payload)
        const currentItem = state.items[currentItemIndex]

        const currentTotalAmout = state.totalPrice - currentItem.price

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
                amount: currentItem.amount - 1,

            }

            updatedItemsAfterRemove = [...state.items]
            updatedItemsAfterRemove[currentItemIndex] = newAmount

        }

        return {
            items: updatedItemsAfterRemove,
            totalPrice: currentTotalAmout,

        }


    }

}

const mealState = {
    mealList: [],
    isMealLoading: true,
    mealLoaded: false

}

const mealReducer = (state, action) => {

    if (action.type === 'GET_MEAL') {
        const data = action.payload;
        let list = []

        for (const key in data) {
            list.push({
                id: key,
                name: data[key].name,
                price: data[key].price,
                type: data[key].type,
                image: data[key].image
            })
        }

        return {
            ...state,
            mealList: list,
            isMealLoading: false,
            mealLoad: true
        }

    }

    if (action.type === 'MEAL_LOADING') {
        return {
            ...state,
            isMealLoading: action.payload,
        }
    }
    return state
}

const displayMenuState = {
    mode: true
}

const displyMenuReducer = (state, action) => {
    if (action.type === 'TOGGLE_DISPLAY_MENU') {
        return {
            ...state,
            mode: !state.mode
        }
    }
    return state
}


export const ContextProvider = (props) => {

    const [showCart, setShowCart] = useState(false)
    const [showMealDetail, setMhowMealDetail] = useState(false)
    const [selectedMealId, setSelectedMealId] = useState('')

    /// meal related 
    const [mealLoad, setMealLoad] = useState(false)
    const [meals, mealDispatch] = useReducer(mealReducer, mealState)

    // dispaly menu 
    const [displayMenuToggle, displayMenuDispatch] = useReducer(displyMenuReducer, displayMenuState)


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

    // item add from cart
    const mealLoading = (status) => {
        mealDispatch({
            type: 'MEAL_LOADING',
            payload: status
        })
    }

    const getMealData = () => {
        mealLoading(true)
        const link = url + 'restora-meal-list.json'

        fetch(link)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                mealDispatch({
                    type: 'GET_MEAL',
                    payload: data
                })
                setMealLoad(true)
                mealLoading(false)
            })

    }

    const displyMenuHandler = () => {
        displayMenuDispatch({
            type: 'TOGGLE_DISPLAY_MENU'
        })
    }


    useEffect(() => {
        //  console.log('mealdata', MealData)
        getMealData()
        //  console.log('mealList', meals.mealList)

    }, [])



    return (
        <CartContext.Provider
            value={{
                mealList: meals.mealList,
                isMealLoading: meals.isMealLoading,
                onShowCart: showCartHandler,
                onHideCart: hideCartHandler,
                showCart: showCart,
                showMealDetailHandler: showMealDetailHandler,
                hideMealDetailsHandler: hideMealDetailsHandler,
                showMealDetail: showMealDetail,
                selectedMealId: selectedMealId,
                addItemHandler: addItemHandler,
                removeItemHandler: removeItemHandler,
                cartState: cartState,
                items: cartState.items,
                displyMenuHandler: displyMenuHandler,
                displayMenuToggle: displayMenuToggle.mode
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

