import axios from 'axios';

const flightPanelReducer = (state = "", action) => {
  switch (action.type) {
    case 'SET_TRIP':
      return {...state, isReturnFlight : action.payload === "Return", originCity: "", destCity: "", depDate: null, returnDate: null, passengerCount: -1 }
    case 'SET_ORIGIN_CITY':
      return {...state, originCity : action.payload}
    case 'SET_DEST_CITY':
      return {...state, destCity: action.payload}
    case 'SET_DEP_DATE':
      return {...state, depDate : action.payload}
    case 'SET_RETURN_DATE':
      return {...state, returnDate: action.payload}
    case 'SET_PASSENGER_COUNT':
      return {...state, passengerCount: action.payload}
    default:
      return state
  }
}

//--------------------actions---------------------//

export const setTrip = payload => {
  return dispatch => {
    dispatch({
      type: 'SET_TRIP',
      payload
    })
    return Promise.resolve();
  }
}

export const setOriginCity = payload => ({
  type: 'SET_ORIGIN_CITY',
  payload
})

export const setDestCity = payload => ({
  type: 'SET_DEST_CITY',
  payload
})

export const setDepDate = payload => ({
  type: 'SET_DEP_DATE',
  payload
})

export const setReturnDate = payload => ({
  type: 'SET_RETURN_DATE',
  payload
})

export const setPassengerCount = payload => ({
  type: 'SET_PASSENGER_COUNT',
  payload
})

export const searchFlight = payload => {
  type: 'SEARCH_FLIGHT',
  payload
}

export default flightPanelReducer
