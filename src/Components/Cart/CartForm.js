import React, { useState } from 'react'
import classes from './CartForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const CartForm = (props) => {

    const [amount, setAmount] = useState(1)

    const submitHandler = event => {
        event.preventDefault()
        // console.log(amount)
        props.addItem(amount)
    }

    const inputChange = event => {
        setAmount(event.target.value)
    }

    return (
        <form onSubmit={submitHandler} >
            <div className={classes.cartForm} >
                <input
                    onChange={inputChange}
                    value={amount} type="number" min="1" step="1" />
                <button  >Add to <FontAwesomeIcon className={classes.cart} icon={faCartArrowDown} /></button>
            </div>
        </form>
    )
}

export default CartForm