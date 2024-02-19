import React from 'react'
import BookNew from './BookNew'
const Book = () => {
    let Book=[
        {name:"C++" ,price:200},
        {name:"JAVA", price:300},
        {name:"DSA",price:200}
    ]

  return (
    <div>{Book.map(Book=>
        (
          <BookNew name={Book.name} price={Book.price}/>
        ))}</div>
  )
}

export default Book