import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/layout/Header'
import SearchBar from './components/layout/SearchBar'
import HeroGrid from './components/heroes/HeroGrid'
import Footer from './components/layout/Footer'

import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      if (!query) {
        const result = await axios(
          `https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=40&ts=1&apikey=5c2cfddc13a14c63724a8484f5d0a79f&hash=f9d48f10ad61c5835b3b3f4869af4ea9`
        )
        // console.log(result.data)
        setItems(result.data)
        setIsLoading(false)
      }

      const result = await axios(
        `https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=40&nameStartsWith=${query}&ts=1&apikey=5c2cfddc13a14c63724a8484f5d0a79f&hash=f9d48f10ad61c5835b3b3f4869af4ea9`
      )
      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div>
      <Header />
      <SearchBar getQuery={(q) => setQuery(q)} />
      <HeroGrid isLoading={isLoading} items={items} />
      <Footer items={items} />
    </div>
  );
}

export default App