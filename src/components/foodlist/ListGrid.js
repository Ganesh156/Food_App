import React from 'react'
import FoodLists from './FoodLists'
//Displaying Random food
const ListGrid = ({ items }) => {
    return (
        <section className='cards'>
            <FoodLists items={items} />
        </section>
    )
}

export default ListGrid
