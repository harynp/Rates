const initialState = {
  rates: [],
}

const Rates = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_RATES':
      return {...state, rates: action.payload.data}
    default:
      return state
  }
}

export default Rates
