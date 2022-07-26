import React, { useState } from 'react'


export const Context = React.createContext({
    cartIsShown: '',
    showCart: () => { },
    hideCart: () => { }
})


export const ContextProvider = (props) => {


    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }



    return (
        <Context.Provider
            value={{
                cartIsShown: cartIsShown,
                onShowCart: showCartHandler,
                onHideCart: hideCartHandler
            }}
        >
            {props.children}
        </Context.Provider >
    )

}

