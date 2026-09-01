import React from 'react'
import {memo} from 'react'

const ProductList = ({getProducts, number}) => {
    console.log("Product RENDERED")
    const prods = getProducts()
  return (
    <div>
        <ul>
            {prods.map(item=><li>{item.name}</li>)}
        </ul>
    </div>
  )
}

export default memo(ProductList)