import React, { useContext, useState } from 'react'
import { CartContext } from '../../Store/CartContext'
import MealItem from './MealItem'
import Modal from '../UI/Modal'
import Cart from '../Cart/Cart'
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
                // CartCtx.showCart ?
                //     <Modal
                //         className="text-dark"
                //         onClose={CartCtx.onHideCart}
                //     >
                //         <div className="text-dark">
                //             <Cart />
                //             <div>
                //                 <button onClick={CartCtx.onHideCart} className="btn btn-warning">Close</button>
                //             </div>
                //         </div>
                //     </Modal> : ''
            }
        </div>
    )
}

export default Meals