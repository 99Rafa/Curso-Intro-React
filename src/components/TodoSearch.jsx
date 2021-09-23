import React from 'react'

function TodoSearch() {

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <>
      <input
        className='TodoSearch'
        type="text"
        placeholder='Cebolla'
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch }
