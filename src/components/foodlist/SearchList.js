import React from 'react'
import SearchListGrid from './SearchListGrid'

const SearchList = ({ searchItem }) => {
    if (searchItem === null) {
        return (
            <div>
                <h2>No search results.....</h2>
            </div>
        )
    }
    else {
        return (
            <section className='cards'>
                {searchItem.map((items) => (
                    <SearchListGrid key={items.idMeal} items={items} />
                ))}
            </section>
        )
    }
}

export default SearchList
