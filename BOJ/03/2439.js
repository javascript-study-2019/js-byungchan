var star = '*';
var N = prompt('몇 번째 줄까지?');
for(var i = 1; i <= N; i++) {
  console.log(' '.repeat(Number(N) - i) + star.repeat(i));
}
