import React, { Component } from 'react'
import { connect } from 'react-redux'

import Shop from './Shop'
import { startLoadShops } from '../redux/actions/shops'

class ShopList extends Component {
  componentDidMount(){
    this.props.startLoadShops()
  }

  render(){
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
          { this.props.shops.map( shop => (
            <Shop key={ shop._id } data={ shop } history={this.props.history}/>
          ) ) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shops: state.shops
})

const mapDispatchToProps = dispatch => ({
  startLoadShops: () => dispatch( startLoadShops() )
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)
