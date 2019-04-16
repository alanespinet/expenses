import React from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'

const ShopList = props => {
  return (
    <div className="shoplist">
      <h2>Shops List</h2>

      <div className="shoplist__headlines">
        <p className="date">Date</p>
        <p className="place">Place</p>
        <p className="payed">Payed</p>
        <p className="description">Description</p>
        <p className="amount">Amount</p>
      </div>

      <div className="shoplist__entries">
        { props.shops.map( shop => (
          <Shop key={ shop.id } data={ shop } />
        ) ) }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  shops: state.shops
})

export default connect(mapStateToProps, null)(ShopList)
