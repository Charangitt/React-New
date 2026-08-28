import React from 'react'

const ProductCard = ({props,onDelete,onToggle}) => {
  return (
    <div className='flex justify-around'>
        <input type="checkbox" value={props.completed} onChange={()=>{onToggle(props.id)}} />
        <span>{props.text}  {props.amount}</span>


        <button onClick={()=>{onDelete(props.id,props.amount)}}>Delete Expense</button>        
    </div>
  )
}

export default ProductCard