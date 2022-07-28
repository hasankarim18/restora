import React, { useContext, useEffect } from 'react'
import Body from './Body/Body'
import Header from './Header/Header'
import Meals from './Meals/Meals'
import { CartContext } from '../Store/CartContext'
import Modal from './UI/Modal'
import Cart from './Cart/Cart'
const Main = () => {



    const CartCtx = useContext(CartContext)


    return (
        <div>
            <Header />
            <Body />
            <Meals />
            {
                CartCtx.showCart ?
                    <Modal
                        className="text-dark"
                        onClose={CartCtx.onHideCart}
                    >
                        <div className="text-dark">
                            <Cart />
                            <div>
                                <button onClick={CartCtx.onHideCart} className="btn btn-warning">Close</button>
                            </div>
                        </div>
                    </Modal> : ''
            }
        </div>
    )
}

export default Main