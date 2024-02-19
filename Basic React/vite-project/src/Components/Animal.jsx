import React from 'react'

const Animal = () => {
    let Animal=['cat','dog','cow']
  return (
    <div>{Animal.map((Animal)=>
        (
            <ol className='list'>
                <li>{Animal}</li>
            </ol>
        ))}</div>
  )
}

export default Animal