import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealitemForm from './MealitemForm'
import { Context } from '../../Context/Context'


const MealIem = (props) => {

    const cartCtx = useContext(Context)

    const price = `$${props.price.toFixed(2)}`

    //   console.log(props)
    const addToCartHandler = amount => {
        // console.log(amount)
        // console.log(props.price)
        // console.log(props.name)
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }


    return (
        <li className={classes.meal} >
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description} >{props.description}</div>
                <div className={classes.price} >{price}</div>
            </div>
            <div>
                <MealitemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealIem