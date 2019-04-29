import React, { Component } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';

class ObjectsList extends Component {

  render(){
    return (
      <ul className="objects-list">
        { this.props.argumentList.map((element, index) => (
          <li key={ index }>{ element }
            <button
              className="objects-list__element-remove"
              onClick={ () => this.props.onRemoveFunction(element) }
            >
            <AddCircleIcon />
            </button>
          </li>
        )) }
      </ul>
    )
  }
}

export default ObjectsList
