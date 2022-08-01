import React, { useContext } from 'react'
import { CartContext } from '../../Store/CartContext'


const MealDetails = (props) => {

    const CartCtx = useContext(CartContext)

    const id = CartCtx.selectedMealId
    //  console.log(id)
    const selectedMeal = CartCtx.mealList.filter(item => {
        return item.id === id
    })
    //  console.log(CartCtx.mealList)
    const { name, image, description, type, price } = selectedMeal[0]
    console.log(selectedMeal)
    return (
        <div className="text-dark" >
            <h1>Meal Name: {name} </h1>
            <img style={{ maxWidth: "100%" }} className="image-fluid" src={image} alt="" />
            <div className="d-flex justify-content-between">
                <span>{price}</span>
                <span style={{ textTransform: "capitalize" }} >{type}</span>
            </div>
            <p>
                {description}
            </p>
            <div className="text-end">
                <button onClick={CartCtx.hideMealDetailsHandler} className="btn btn-warning" >Close</button>
            </div>
        </div>
    )
}

export default MealDetails