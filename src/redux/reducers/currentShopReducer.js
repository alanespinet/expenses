const defaultState = {
  edit: false,
  current: '',
  currentObject: {}
}

const currentShopReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return {
        edit: true,
        current: action.payload.currentId,
        currentObject: action.payload.currentData
      }

    case 'REMOVE_CURRENT':
      return defaultState

    default:
      return state
  }
}

export default currentShopReducer
