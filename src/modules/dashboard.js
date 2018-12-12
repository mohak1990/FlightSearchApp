const dashboardReducer = (state = "", action) => {
  switch (action.type) {
    case 'FLIGHT_INFO':
      return action.payload
    case 'FLIGHT_COUNT':
      return action.payload
    case 'FLIGHT_DAY':
      return action.payload
    default:
      return state
  }
}

//--------------------actions---------------------//

export const flightInfo = payload => ({
  type: 'FLIGHT_INFO',
  payload
})

export const flightCount = payload => ({
  type: 'FLIGHT_COUNT',
  payload
})

export const flightDay = payload => ({
  type: 'FLIGHT_DAY',
  payload
})

export default dashboardReducer
