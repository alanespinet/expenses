import axios from 'axios'

const loadPlaces = places => ({
  type: 'LOAD_PLACES',
  payload: places
})

export const startLoadPlaces = () => {
  return dispatch => {
    return axios.get('http://localhost:4000/places')
      .then( response => {
        dispatch( loadPlaces(response.data) )
      })
      .catch(error => console.log(error))
  }
}

const loadPayed = payed => ({
  type: 'LOAD_PAYED',
  payload: payed
})

export const startLoadPayed = () => {
  return dispatch => {
    return axios.get('http://localhost:4000/users')
      .then( response => {
        dispatch( loadPayed(response.data) )
      })
      .catch(error => console.log(error))
  }
}

const loadTypes = types => ({
  type: 'LOAD_TYPES',
  payload: types
})

export const startLoadTypes = () => {
  return dispatch => {
    return axios.get('http://localhost:4000/types')
      .then( response => {
        dispatch( loadTypes(response.data) )
      })
      .catch(error => console.log(error))
  }
}

export const startAddPlace = place => {
  return dispatch => {
    return axios.post('http://localhost:4000/place', { place })
      .then( response => {
        return axios.get('http://localhost:4000/places')
          .then( response => {
            dispatch( loadPlaces(response.data) )
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}

export const startAddUser = user => {
  return dispatch => {
    return axios.post('http://localhost:4000/user', { user })
      .then( response => {
        return axios.get('http://localhost:4000/users')
          .then( response => {
            dispatch( loadPayed(response.data) )
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}


export const startAddType = type => {
  return dispatch => {
    return axios.post('http://localhost:4000/type', { type })
      .then( response => {
        return axios.get('http://localhost:4000/types')
          .then( response => {
            dispatch( loadTypes(response.data) )
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }
}
