import React, { useContext } from 'react'
import CartItems from './CartItems'
import { CartContext } from '../../Store/CartContext'

const Cart = () => {

    const CartCtx = useContext(CartContext)
    const { items } = CartCtx.cartState

    const { totalPrice } = CartCtx.cartState

    ///  console.log('amount', CartCtx.cartState.amount)
    ///  console.log('totalPrice', CartCtx.cartState.totalPrice)

    // console.log(totalPrice.toFixed(2))

    // console.log(items)
    const addToCartHandler = item => {
        CartCtx.addItemHandler({ ...item, amount: 1 })
    }

    const removeFromCartHandler = id => {
        CartCtx.removeItemHandler(id)
    }

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
                                key={Math.random()}
                                addItem={() => addToCartHandler(item)}
                                removeItem={() => removeFromCartHandler(item.id)}
                            />
                        )
                    })
                }

            </ul>
            <div className="d-flex justify-content-end">
                <strong>${totalPrice.toFixed(2)}/-</strong>
            </div>
            <div className="d-flex justify-content-end" >
                <button onClick={CartCtx.onHideCart} className="btn btn-danger m-2" >Close</button>
                <button className="btn btn-success m-2" >Order</button>
            </div>
        </div>
    )
}

export default Cart