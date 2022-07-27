import React, { useState, useReducer } from 'react'


export const Context = React.createContext({
    cartIsShown: '',
    showCart: () => { },
    hideCart: () => { },
    items: [],
    totalAmount: 0,
    addItem: () => { },
    removeItem: (id) => { }
})
