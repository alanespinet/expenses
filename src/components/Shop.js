import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExpenseList from './ExpenseList'
import { toggleViewExpenses } from '../redux/actions/shops'

class Shop extends Component {

  onToggleViewExpenses = e => {
    e.preventDefault();
    this.props.toggleViewExpenses(this.props.data.id)
  }

  render(){
    return (
      <div className="shop">
        <div className="shop__values">
          <p className="date">{ this.props.data.date }</p>
          <p className="place">{ this.props.data.place }</p>
          <p className="payed">{ this.props.data.payed }</p>
          <p className="description">{ this.props.data.description }</p>
          <p className="bold amount">$ { this.props.data.amount.toFixed(2) }</p>
        </div>

        { this.props.data.showingExpenses && (
          <ExpenseList expenses={ this.props.data.expenses } />
        ) }

        <a
          className="shop__show-expenses"
          href="#"
          onClick={ this.onToggleViewExpenses }
        >{ `${ this.props.data.showingExpenses ? 'Hide' : 'Show' } Expenses` }</a>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleViewExpenses: shopId => dispatch( toggleViewExpenses(shopId) )
})

export default connect(null, mapDispatchToProps)(Shop)
