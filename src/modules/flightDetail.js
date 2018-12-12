const flightDetailReducer = (state = "", action) => {
  switch (action.type) {
    case 'FLIGHT_BOOK':
      return action.payload
    case 'FLIGHT_SHOW_DETAILS':
      return action.payload
    case 'FLIGHT_TYPE':
      return action.payload
    case 'FLIGHT_NAME':
      return action.payload
    case 'FLIGHT_NUMBER':
      return action.payload
    case 'FLIGHT_DEP_TIME':
      return action.payload
    case 'FLIGHT_ARR_TIME':
      return action.payload
    case 'FLIGHT_PRICE':
      return action.payload
    default:
      return state
  }
}

//--------------------actions---------------------//

export const flightBook = payload => ({
  type: 'FLIGHT_BOOK',
  payload
})

export const flightShowDetails = payload => ({
  type: 'FLIGHT_SHOW_DETAILS',
  payload
})

export const flightType = payload => ({
  type: 'FLIGHT_TYPE',
  payload
})

export const flightName = payload => ({
  type: 'FLIGHT_NAME',
  payload
})

export const flightNumber = payload => ({
  type: 'FLIGHT_NUMBER',
  payload
})

export const flightDepTime = payload => ({
  type: 'FLIGHT_DEP_TIME',
  payload
})

export const flightArrTime = payload => ({
  type: 'FLIGHT_ARR_TIME',
  payload
})

export const flightPrice = payload => ({
  type: 'FLIGHT_PRICE',
  payload
})

export default flightDetailReducer
