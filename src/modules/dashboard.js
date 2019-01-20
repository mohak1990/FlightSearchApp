import axios from 'axios'
import flightJson from '../mockdata/data.json'
import {getTimeDifference} from "../utils"
import { setModal } from './ui'
import actions from "../constants/actions"
import moment from 'moment'

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

  return flights;
}

function checkFlights(flightJson, from, to, date){

  let originFlights = [];
  let destinationFlights = [];
  let flights = [];

  flightJson.forEach((data, i) => {
    if(moment(data.date, "YYYY/MM/DD").isSame(moment(date)))
    {
      if(data.origin === from && data.destination === to)
      {
        flights.push(data);
      }
      else if(data.origin === from)
      {
        originFlights.push(data);
      }
      else if(data.destination === to)
      {
        destinationFlights.push(data);
      }
    }
  })
  return setFlightArr(flights, originFlights, destinationFlights)
}

const dashboardReducer = (state = "", action) => {
  switch (action.type) {
    case actions.CLEAR_FLIGHTS:
      return {...state, flights: [], returnFlights: []}
    case actions.GET_FLIGHTS:
      return {...state, flights: [...state.flights, {flightDetail: action.payload, index: action.index, expandedView : false}]}
    case actions.GET_FLIGHTS_RETURN:
      return {...state, returnFlights: [...state.returnFlights, {flightDetail: action.payload, index: action.index, expandedView : false}]}
    case actions.FLIGHT_INFO:
      return {...state, info: action.payload}
    case actions.FLIGHT_COUNT:
      return {...state, count: action.payload}
    case actions.FLIGHT_DAY:
      return {...state, day: action.payload}
    case actions.SHOW_DETAILS:
      return {...state, flights: state.flights.map((val, i) => {
        return val.index === action.payload ? {...val, expandedView: !val.expandedView} : val})
      }
    case actions.SHOW_RETURN_DETAILS:
      return {...state, returnFlights: state.returnFlights.map((val, i) => {
        return val.index === action.payload ? {...val, expandedView: !val.expandedView} : val})
      }
    case actions.SELECT_ONE_WAY:
      return {...state, flights: state.flights.map((val, i) => {
        return val.index === action.payload ? {...val, flightSelected: !val.flightSelected} : {...val, flightSelected: false } })
      }
    case actions.SELECT_RETURN:
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

export const filterFlights = () => {

   return dispatch => {
     dispatch(clearFlights()).then(() => {
       dispatch(getFlights())
       dispatch(getReturnFlights())
     })
   }
}

export const clearFlights = () => {

  return (dispatch, getState) => {
    dispatch({
      type: actions.CLEAR_FLIGHTS
    })
    return Promise.resolve();
  }
}

export const getFlights = () => {

  return (dispatch, getState) => {
    const originCity = getState().filterPanel.originCity;
    const destCity = getState().filterPanel.destCity;
    const depDate = getState().filterPanel.depDate;

    let allflights = checkFlights(flightJson, originCity, destCity, depDate);

    allflights.forEach((val, i) => {
      dispatch({
        type: actions.GET_FLIGHTS,
        payload: val,
        index: i
      })
    })
  }
}

export const getReturnFlights = () => {

  return (dispatch, getState) => {
    const originCity = getState().filterPanel.originCity;
    const destCity = getState().filterPanel.destCity;
    const returnDate = getState().filterPanel.returnDate;

    let allflightsReturn = checkFlights(flightJson, destCity, originCity, returnDate);

    allflightsReturn.forEach((val, i) => {
      dispatch({
        type: actions.GET_FLIGHTS_RETURN,
        payload: val,
        index: i
      })
    })
  }
}


export const showDetails = payload => ({
  type: actions.SHOW_DETAILS,
  payload
})

export const selectOneWayFlight = payload => ({
  type: actions.SELECT_ONE_WAY,
  payload
})

export const selectReturnFlight = payload => ({
  type: actions.SELECT_RETURN,
  payload
})

// export const flightCount = payload => ({
//   type: 'FLIGHT_COUNT',
//   payload
// })
//
// export const flightDay = payload => ({
//   type: 'FLIGHT_DAY',
//   payload
// })

export const confirmBooking = (payload) => {
  return (dispatch, getState) => {
    console.log("payload")
    console.log(payload)
    axios({
        method: 'POST',
        url: 'https://example.com/request',
        data: JSON.stringify({payload}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((data) => {
        dispatch(setModal(false));
      }).catch(()=>{
        dispatch(setModal(false));
    })
  }
}

export default dashboardReducer
