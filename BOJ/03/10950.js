var T = prompt('테스트 케이스의 개수?'); // A+B를 몇 번 반복할 지 그 횟수를 입력받음.
for(var i = 1; i <= T; i++) {  // 입력받은 횟수만큼 반복.
  var A = prompt('A?');  // 두 수 중 하나 입력받음.
  var B = prompt('B?');  // 두 수 중 다른 하나 입력받음.
  var ans = Number(A) + Number(B);  // 덧셈 실행
  console.log(ans);  // 결과 출력
} 
