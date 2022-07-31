import React, { useContext } from 'react'
import { CartContext } from '../../Store/CartContext'
import classes from './CartItems.module.css'


const CartItems = (props) => {
    const CartCtx = useContext(CartContext)

    const Subtotal = props.amount * props.price

    // console.log(props)
    return (
        <li className={classes.cartItems} >
            <div className="row">
                <div className="col-6">
                    <div><h4>{props.name}</h4></div>
                    <div className="d-flex justify-content-between align-items-center" >
                        <div>Unit Price: <span className="text-danger">{props.price}</span> </div>
                        <div>
                            <span>{props.amount}</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="">
                        <div className="d-flex justify-content-end align-items-center">
                            <span onClick={props.removeItem} className={classes.action} >-</span>
                            <span onClick={props.addItem} className={classes.action} >+</span>
                        </div>
                        <div style={{ marginRight: "10px" }} className="d-flex justify-content-end align-items-center">
                            <span >{Subtotal} </span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItems