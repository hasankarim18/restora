import React from 'react'




export const CartContext = React.createContext({
    mealList: [],
    onShowCart: () => { },
    onHideCart: () => { },
    showCart: '',
    showMealDetail: false,
    hideMealDetailsHandler: () => { },
    showMealDetailHandler: () => { },
    selectedMealId: '',
    addItemHandler: () => { },
    removeItemHandler: () => { },
    cartState: {},
    items: ''

})