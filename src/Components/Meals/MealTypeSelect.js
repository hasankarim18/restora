import React from 'react'
import classes from './MealTypeSelect.module.css'


const MealTypeSelect = (props) => {



    return (
        <div className={classes.MealTypeSelect}>

            <div className="container">
                <div className="d-flex justify-content-between">
                    <button onClick={() => props.filter('meat')} className="btn btn-warning" >Meat</button>
                    <button onClick={() => props.filter('fish')} className="btn btn-warning" >Fish</button>
                    <button onClick={() => props.filter('fastFood')} className="btn btn-warning" >Fast Food</button>
                    <button onClick={() => props.filter('vegan')} className="btn btn-warning" >Vegan</button>
                    <button onClick={() => props.filter('all')} className="btn btn-warning" >All</button>
                </div>
            </div>
        </div>
    )
}

export default MealTypeSelect