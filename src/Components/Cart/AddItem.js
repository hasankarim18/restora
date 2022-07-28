import React from 'react'
import CartForm from './CartForm'



const AddItem = (props) => {

    // console.log(props)

    return (
        <div>
            <CartForm addItem={props.addItem} />
        </div>
    )
}

export default AddItem