import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/ui/Header'
import ListGrid from './components/foodlist/ListGrid';
import Search from './components/ui/Search';
import SearchList from './components/foodlist/SearchList';

const App = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [searchItem, setSearchItem] = useState([])

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://www.themealdb.com/api/json/v1/1/random.php`)
      const search = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

      setItems(result.data.meals[0])
      if (query !== '') {
        setSearchItem(search.data.meals)
      }

    }
    fetchItem()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      {(query === '') ?
        <ListGrid items={items} /> :
        <SearchList searchItem={searchItem} />
      }
    </div>
  );
}

export default App;
