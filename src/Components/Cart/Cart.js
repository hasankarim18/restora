import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { Context } from '../../Context/Context'
import CartItem from './CartItem'


const Cart = (props) => {


    const cartCtx = useContext(Context)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = (id) => {

    }

    const cartItemAddHandler = item => { }

    const cartItems = cartCtx.items.map(item => {
        return <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
        // bind preconfigures the function what it will receive
    })



    return (
        <Modal onClose={cartCtx.onHideCart} >
            <div style={{ color: 'black' }} >
                <ul className={classes['cart-items']} >
                    {cartItems}
                </ul>

                <div className={classes.total} >
                    <span>Total Amout: </span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={cartCtx.onHideCart} className={classes['button-alt']}  >Close</button>
                    {hasItems && <button className={classes.button} >Order</button>}

                </div>
            </div>
        </Modal>
    )
}

export default Cart