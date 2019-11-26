var number = prompt("몇 개를 출력하고 싶은가요?");
var sum = 0;
for(var i = 0; i < number; i++) {
    var numA = prompt("두 숫자 중 하나");
    var numB = prompt("나머지 숫자");
    sum = Number(numA) + Number(numB);
    console.log(numA + '와' + numB + '의' + ' 합은?');
    console.log(sum);
}
