/**
 * function to get time param drived from input seconds.
 * @param {number} seconds - integer number
 * @returns {Sting} numbers of hours, minutes and seconds
 */

function getTimeParameter(seconds) {

  if(seconds < 0) {
    alert('Please enter a valid time in Seconds');
    return;
  }

  let time = new Date(0000, 0, 0, 0, 0, seconds);

  let hours = time.getHours(),
    minutes = time.getMinutes(),
    second = time.getSeconds();

  return `Hours = ${hours}\n Minutes = ${minutes}\n seconds = ${second}`;
}

console.log(getTimeParameter(129));
