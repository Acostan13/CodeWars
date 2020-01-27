/*Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
Your task is to make 'Past' function which returns time converted to miliseconds.*/

function past(h, m, s){
  let msInAnHour = 3600000 * h;
  let msInAMinute = 60000 * m;
  let msInASecond = 1000 * s;
  let totalMilliseconds = msInAnHour + msInAMinute + msInASecond;
  return totalMilliseconds;
}