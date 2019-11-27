var A = ['1 ', '10 ', '4 ', '9 ', '2 ', '3 ', '8 ', '5 ', '7 ', '6 '];
var N = A.length, X = 5;
var answer = [];
for (var number in A) {
    if (A[number] < X) {
      answer += A[number];
    } 
}
console.log(answer);
