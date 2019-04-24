import React, { Component } from 'react'

Date.prototype.toDateInputValue = (function() {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

const theDate = new Date().toDateInputValue()

class AddShop extends Component {
  state = {
    date: new Date().toDateInputValue()
  }

  render(){
    return (
      <div className="add-shop">
        <h2>New shop</h2>

        <form className="add-shop__form">
          <div className="add-shop__form__controls">
            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-date">Date:</label>
              <input type="date" id="add-shop-date" name="add-shop-date" value={ theDate } />
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-place">Place:</label>
              <select id="add-shop-place" name="add-shop-place">
                <option value="walmart">Walmart</option>
                <option value="best buy">Best Buy</option>
                <option value="family Dollar">Family Dollar</option>
              </select>
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-payed">Payed:</label>
              <select id="add-shop-payed" name="add-shop-payed">
                <option value="yeli">Yeli</option>
                <option value="alan">Alan</option>
              </select>
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-description">Description:</label>
              <textarea id="add-shop-description" name="add-shop-description">
              </textarea>
            </div>

            <div className="add-shop__form__control-group half-control">
              <label htmlFor="add-shop-amount">Amount:</label>
              <input type="text" id="add-shop-amount" name="add-shop-amount" />
            </div>

            <div className="add-shop__form__control-group half-control">
            </div>

            <div className="add-shop__form__expenses">
              <h3>Expenses</h3>

              <div className="add-shop__form__control-group third-control">
                <label htmlFor="add-shop-expenses-name">Name:</label>
                <input type="text" id="add-shop-expenses-name" name="add-shop-expenses-name" />
              </div>

              <div className="add-shop__form__control-group third-control">
                <label htmlFor="add-shop-expenses-type">Type:</label>
                <select id="add-shop-expenses-type" name="add-shop-expenses-type">
                  <option value="food">Food</option>
                  <option value="clothes">Clothes</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="games">Games</option>
                </select>
              </div>

              <div className="add-shop__form__control-group third-control">
                <label htmlFor="add-shop-expenses-amount">Amount:</label>
                <input type="text" id="add-shop-expenses-amount" amount="add-shop-expenses-name" />
              </div>

              <div className="add-shop__form__control-group buttons-group">
                <button className="button action" type="button">Clear Expense</button>
                <button className="button accept" type="button">Add Expense</button>
              </div>
            </div>

            <div className="add-shop__form__control-group submit-group">
              <p>Now you are adding a new Shop to the system. Each Shop consists in one or more expenses. The total amount of all expenses plus taxes is the amount of the shop.</p>

              <div className="add-shop__form__second-button-group">
              <button className="button warning" type="button">Cancel</button>
              <button className="button accept" type="button">Add Shop</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddShop
