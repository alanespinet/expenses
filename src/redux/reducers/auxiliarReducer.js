const defaultState = {
  places: [],
  types: [],
  users: []
}

const auxiliarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_PLACES':
      return {
        ...state,
        places: action.payload
      }

    case 'LOAD_PAYED':
      return {
        ...state,
        users: action.payload
      }

    case 'LOAD_TYPES':
      return {
        ...state,
        types: action.payload
      }

    default:
      return state
  }
}

export default auxiliarReducer
