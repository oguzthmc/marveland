import React from 'react'

const HeroItem = ({ item }) => {
  const poster = `${item.thumbnail.path}.${item.thumbnail.extension}`
  const series = `${item.series.items.name}`

  console.log(series)

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={poster} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul id="inner">
            <li>
              <strong>Description:</strong> {item.description ? item.description : "Empty!"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeroItem