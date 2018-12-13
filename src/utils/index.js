import moment from "moment";


export function getTimeDifference(depDate, depTime, arrDate, arrTime){
  const timeDiff = {};

  var startTime =  moment(`${depDate} ${depTime}`, "YYYY-MM-DD HH:mm");
  var endTime = moment(`${arrDate} ${arrTime}`, "YYYY-MM-DD HH:mm");

  var duration = moment.duration(moment(endTime).diff(startTime));
  timeDiff["hours"] = duration.hours();
  timeDiff["minutes"] = duration.minutes();
  return timeDiff;
}

export function getTravelTime(data){

  let dateDiff = getTimeDifference(data.date, data.departureTime, data.date, data.arrivalTime);
  let hours = dateDiff.hours;
  let minutes = dateDiff.minutes;

  let str = `${hours}h ${minutes}m`
  return str;
}
