var year = 2000;
if ((year%04 === 0) && ((year%100 !== 0) || (year%400 === 0))) {
  console.log('1')
} else {
  console.log('0')
}
