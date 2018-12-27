import axios from 'axios'
import flightJson from '../mockdata/data.json'
import {getTimeDifference, getTravelTime} from "../utils"


function setFlightArr(flights, originFlights, destinationFlights){
  originFlights.forEach((originData, i) => {
    destinationFlights.forEach((destData, index) => {
      if(originData.destination === destData.origin && getTimeDifference(originData.date, originData.arrivalTime, destData.date, destData.departureTime).asMinutes() > 30)
      {
        let multipleFlightObj = {multiple: []};
        multipleFlightObj.multiple.push(originData);
        multipleFlightObj.multiple.push(destData);
        flights.push(multipleFlightObj);
      }
    })
  })
  console.log("flights")
  console.log(flights)
  return flights;
}

function checkReturnFlights(flightJson){

  let originFlights = [];
  let destinationFlights = [];
  let flights = [];
  flightJson.forEach((data, i) => {
    if(data.destination === "Pune (PNQ)" && data.origin === "Delhi (DEL)")
    {
      flights.push(data);
    }
    else if(data.destination === "Pune (PNQ)")
    {
      originFlights.push(data);
    }
    else if(data.origin === "Delhi (DEL)")
    {
      destinationFlights.push(data);
    }
  })
  return setFlightArr(flights, originFlights, destinationFlights)
}

function checkOneWayFlights(flightJson){

  let originFlights = [];
  let destinationFlights = [];
  let flights = [];
  flightJson.forEach((data, i) => {
    if(data.origin === "Pune (PNQ)" && data.destination === "Delhi (DEL)")
    {
      flights.push(data);
    }
    else if(data.origin === "Pune (PNQ)")
    {
      originFlights.push(data);
    }
    else if(data.destination === "Delhi (DEL)")
    {
      destinationFlights.push(data);
    }
  })
  return setFlightArr(flights, originFlights, destinationFlights)
}

const dashboardReducer = (state = "", action) => {
  switch (action.type) {
    case 'GET_FLIGHTS':
      return {...state, flights: [...state.flights, {flightDetail: action.payload, index: action.index, expandedView : false}]}
    case 'GET_FLIGHTS_RETURN':
      return {...state, returnFlights: [...state.returnFlights, {flightDetail: action.payload, index: action.index, expandedView : false}]}
    case 'FLIGHT_INFO':
      return {...state, info: action.payload}
    case 'FLIGHT_COUNT':
      return {...state, count: action.payload}
    case 'FLIGHT_DAY':
      return {...state, day: action.payload}
    case 'SHOW_DETAILS':
      return {...state, flights: state.flights.map((val, i) => {
        return val.index === action.payload ? {...val, expandedView: !val.expandedView} : val})
      }
    case 'SHOW_RETURN_DETAILS':
      return {...state, returnFlights: state.returnFlights.map((val, i) => {
        return val.index === action.payload ? {...val, expandedView: !val.expandedView} : val})
      }
    case 'SELECT_ONE_WAY':
      return {...state, flights: state.flights.map((val, i) => {
        return val.index === action.payload ? {...val, flightSelected: !val.flightSelected} : {...val, flightSelected: false } })
      }
    case 'SELECT_RETURN': 
      return {...state, returnFlights: state.returnFlights.map((val, i) => {
        return val.index === action.payload ? {...val, returnFlightSelected: !val.returnFlightSelected} : {...val, returnFlightSelected: false} })
      }
    default:
      return state
  }
}

//--------------------actions---------------------//


//instead of API call, mockdata has been used as mentioned per the mail

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
    let allflights = checkOneWayFlights(flightJson);

    allflights.forEach((val, i) => {
      dispatch({
        type: 'GET_FLIGHTS',
        payload: val,
        index: i
      })
    })
  }
}

export const getReturnFlights = () => {

  return (dispatch, getState) => {
    let allflightsReturn = checkReturnFlights(flightJson);

    allflightsReturn.forEach((val, i) => {
      dispatch({
        type: 'GET_FLIGHTS_RETURN',
        payload: val,
        index: i
      })
    })
  }
}


export const showDetails = payload => ({
  type: 'SHOW_DETAILS',
  payload
})

export const selectOneWayFlight = payload => ({
  type: 'SELECT_ONE_WAY',
  payload
})

export const selectReturnFlight = payload => ({
  type: 'SELECT_RETURN',
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
