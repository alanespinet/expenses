export const setCurrent = (currentId, currentData) => ({
  type: 'SET_CURRENT',
  payload: {
    currentId,
    currentData
  }
})

export const removeCurrent = () => ({
  type: 'REMOVE_CURRENT'
})
