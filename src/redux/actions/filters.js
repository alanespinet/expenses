export const toggleShow = () => ({
  type: 'TOGGLE_SHOW'
})

export const removePlace = place => ({
  type: 'REMOVE_PLACE',
  payload: place
})

export const removePayed = payed => ({
  type: 'REMOVE_PAYED',
  payload: payed
})

export const removeType = type => ({
  type: 'REMOVE_TYPE',
  payload: type
})

export const addPlace = place => ({
  type: 'ADD_PLACE',
  payload: place
})

export const addPayed = payed => ({
  type: 'ADD_PAYED',
  payload: payed
})

export const addType = type => ({
  type: 'ADD_TYPE',
  payload: type
})

export const setDateFrom = date => ({
  type: 'SET_DATE_FROM',
  payload: date
})

export const setDateTo = date => ({
  type: 'SET_DATE_TO',
  payload: date
})
