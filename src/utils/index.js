import moment from "moment";

export function getTimeDifference(depDate, depTime, arrDate, arrTime){

  var startTime =  moment(`${depDate} ${depTime}`, "YYYY-MM-DD HH:mm");
  var endTime = moment(`${arrDate} ${arrTime}`, "YYYY-MM-DD HH:mm");

  var duration = moment.duration(moment(endTime).diff(startTime));

  return duration;
}

export function checkSelection(isReturnFlight, flights, returnFlights){

  let oneWaySelection = false;
  let returnSelection = false;

  if(!isReturnFlight){
    flights.forEach((val, i) => {
      if(val.flightSelected)
      {
        oneWaySelection = val.flightDetail;
      }
    })
  }
  else {
    flights.forEach((val, i) => {
      if(val.flightSelected)
      {
        oneWaySelection = val.flightDetail;
      }
    })

    returnFlights.forEach((val, i) => {
      if(val.returnFlightSelected)
      {
        returnSelection = val.flightDetail;
      }
    })
  }

  if(!isReturnFlight && oneWaySelection)
  {
    return {oneWay: oneWaySelection, totalAmount: oneWaySelection.price};
  }
  else if(isReturnFlight && oneWaySelection && returnSelection)
  {
    return {oneWay: oneWaySelection, return: returnSelection, totalAmount: oneWaySelection.price + returnSelection.price};
  }
  else
  {
    return false;
  }
}


export function getTravelTime(depDate, depTime, arrDate, arrTime){
  let duration = getTimeDifference(depDate, depTime, arrDate, arrTime);
  let hours = duration.hours();
  let minutes = duration.minutes();

  let str = `${hours}h ${minutes}m`
  return str;
}

export function getDistinct(arr, prop){
  const distArray = [];
  arr.forEach((obj, i) => {
     if(!distArray.includes(obj[prop]))
     {
       distArray.push(obj[prop]);
     }
  })
  return distArray;
}
