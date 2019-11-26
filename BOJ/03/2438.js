var star = '*';
var N = prompt('몇 번째 줄까지?');
for(var i = 0; i < N; i++) {
  console.log(star.repeat(i+1));
}
