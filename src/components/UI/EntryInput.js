import React, { Component } from 'react'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

class EntryInput extends Component {

  constructor(props){
    super(props)
    this.input_reference = React.createRef()

    this.acceptFn = this.acceptFn.bind(this)
  }

  componentDidMount(){
    this.input_reference.current.focus()
  }

  acceptFn(){
    let value = this.input_reference.current.value
    this.props.onAccept(value)
  }

  render(){
    return (
      <div className="entry-input visible">
        <input
          type="text"
          placeholder="add new value"
          ref={ this.input_reference }
        />
        <div className="entry-input__buttons">
          <button
            type="button"
            className="entry-input__buttons__accept"
            onClick={ this.acceptFn }
          ><DoneIcon /></button>

          <button
            type="button"
            className="entry-input__buttons__cancel"
            onClick={ this.props.onCancel }
          ><ClearIcon /></button>
        </div>
      </div>
    )
  }
}

export default EntryInput
