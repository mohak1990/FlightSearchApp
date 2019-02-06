import actions from "../constants/actions"

const flightPanelReducer = (state = "", action) => {
  switch (action.type) {
    case actions.SET_TRIP:
      return {...state, isReturnFlight : action.payload === "Return", originCity: "", destCity: "", depDate: null, returnDate: null, passengerCount: "0" }
    case actions.SET_ORIGIN_CITY:
      return {...state, originCity : action.payload}
    case actions.SET_DEST_CITY:
      return {...state, destCity: action.payload}
    case actions.SET_DEP_DATE:
      return {...state, depDate : action.payload}
    case actions.SET_RETURN_DATE:
      return {...state, returnDate: action.payload}
    case actions.SET_PASSENGER_COUNT:
      return {...state, passengerCount: action.payload}
    default:
      return state
  }
}

//--------------------actions---------------------//

export const setTrip = payload => {
  return dispatch => {
    dispatch({
      type: actions.SET_TRIP,
      payload
    })
    return Promise.resolve();
  }
}

export const setOriginCity = payload => ({
  type: actions.SET_ORIGIN_CITY,
  payload
})

export const setDestCity = payload => ({
  type: actions.SET_DEST_CITY,
  payload
})

export const setDepDate = payload => ({
  type: actions.SET_DEP_DATE,
  payload
})

export const setReturnDate = payload => ({
  type: actions.SET_RETURN_DATE,
  payload
})

export const setPassengerCount = payload => ({
  type: actions.SET_PASSENGER_COUNT,
  payload
})



export default flightPanelReducer
