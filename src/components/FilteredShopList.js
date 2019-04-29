import React, { Component } from 'react'
import { connect } from 'react-redux'
import shopsSelector, { shopsAmountCalculator } from '../redux/selectors/shops'
import ExpenseList from './ExpenseList'

import Shop from './Shop'
import { startLoadShops } from '../redux/actions/shops'

class FilteredShopList extends Component {
  state = {
    amountTotal: 0
  }

  componentDidMount(){
    this.props.startLoadShops()
  }

  render(){
    return (
      <div className="shoplist filtered-shoplist">
        { this.props.show === 'shops' && (
          <>
            <div className="shoplist__headlines">
              <p className="date">Date</p>
              <p className="place">Place</p>
              <p className="payed">Payed</p>
              <p className="description">Description</p>
              <p className="amount">Amount</p>
            </div>

            <div className="shoplist__entries">
              { this.props.shops.map( shop => (
                <Shop key={ shop._id } data={ shop } history={this.props.history}/>
              ) ) }
            </div>
          </>
        ) }

        { this.props.show === 'expenses' && (
          <>
            <div className="shoplist__headlines">
              <p className="name">Name</p>
              <p className="type">Type</p>
              <p className="amount">Amount</p>
            </div>

            <ExpenseList expenses={ this.props.shops }/>
          </>
        ) }

        <div className="filtered-shoplist__amount-headline">
          <h3>The total amount is: <span>$ { this.props.amount.toFixed(2) }</span></h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shops: shopsSelector(
    state,
    state.filters.fromDate,
    state.filters.toDate,
    state.filters.places,
    state.filters.payed,
    state.filters.types,
    state.filters.show
  ),
  amount: shopsAmountCalculator(
    state,
    state.filters.fromDate,
    state.filters.toDate,
    state.filters.places,
    state.filters.payed,
    state.filters.types,
    state.filters.show
  ),
  show: state.filters.show
})

const mapDispatchToProps = dispatch => ({
  startLoadShops: () => dispatch( startLoadShops() )
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredShopList)
