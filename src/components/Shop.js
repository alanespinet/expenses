import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment';

import ExpenseList from './ExpenseList'
import { toggleViewExpenses, startDeleteShop } from '../redux/actions/shops'

class Shop extends Component {
  constructor(props){
    super(props)
    this.onDeleteShop = this.onDeleteShop.bind(this)
  }

  onToggleViewExpenses = e => {
    e.preventDefault();
    this.props.toggleViewExpenses(this.props.data._id)
  }

  onDeleteShop(){
    if( window.confirm('Are you sure you want to delete this shop?') ){
      const id = this.props.data._id
      this.props.deleteShop({ id })
    }
  }

  render(){
    return (
      <div className="shop">
        <div className="shop__values">
          <p className="date">{ moment(this.props.data.date).format('MM/DD/YYYY') }</p>
          <p className="place">{ this.props.data.place.name }</p>
          <p className="payed">{ this.props.data.payed.name }</p>
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

        <div className="shop__action-buttons">
          <button className="accept">Edit</button>
          <button className="warning" onClick={ this.onDeleteShop }>Delete</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleViewExpenses: shopId => dispatch( toggleViewExpenses(shopId) ),
  deleteShop: shopId => dispatch( startDeleteShop(shopId) )
})

export default connect(null, mapDispatchToProps)(Shop)
