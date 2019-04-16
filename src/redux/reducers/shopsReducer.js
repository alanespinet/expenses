const defaultState = [{
  id: '1',
  date: '04/11/2019',
  place: 'Walmart',
  payed: 'Alan',
  description: 'Food and cleaning stuff',
  amount: 62.34,
  showingExpenses: false,
  expenses: [{
    id: 'e11',
    name: 'Chicken',
    type: 'food',
    amount: 25.00,
  }, {
    id: 'e12',
    name: 'Nutros',
    type: 'yuki food',
    amount: 10.00
  }, {
    id: 'e13',
    name: 'Beef',
    type: 'food',
    amount: 25.00
  }, {
    id: 'e14',
    name: 'Taxes',
    type: 'taxes',
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
  showingExpenses: false,
  expenses: [{
    id: 'e21',
    name: 'Chips',
    type: 'food',
    amount: 16.00,
  }, {
    id: 'e22',
    name: 'Ice Cream',
    type: 'food',
    amount: 7.00
  }, {
    id: 'e23',
    name: 'Taxes',
    type: 'taxes',
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
  showingExpenses: false,
  expenses: [{
    id: 'e31',
    name: 'Clorox',
    type: 'cleaning',
    amount: 7.50,
  }, {
    id: 'e32',
    name: 'Taxes',
    type: 'taxes',
    amount: 1.40
  }]
}]

const shopsReducer = (state = defaultState, action) => {
  switch( action.type ){
    case 'TOGGLE_VIEW_EXPENSES':
      return state.map( shop => {
        if( shop.id === action.payload ){
          return {
            ...shop,
            showingExpenses: !shop.showingExpenses
          }
        }
        return shop
      })

    default:
      return state
  }
}

export default shopsReducer
