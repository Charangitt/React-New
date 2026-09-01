import React from 'react'

const ProductCard = ({key, props}) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>props.price</p>
        <p>props.category</p>
    </div>
  )
}

export default ProductCard