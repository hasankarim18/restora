import React, { useContext, useState } from 'react'
import { CartContext } from '../../Store/CartContext'
import AddItem from '../Cart/AddItem'
import Cart from '../Cart/Cart'
import MenuCard from '../UI/MenuCard'
import Modal from '../UI/Modal'
import MealDetails from './MealDetails'




const Meals = () => {



    const CartCtx = useContext(CartContext)

    const showMenu = CartCtx.mealList.map(item => {
        return (
            <li className="col-11 col-sm-6 col-md-4 mb-3" key={item.id} >
                <MenuCard
                    onClick={CartCtx.showMealDetailHandler}
                    name={item.name}
                    image={item.image}
                    alt="beef"
                />
                <div>
                    <AddItem />
                </div>
            </li>
        )
    })

    return (
        <div>
            <div className="container pt-3">
                <h1>Select Type</h1>
                <ul style={{ listStyle: "none" }} className="row" >
                    {showMenu}
                </ul>
            </div>
            {
                CartCtx.showCart ?
                    <Modal
                        onClose={CartCtx.onHideCart}
                    >
                        <h1>Modal</h1>

                    </Modal> : ''
            }

            {
                CartCtx.showMealDetail ?
                    <Modal
                        onClose={CartCtx.hideMealDetailsHandler}
                    >
                        <MealDetails />
                    </Modal>
                    : null

            }

        </div>
    )
}

export default Meals