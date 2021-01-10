import React from 'react'
import HeroItem from './HeroItem'
import Spinner from '../layout/Spinner'

const HeroGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='container cards'>
      {items.data.results.map((item) => (
        <HeroItem key={item.id} item={item}></HeroItem>
      ))}
    </section>
  )
}

export default HeroGrid
