var n = prompt('1부터 몇까지의 합?'); // 입력받은 숫자까지의 합을 구하기 위해 숫자 입력받음.
var sum = 0; // 총합을 0으로 초기화
for(var i = 1; i <= n; i++) {   // 입력받은 숫자까지 차례로 1씩 더해짐.
    sum += i;
}
console.log('1부터 ' + n + ' 까지의 합');
console.log(sum); // 그 총합 출력
