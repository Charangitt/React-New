import React from 'react'

const Card = ({props}) => {
  return (
    <div className=' border border-amber-500'>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default Card