import React, { useContext, useEffect, useState } from 'react'
import classes from './CartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../../Context/Context'


const CartButton = (props) => {
    const [btnHighlight, setBtnHighlight] = useState(false)
    const ctx = useContext(Context)
    // console.log(ctx)

    const { items } = ctx

    const numberOfCartItem = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    const btnClasses = `${classes.CartButton} ${btnHighlight ? classes.bump : ''}`

    useEffect(() => {
        if (ctx.items.length === 0) {
            return
        }
        setBtnHighlight(true)

        const timer = setTimeout(() => {
            setBtnHighlight(false)
        }, 300);
        // cleneup function or debouncing
        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return (
        <div onClick={ctx.onShowCart} className={btnClasses} >
            <div className="d-flex justify-content-center align-items-center" >
                <span>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </span>

                <span className="ms-1 me-1" >
                    Visit Your Cart:
                </span>
                <span>
                    <span className={classes.cartNumber} >
                        {numberOfCartItem}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default CartButton