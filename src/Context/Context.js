import React from 'react'


export const Context = React.createContext({
    cartIsShown: '',
    onShowCart: () => { },
    onHideCart: () => { },
    items: [],
    totalAmount: 0,
    addItem: () => { },
    removeItem: (id) => { }
})
