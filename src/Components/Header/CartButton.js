import React from 'react'
import classes from './CartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const CartButton = (props) => {
    return (
        <div className={`${classes.CartButton}`} >
            <div className="d-flex justify-content-center align-items-center" >
                <span>
                    <FontAwesomeIcon icon={faCartArrowDown} />
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