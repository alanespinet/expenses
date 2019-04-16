const defaultState = [{
  id: '1',
  date: '04/11/2019',
  place: 'Walmart',
  payed: 'Alan',
  description: 'Food and cleaning stuff',
  amount: 62.34,
  expenses: [{
    name: 'Chicken',
    amount: 25.00,
  }, {
    name: 'Nutros',
    amount: 10.00
  }, {
    name: 'Beef',
    amount: 25.00
  }, {
    name: 'Taxes',
    amount: 12.34
  }]
},

{
  id: '2',
  date: '04/13/2019',
  place: 'Publix',
  payed: 'Alan',
  description: 'Food',
  amount: 27.54,
  expenses: [{
    name: 'Chips',
    amount: 16.00,
  }, {
    name: 'Ice Cream',
    amount: 7.00
  }, {
    name: 'Taxes',
    amount: 4.54
  }]
},

{
  id: '3',
  date: '04/14/2019',
  place: 'Family Dollar',
  payed: 'Yeli',
  description: 'Cleaning',
  amount: 8.90,
  expenses: [{
    name: 'Clorox',
    amount: 7.50,
  }, {
    name: 'Taxes',
    amount: 1.40
  }]
}]

const shopsReducer = (state = defaultState, action) => {
  switch( action.type ){
    default:
      return state
  }
}

export default shopsReducer
