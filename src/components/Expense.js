import React from 'react'

const Expense = props => {
  return (
    <div className="expense">
      <p className="name">{ props.data.name }</p>
      <p className="type">{ props.data.type.name }</p>
      <p className="amount bold">$ { props.data.amount.toFixed(2) }</p>
    </div>
  )
}

export default Expense
