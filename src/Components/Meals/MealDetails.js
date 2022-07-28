import React, { useContext } from 'react'
import { CartContext } from '../../Store/CartContext'


const MealDetails = (props) => {

    const CartCtx = useContext(CartContext)

    const id = CartCtx.selectedMealId

    const selectedMeal = CartCtx.mealList.filter(item => {
        return item.id === id
    })

    console.log(selectedMeal[0])
    return (
        <div className="text-dark" >
            <h1>Meal Name: {selectedMeal[0].name} </h1>
        </div>
    )
}

export default MealDetails