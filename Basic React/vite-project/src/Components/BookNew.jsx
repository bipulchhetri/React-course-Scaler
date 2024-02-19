import React from 'react'

const BookNew = ({name,price}) => {
  return (
<li>{ price <300 ? <h2>The price of {name} of {price} </h2> : " "} </li>
  )
}

export default BookNew