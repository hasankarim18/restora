import React, { useContext, useState, useEffect } from 'react'
import classes from './CartButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../Store/CartContext'
import Modal from '../UI/Modal'
import Cart from '../Cart/Cart'

const CartButton = (props) => {
    const [scroll, setScroll] = useState(false)
    const [showtext, setShowText] = useState(true)
    const CartCtx = useContext(CartContext)

    const { items } = CartCtx.cartState

    // console.log(items)
    const numberOfCartItem = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
            //setShowText(!window.scrollY > 10)
            if (window.scrollY > 100) {
                setShowText(false)

            } else {
                setShowText(true)
            }

        })

    }, [])


    return (
        <div onClick={CartCtx.onShowCart} className={`${classes.CartButton} ${scroll ? classes.positionOnScroll : classes.postionOnTop}`} >
            <div className="d-flex justify-content-center align-items-center" >
                <span>
                    <FontAwesomeIcon className={classes.cart} icon={faCartArrowDown} />
                </span>
                <span className={`ms-1 me-1 ${showtext ? classes.show : classes.hide}`} >
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