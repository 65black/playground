// link to problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(time: string): string {
  let convertedTime
  const hour = +time.slice(0, 2)
  const meridian = time.includes('AM')
    ? 'AM'
    : time.includes('PM')
    ? 'PM'
    : null

  if (hour < 12 && meridian === 'PM') {
    convertedTime = `${12 + hour}${time.slice(2, time.indexOf(meridian))}`
  } else if (hour === 12 && meridian === 'AM') {
    convertedTime = `00${time.slice(2, time.indexOf(meridian))}`
  } else if (hour === 12 && meridian === 'PM') {
    convertedTime = `12${time.slice(2, time.indexOf(meridian))}`
  } else {
    convertedTime = `0${hour}${time.slice(2, time.indexOf(meridian))}`
  }

  return convertedTime
}
