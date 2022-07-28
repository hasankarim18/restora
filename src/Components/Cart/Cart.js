import React, { useContext } from 'react'
import CartItems from './CartItems'
import { CartContext } from '../../Store/CartContext'

const Cart = () => {

    const CartCtx = useContext(CartContext)
    const { items } = CartCtx.cartState

    const { totalPrice } = CartCtx.cartState

    console.log('amount', CartCtx.cartState.amount)
    console.log('totalPrice', CartCtx.cartState.totalPrice)

    // console.log(totalPrice.toFixed(2))

    //  console.log(items)

    return (
        <div>
            <ul>
                {
                    items.map(item => {
                        return (
                            <CartItems
                                name={item.name}
                                id={item.id}
                                amount={item.amount}
                                price={item.price}
                                key={Math.random()} />
                        )
                    })
                }

            </ul>
            <div className="d-flex justify-content-end">
                <strong>${totalPrice.toFixed(2)}/-</strong>
            </div>
        </div>
    )
}

export default Cart