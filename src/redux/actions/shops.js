import axios from 'axios'

export const toggleViewExpenses = shopId => ({
  type: 'TOGGLE_VIEW_EXPENSES',
  payload: shopId
})

const loadShops = shops => ({
  type: 'LOAD_SHOPS',
  payload: shops
})

export const startLoadShops = () => {
  return dispatch => {
    axios.get('http://localhost:4000/shops')
      .then(response => {
        console.log(response.data)
        return dispatch( loadShops(response.data) )
      })
      .catch(error => console.log(error))
  }
}
