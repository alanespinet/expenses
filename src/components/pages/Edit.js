import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from '../Layout/Menu'
import MenuMobile from '../Layout/MenuMobile'
import AddShop from '../AddShop'

class Edit extends Component {
  render(){
    return (
      <>
        <Menu />
        <MenuMobile />

        { this.props.edit ? (
          <AddShop { ...this.props } />
        ) : (
          <div className="edit-redirect-message">
            <h2>Warning!</h2>
            <p>Enter this page <span className="edit-redirect-message__warning-span">directly</span> through URL and/or <span className="edit-redirect-message__warning-span">reloading</span> this page are non-allowed operations due to <span className="edit-redirect-message__warning-span">security concerns</span>. Please return to Homepage or Add page.</p>
          </div>
        ) }
      </>
    )
  }
}

const mapStateToProps = state => ({
  edit: state.currentShop.edit
})

export default connect(mapStateToProps)(Edit)
