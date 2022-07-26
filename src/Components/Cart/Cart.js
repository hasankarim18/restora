import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { Context } from '../../Context/Context'


const Cart = (props) => {


    const ctx = useContext(Context)

    const cartItems = [{ id: "c1", name: "fishfry", amount: "2", price: "10.00" }].map(item => {
        return <li key={item.id} >{item.name}</li>
    })



    return (
        <Modal onClose={ctx.onHideCart} >
            <div style={{ color: 'black' }} >
                <ul className={classes['cart-items']} >
                    {cartItems}
                </ul>

                <div className={classes.total} >
                    <span>Total Amout: </span>
                    <span>35</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={ctx.onHideCart} className={classes['button-alt']}  >Close</button>
                    <button className={classes.button} >Order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart