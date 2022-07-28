import React, { useContext } from 'react'
import classes from './CartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Store/CartContext'

const CartButton = (props) => {

    const ctx = useContext(CartContext)


    return (
        <div onClick={ctx.onShowCart} className={`${classes.CartButton}`} >
            <div className="d-flex justify-content-center align-items-center" >
                <span>
                    <FontAwesomeIcon className={classes.cart} icon={faCartArrowDown} />
                </span>

                <span className="ms-1 me-1" >
                    Visit Your Cart:
                </span>
                <span>
                    <span className={classes.cartNumber} >
                        0
                    </span>
                </span>
            </div>
        </div>
    )
}

export default CartButton