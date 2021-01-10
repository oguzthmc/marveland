import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (qry) => {
    setText(qry)
    getQuery(qry)
  }

  return (
    <section className='container search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search for a superhero...'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search