const defaultState = {
  show: 'shops'
}

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW':
      return {
        ...state,
        show: state.show === 'shops' ? 'expenses' : 'shops'
      }

    default:
      return state
  }
}

export default filtersReducer
