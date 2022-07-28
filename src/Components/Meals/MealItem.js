import React, { useContext } from 'react'
import MenuCard from '../UI/MenuCard'
import AddItem from '../Cart/AddItem'
import { CartContext } from '../../Store/CartContext'
import Modal from '../UI/Modal'
import MealDetails from './MealDetails'



const MealItem = (props) => {

    const CartCtx = useContext(CartContext)

    const addItem = amount => {
        console.log(amount)
        const item = {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }
        console.log(item)
        CartCtx.addItemHandler(item)
    }

    return (
        <li className="col-11 col-sm-6 col-md-4 mb-3" key={props.id} >
            <MenuCard
                onClick={() => CartCtx.showMealDetailHandler(props.id)}
                name={props.name}
                image={props.image}
                alt="beef"
                price={props.price}
            />
            <div>
                <AddItem addItem={addItem} />
            </div>

            {/* dish DEtail */}
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
}

export default MealItem