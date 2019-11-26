var number = prompt("몇 개를 출력하고 싶은가요?");
var sum = 0;
var ans = "";
for(var i = 1; i < Number(number) + 1; i++) {
    var numA = prompt("두 숫자 중 하나");
    var numB = prompt("나머지 숫자");
    sum = Number(numA) + Number(numB);
    ans = ('Case #' + i + ': ' + numA + ' + ' + numB + ' = ' + sum);
    console.log(ans);
}
