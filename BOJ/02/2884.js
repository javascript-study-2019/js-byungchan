var hour, min;
hour = 10, min = 10;
if(hour >= 0 && hour <= 23) { 
  if (min >= 0 && min <= 44) {
    hour -= 1;
    min = (min + 60) - 45;
    console.log(String(hour) + ' ' + String(min));
  } else {
    min = min - 45;
    console.log(String(hour) + ' ' + String(min));
  }
}
