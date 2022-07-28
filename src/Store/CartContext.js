import React from 'react'




export const CartContext = React.createContext({
    mealList: [],
    onShowCart: () => { },
    onHideCart: () => { },
    showCart: false,
    showMealDetail: false,
    hideMealDetailsHandler: () => { },
    showMealDetailHandler: () => { },
    selectedMealId: ''
})