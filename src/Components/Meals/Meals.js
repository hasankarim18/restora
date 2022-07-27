import React, { useContext } from 'react'
import { CartContext } from '../../Store/CartContext'
import MenuCard from '../UI/MenuCard'


const Meals = () => {

    const CartCtx = useContext(CartContext)
    console.log(CartCtx)

    const showMenu = CartCtx.mealList.map(item => {
        return (
            <li className="col-11 col-sm-6 col-md-4" key={item.id} >
                <MenuCard
                    name={item.name}
                    image={process.env.PUBLIC_URL + item.image}
                    alt="beef"
                />
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
        </div>
    )
}

export default Meals