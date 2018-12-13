import axios from 'axios'
import flightJson from '../mockdata/data.json'

const dashboardReducer = (state = "", action) => {
  switch (action.type) {
    case 'GET_FLIGHTS':
      return {...state, flights: action.payload}
    case 'FLIGHT_INFO':
      return {...state, info: action.payload}
    case 'FLIGHT_COUNT':
      return {...state, count: action.payload}
    case 'FLIGHT_DAY':
      return {...state, day: action.payload}
    default:
      return state
  }
}

//--------------------actions---------------------//

// export const getFlights = () => {
//   return (dispatch, getState) => {
//     axios({
//       method: 'get',
//       url: 'https://tw-frontenders.firebaseio.com/advFlightSearch.json',
//     }).then((payload) => {
//       dispatch({
//         type: 'GET_FLIGHTS',
//         payload: payload.data
//       })
//     }).catch(()=>{
//     })
//   }
// }

export const getFlights = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'GET_FLIGHTS',
      payload: flightJson
    })
  }
}

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
