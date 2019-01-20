import constants from "../constants";

const initialState =  {
  filterPanel:
  {
    passengers : constants.passengers,
    isReturnFlight : false,
    originCity : "",
    destCity : "",
    depDate: null,
    returnDate: null,
    passengerCount: "0"
  },
  dashboard:
  {
    flights: [],
    returnFlights: []
  }
}


export default initialState;
