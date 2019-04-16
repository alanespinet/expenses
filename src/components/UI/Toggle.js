import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../redux/actions/filters'

class Toggle extends Component {
  render(){
    return (
      <div className="toggle">
        <div onClick={ this.props.toggleShow } className={ `toggle__button-wrapper ${ this.props.show }` }>
          <button></button>
        </div>

        <div className="toggle__values">
          <p>Shops</p>
          <p>Expenses</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  show: state.filters.show
})

export default connect(mapStateToProps, actions)(Toggle)
