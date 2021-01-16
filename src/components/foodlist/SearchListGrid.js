import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
const SearchListGrid = ({ items }) => {

    const [heart, setHeart] = useState(regularHeart);
    const setHeartBody = () => {
        if (heart === regularHeart) {
            setHeart(solidHeart)
        } else {
            setHeart(regularHeart)
        }
    }
    return (
        <div>
            < div className='card' >
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={items.strMealThumb} alt='' />

                    </div>
                    <div className='card-back'>
                        <h1>{items.strMeal}</h1>
                    </div>
                </div>

                <h1><i className="fas fa-heart"></i></h1>
                <h1><FontAwesomeIcon icon={heart} onClick={() => setHeartBody()} /></h1>

            </ div>
        </div>
    )
}

export default SearchListGrid
