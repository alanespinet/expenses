import React, { Component } from 'react'
import { connect } from 'react-redux';

import AddShopExpensesList from './AddShopExpensesList'
import Expense from './Expense'
import { startAddShop } from '../redux/actions/shops'

Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

const defaultState = {
  date: new Date().toDateInputValue(),
  place: '',
  payed: '',
  description: '',
  amount: Number(0).toFixed(2),
  expenses: []
}

class AddShop extends Component {
  constructor(props){
    super(props)
    this.id_expenses_counter = 0;

    this.expense_name_ref = React.createRef()
    this.expense_type_ref = React.createRef()
    this.expense_amount_ref = React.createRef()

    this.addExpenseFn = this.addExpenseFn.bind(this)
    this.deleteExpenseFn = this.deleteExpenseFn.bind(this)
    this.clearAddExpenseFormFn = this.clearAddExpenseFormFn.bind(this)

    this.onChangeDateFn = this.onChangeDateFn.bind(this)
    this.onChangePlaceFn = this.onChangePlaceFn.bind(this)
    this.onChangePayedFn = this.onChangePayedFn.bind(this)
    this.onChangeDescriptionFn = this.onChangeDescriptionFn.bind(this)
    this.onAddShopFn = this.onAddShopFn.bind(this)
    this.onCancelAddFn = this.onCancelAddFn.bind(this)
  }

  state = {
    date: new Date().toDateInputValue(),
    place: '',
    payed: '',
    description: '',
    amount: Number(0).toFixed(2),
    expenses: []
  }

  addExpenseFn(){
    const name = this.expense_name_ref.current.value
    const type = this.expense_type_ref.current.value
    const amount = this.expense_amount_ref.current.value

    if( name.trim().length === 0 || type.trim().length === 0 || amount <= 0 ){
      let errorMsg = 'ERROR: Please check the following:\n\n'

      if( name.trim().length === 0 )
        errorMsg += 'the field "Name" can not be blank\n'

      if( type.trim().length === 0 ){
        errorMsg += 'the field "Type" can not be blank\n'
      }

      if( amount <= 0 ){
        errorMsg += 'he field "Amount" can not be blank and must be a number greater than zero\n'
      }

      window.alert(errorMsg)
      return
    }

    this.id_expenses_counter++;
    const expense = {
      id: this.id_expenses_counter,
      name: name.toLowerCase(),
      type: type.toLowerCase(),
      amount: amount
    }

    this.setState(prevState => ({
      ...this.state,
      amount: (Number(prevState.amount) + Number(expense.amount)).toFixed(2),
      expenses: [...prevState.expenses, expense]
    }))

    this.clearAddExpenseFormFn()
  }

  deleteExpenseFn(id_expense){
    const expense = this.state.expenses.find( ex => ex.id === id_expense )

    this.setState( prevState => ({
      ...prevState,
      amount: (Number(prevState.amount) - Number(expense.amount)).toFixed(2),
      expenses: prevState.expenses.filter( ex => ex.id !== id_expense )
    }))
  }

  clearAddExpenseFormFn(){
    this.expense_name_ref.current.value = ''
    this.expense_type_ref.current.value = ''
    this.expense_amount_ref.current.value = ''
    this.expense_name_ref.current.focus()
  }

  onChangeDateFn(e){
    this.setState({
      ...this.state,
      date: e.target.value
    })
  }

  onChangePlaceFn(e){
    this.setState({
      ...this.state,
      place: e.target.value
    })
  }

  onChangePayedFn(e){
    this.setState({
      ...this.state,
      payed: e.target.value
    })
  }

  onChangeDescriptionFn(e){
    this.setState({
      ...this.state,
      description: e.target.value
    })
  }

  onAddShopFn(){
    let errorMsg = 'ERROR: Please check the following:\n\n'
    let error = false;

    if( this.state.place.trim().length === 0 ){
      errorMsg += 'the field "Place" can not be blank\n'
      error = true
    }

    if( this.state.payed.trim().length === 0 ){
      errorMsg += 'the field "Payed" can not be blank\n'
      error = true
    }

    if( this.state.description.trim().length === 0 ){
      errorMsg += 'the field "Description" can not be blank\n'
      error = true
    }

    if( this.state.expenses.length === 0 ){
      errorMsg += 'the shop must have at least one "Expense"'
      error = true
    }

    if( !error ){
      this.props.addShop( this.state )
      alert('SUCCESS: Shop added correctly')
      this.props.history.push('/')
    } else {
      alert(errorMsg)
    }
  }

  onCancelAddFn(){
    this.setState({
      ...defaultState
    })
    this.props.history.push('/')
  }

  render(){
    return (
      <div className="add-shop">
        <h2>New shop</h2>

        <form className="add-shop__form">
          <div className="add-shop__form__controls">
            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-date">Date:</label>
              <input
                type="date"
                id="add-shop-date"
                name="add-shop-date"
                value={ this.state.date }
                onChange={ this.onChangeDateFn }
              />
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-place" className="label-with-link">Place:<a href="#">add new</a></label>
              <select
                id="add-shop-place"
                name="add-shop-place"
                value={ this.state.place }
                onChange={ this.onChangePlaceFn }
              >
                <option value=""></option>
                <option value="walmart">Walmart</option>
                <option value="best buy">Best Buy</option>
                <option value="family Dollar">Family Dollar</option>
              </select>
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-payed" className="label-with-link">Payed:<a href="#">add new</a></label>
              <select
                id="add-shop-payed"
                name="add-shop-payed"
                value={ this.state.payed }
                onChange={ this.onChangePayedFn }
              >
                <option value=""></option>
                <option value="yeli">Yeli</option>
                <option value="alan">Alan</option>
              </select>
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-description">Description:</label>
              <textarea
                id="add-shop-description"
                name="add-shop-description"
                value={ this.state.description }
                onChange={ this.onChangeDescriptionFn }
              >
              </textarea>
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-amount">Amount:</label>
              <input type="text" id="add-shop-amount" name="add-shop-amount" readOnly={true} value={ this.state.amount }/>
            </div>

            <div className="add-shop__form__control-group half-control">
            </div>

            <div className="add-shop__form__expenses">
              <h3>Expenses</h3>

              <div className="add-shop__form__control-group third-control">
                <label htmlFor="add-shop-expenses-name">Name:</label>
                <input type="text" id="add-shop-expenses-name" name="add-shop-expenses-name" ref={ this.expense_name_ref } />
              </div>

              <div className="add-shop__form__control-group third-control">
                <label htmlFor="add-shop-expenses-type" className="label-with-link">Type:<a href="#">add new</a></label>
                <select id="add-shop-expenses-type" name="add-shop-expenses-type" ref={ this.expense_type_ref }>
                  <option value=""></option>
                  <option value="food">Food</option>
                  <option value="clothes">Clothes</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="games">Games</option>
                </select>
              </div>

              <div className="add-shop__form__control-group third-control">
                <label htmlFor="add-shop-expenses-amount">Amount:</label>
                <input type="number" id="add-shop-expenses-amount" amount="add-shop-expenses-name" ref={ this.expense_amount_ref } />
              </div>

              <div className="add-shop__form__control-group buttons-group">
                <button className="button action" type="button" onClick={ this.clearAddExpenseFormFn }>Clear Expense</button>
                <button className="button accept" type="button" onClick={ this.addExpenseFn }>Add Expense</button>
              </div>

              <section className="add-shop__expenses-list">
                <AddShopExpensesList
                  expenses={ this.state.expenses }
                  deleteExpense={ this.deleteExpenseFn }
                />
              </section>
            </div>

            <div className="add-shop__form__control-group submit-group">
              <p>Now you are adding a new Shop to the system. Each Shop consists in one or more expenses. The total amount of all expenses plus taxes is the amount of the shop.</p>

              <div className="add-shop__form__second-button-group">
              <button className="button warning" type="button" onClick={ this.onCancelAddFn }>Cancel</button>
              <button className="button accept" type="button" onClick={ this.onAddShopFn }>Add Shop</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addShop: shop => dispatch( startAddShop(shop) )
})

export default connect(null, mapDispatchToProps)(AddShop)
