var N = prompt('몇 단을 출력할까요?'); // 출력받을 단의 숫자 N을 입력받음.
for(var i = 1; i < 10; i++) {   // 곱셈 9번 반복
  ans = N * i;
  console.log(String(N) + '*' + String(i) + '=' + String(ans)); 
}

// or

var N = 2;
for(var i = 1; i < 10; i++) {
  ans = N * i;
  console.log(String(N) + '*' + String(i) + '=' + String(ans));
}
