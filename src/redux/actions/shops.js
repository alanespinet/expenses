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
        return dispatch( loadShops(response.data) )
      })
      .catch(error => console.log(error))
  }
}

const addShop = shop => ({
  type: 'ADD_SHOP',
  payload: shop
})

export const startAddShop = shop => {
  return dispatch => {
    axios.post('http://localhost:4000/shop', shop)
      .then(() => {
        return axios.get('http://localhost:4000/shops')
          .then(response => {
            return dispatch( loadShops(response.data) )
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}

export const startDeleteShop = id => {
  return dispatch => {
    return axios.post('http://localhost:4000/delete_shop', id)
    .then(() => {
      return axios.get('http://localhost:4000/shops')
        .then(response => {
          return dispatch( loadShops(response.data) )
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
  }
}
