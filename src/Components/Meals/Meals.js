import React, { useContext, useState } from 'react'
import { CartContext } from '../../Store/CartContext'
import AddItem from '../Cart/AddItem'
import Cart from '../Cart/Cart'
import MenuCard from '../UI/MenuCard'
import Modal from '../UI/Modal'
import MealDetails from './MealDetails'
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
                                <li className="col-11 col-sm-6 col-md-4 mb-3" key={item.id} >
                                    <MenuCard
                                        onClick={() => CartCtx.showMealDetailHandler(item.id)}
                                        name={item.name}
                                        image={item.image}
                                        alt="beef"
                                        price={item.price}
                                    />
                                    <div>
                                        <AddItem />
                                    </div>
                                    {
                                        CartCtx.showMealDetail ?
                                            <Modal
                                                onClose={CartCtx.hideMealDetailsHandler}
                                            >
                                                <MealDetails />
                                            </Modal>
                                            : null
                                    }
                                </li>
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