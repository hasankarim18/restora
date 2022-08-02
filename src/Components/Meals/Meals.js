import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../Store/CartContext'
import MealItem from './MealItem'
import Modal from '../UI/Modal'
import Cart from '../Cart/Cart'
import MealTypeSelect from './MealTypeSelect'
import { motion } from 'framer-motion'

const Meals = (props) => {
    const CartCtx = useContext(CartContext)
    // const [MenuItems, setMenuItems] = useState(CartCtx.mealList)
    const [MenuItems, setMenuItems] = useState([])
    const isMealLoading = CartCtx.isMealLoading
    const [showFilter, setShowFilter] = useState(false)

    const handleShowFilter = () => {

    }

    const filter = (type) => {
        setShowFilter(true)
        if (type === 'all') {
            setMenuItems(CartCtx.mealList)
        } else {
            const filterMenu = CartCtx.mealList.filter(item => {
                return item.type === type
            })
            setMenuItems(filterMenu)
        }
    }

    let showMeal = null



    if (showFilter === false) {
        showMeal = props.meals.map(item => {
            return (
                <MealItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                />
            )
        })
    } else if (showFilter === true) {
        showMeal = MenuItems.map(item => {
            return (
                <MealItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                />
            )
        })
    }

    return (
        <div>
            <div className="container pt-3">
                <h1>Select Type</h1>
                <MealTypeSelect filter={filter} />

                {
                    isMealLoading ? <h1>Loading ...</h1> : ''
                }

                <motion.div layout style={{ listStyle: "none" }} className="row" >
                    {showMeal}
                </motion.div>
            </div>

            {
                CartCtx.showCart ?
                    <Modal
                        className="text-dark"
                        onClose={CartCtx.onHideCart}
                    >
                        <div className="text-dark">
                            <Cart onAdd={CartCtx.addItemHandler} />
                        </div>
                    </Modal> : ''
            }

        </div>
    )
}

export default Meals