const defaultState = {
  show: 'shops',
  fromDate: '',
  toDate: '',
  places: [],
  payed: [],
  types: []
}

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW':
      return {
        ...state,
        show: state.show === 'shops' ? 'expenses' : 'shops'
      }

    case 'REMOVE_PLACE':
      return {
        ...state,
        places: state.places.filter( p => p !== action.payload )
      }

    case 'REMOVE_PAYED':
      return {
        ...state,
        payed: state.payed.filter( p => p !== action.payload )
      }

    case 'REMOVE_TYPE':
      return {
        ...state,
        types: state.types.filter( p => p !== action.payload )
      }

    case 'ADD_PLACE':
      return {
        ...state,
        places: state.places.filter( p => p === action.payload ).length === 0 ?
                [ ...state.places, action.payload ] :
                [ ...state.places ]
      }

    case 'ADD_PAYED':
      return {
        ...state,
        payed: state.payed.filter( p => p === action.payload ).length === 0 ?
                [ ...state.payed, action.payload ] :
                [ ...state.payed ]
      }

    case 'ADD_TYPE':
      return {
        ...state,
        types: state.types.filter( p => p === action.payload ).length === 0 ?
                [ ...state.types, action.payload ] :
                [ ...state.types ]
      }

    case 'SET_DATE_FROM':
      return {
        ...state,
        fromDate: action.payload
      }

    case 'SET_DATE_TO':
      return {
        ...state,
        toDate: action.payload
      }

    default:
      return state
  }
}

export default filtersReducer
