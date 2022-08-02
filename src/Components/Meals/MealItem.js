import React, { useContext } from 'react'
import MenuCard from '../UI/MenuCard'
import AddItem from '../Cart/AddItem'
import { CartContext } from '../../Store/CartContext'
import Modal from '../UI/Modal'
import MealDetails from './MealDetails'

import { motion } from 'framer-motion'



const MealItem = (props) => {

    const CartCtx = useContext(CartContext)

    const mode = CartCtx.displayMenuToggle

    const addItem = amount => {
        //   console.log(amount)
        const item = {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }
        //  console.log(item)
        CartCtx.addItemHandler(item)
    }

    const transitionStyle = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 1 }
    }

    return (

        <motion.div layout className="col-11 col-sm-6 col-md-3 mb-3" key={props.id} >

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
        </motion.div>



    )
}

export default MealItem