import React, { useContext, useState } from 'react'
import { CartContext } from '../../Store/CartContext'
import Modal from '../UI/Modal'
import MealItem from './MealItem'
import MealTypeSelect from './MealTypeSelect'




const Meals = () => {
    const CartCtx = useContext(CartContext)
    const [MenuItems, setMenuItems] = useState(CartCtx.mealList)


    const filter = (type) => {

        if (type === 'all') {
            setMenuItems(CartCtx.mealList)
        } else {
            const filterMenu = CartCtx.mealList.filter(item => {
                return item.type === type
            })
            setMenuItems(filterMenu)
        }
    }



    return (
        <div>
            <div className="container pt-3">
                <h1>Select Type</h1>
                <MealTypeSelect filter={filter} />

                <ul style={{ listStyle: "none" }} className="row" >
                    {
                        MenuItems.map(item => {
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



        </div>
    )
}

export default Meals