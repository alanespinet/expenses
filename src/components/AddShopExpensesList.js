import React, { Component } from 'react'

class AddShopExpensesList extends Component {
  constructor(props){
    super(props)

    this.deleteExpenseFn = this.deleteExpenseFn.bind(this)
  }

  deleteExpenseFn( id ){
    if( window.confirm('Are you sure you want to delete this Expense?') ){
      this.props.deleteExpense( id )
    }
  }

  render(){
    return (
      <div className="add-shop-expenses-list-module">
        <ul>
        { this.props.expenses.map( expense => (
          <li key={ expense.id }>
            <span className="add-shop-expenses-list-item__name">{ expense.name }</span>
            <span className="add-shop-expenses-list-item__type">{ expense.type }</span>
            <span className="add-shop-expenses-list-item__amount">{ expense.amount }</span>

            <div className="add-shop-expenses-list-item__delete">
              <button type="button" onClick={ () => this.deleteExpenseFn( expense.id ) }>delete</button>
            </div>
          </li>
        ) ) }
        </ul>
      </div>
    )
  }
}

export default AddShopExpensesList
