import axios from 'axios';

const flightPanelReducer = (state = "", action) => {
  switch (action.type) {
    case 'SET_TRIP':
      return {...state, isReturnFlight : action.payload === "Return"}
    case 'ENTER_ORIGIN_CITY':
      return {...state, originCity : action.payload}
    case 'ENTER_DEST_CITY':
      return {...state, destCity: action.payload}
    case 'ENTER_DEP_DATE':
      return {...state, deptDate : action.payload}
    case 'ENTER_RETURN_DATE':
      return {...state, returnDate: action.payload}
    case 'SELECT_PASSENGERS':
      return {...state, passengers: action.payload}
    default:
      return state
  }
}

//--------------------actions---------------------//

export const setTrip = payload => ({
  type: 'SET_TRIP',
  payload
})

export const enterOriginCity = payload => ({
  type: 'ENTER_ORIGIN_CITY',
  payload
})

export const enterDestCity = payload => ({
  type: 'ENTER_DEST_CITY',
  payload
})

export const enterDepDate = payload => {
  type: 'ENTER_DEP_DATE',
  payload
}

export const enterReturnDate = payload => ({
  type: 'ENTER_RETURN_DATE',
  payload
})

export const selectPassengers = payload => ({
  type: 'SELECT_PASSENGERS',
  payload
})

export const searchFlight = payload => {
  type: 'SEARCH_FLIGHT',
  payload
}

export default flightPanelReducer
