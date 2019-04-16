import React from 'react'
import { connect } from 'react-redux'
import Shop from './Shop'

const ShopList = props => {
  return (
    <div>
      { props.shops.map( shop => (
        <div key={ shop.id }>
          <p>{ shop.id }</p>
          <p>{ shop.place }</p>
        </div>
      ) ) }
    </div>
  )
}

const mapStateToProps = state => ({
  shops: state.shops
})

export default connect(mapStateToProps, null)(ShopList)
