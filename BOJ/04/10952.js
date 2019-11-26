var i = 1;
var sum = 0;
while(i < 7) {
    var numA = prompt("두 숫자 중 하나");
    var numB = prompt("나머지 숫자");
    sum = Number(numA) + Number(numB);
    console.log(sum);
    i++;
}
