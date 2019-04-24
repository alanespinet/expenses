import React from 'react'
import Expense from './Expense'

const ExpenseList = props => {
  return (
    <div className="expenseslist">
      { props.expenses.map( expense => (
        <Expense key={ expense._id } data={ expense } />
      ) ) }
    </div>
  )
}

export default ExpenseList
