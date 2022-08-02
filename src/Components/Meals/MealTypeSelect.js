import React from 'react'
import classes from './MealTypeSelect.module.css'



const MealTypeSelect = (props) => {


    // console.log(mode)


    const btnArray = [
        { label: 'meat' },
        { label: 'fish' },
        { label: 'fastFood' },
        { label: 'vegan' },
        { label: 'all' },
    ]

    const onClickHandler = (label) => {
        //setMode(!mode)
        props.filter(label)

    }


    return (
        <div className={classes.MealTypeSelect}>
            <div className="container">
                <div className="row">
                    <div className="d-flex col-md-6 col-12 justify-content-between">

                        {
                            btnArray.map((item, index) => {
                                return (
                                    <button
                                        onClick={() => onClickHandler(item.label)}
                                        className="btn btn-warning"
                                        key={index}
                                        style={{
                                            textTransform: 'capitalize'
                                        }}
                                    >{item.label}</button>
                                )
                            })
                        }

                        {/* 
                        <button onClick={() => props.filter('meat')} className="btn btn-warning" >Meat</button>
                        <button onClick={() => props.filter('fish')} className="btn btn-warning" >Fish</button>
                        <button onClick={() => props.filter('fastFood')} className="btn btn-warning" >Fast Food</button>
                        <button onClick={() => props.filter('vegan')} className="btn btn-warning" >Vegan</button>
                        <button onClick={() => props.filter('all')} className="btn btn-warning" >All</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealTypeSelect