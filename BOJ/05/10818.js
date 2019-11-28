var numArrayLength = 5;
var numArray = [20, 10, 35, 30, 7];
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
} // 배열의 최대값 구해주는 함수

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
} // 배열의 최소값 구해주는 함수

console.log(getMinOfArray(numArray), getMaxOfArray(numArray));
