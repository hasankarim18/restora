import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'

const MealitemForm = (props) => {

    const submitHadler = event => {
        event.preventDefault()
    }

    return (
        <form className={classes.form} >
            <Input
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
        </form>
    )
}

export default MealitemForm