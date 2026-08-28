import React from 'react'

const Card = ({props}) => {
  return (
    <div className=' border border-amber-500'>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <p>{props.address.city}</p>
    </div>
  )
}

export default Card