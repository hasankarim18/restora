import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'


const MealitemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmoutNumber = +enteredAmount
        //console.log(enteredAmoutNumber)
        if (enteredAmount.trim().length === 0 || enteredAmoutNumber < 1 || enteredAmoutNumber > 5) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmoutNumber)
    }

    return (
        <form onSubmit={submitHandler} className={classes.form} >
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount',
                    type: "number",
                    min: "1",
                    max: "5",
                    spte: "1",
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter valid amount 1-5</p>}
        </form>
    )
}

export default MealitemForm