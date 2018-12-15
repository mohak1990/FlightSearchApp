import moment from "moment";


export function getTimeDifference(depDate, depTime, arrDate, arrTime){

  var startTime =  moment(`${depDate} ${depTime}`, "YYYY-MM-DD HH:mm");
  var endTime = moment(`${arrDate} ${arrTime}`, "YYYY-MM-DD HH:mm");

  var duration = moment.duration(moment(endTime).diff(startTime));

  return duration;
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

export function getDistinct1(array, prop){
  const distinctData = [...new Set(array.map(obj => obj[prop])) ];
  return distinctData;
}
