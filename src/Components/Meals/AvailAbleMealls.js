import React from 'react'
import { MealData } from '../../Data/MealData'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealIem from './MealIem'

const AvailAbleMealls = () => {

    const MealList = MealData.map((meal) => {
        return (
            <MealIem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )
    })

    return (
        <div className={classes.meals} >
            <Card style={{ color: "black" }} >
                <ul>
                    {
                        MealList
                    }
                </ul>
            </Card>

        </div>
    )
}

export default AvailAbleMealls