// Fibonacci Sequence
 
var x = 0, y = 1;
var num = 10; // 출력할 항 개수
 
for(var i = 1; i < num; i++) {
    console.log(y);
    var z = y + x;
    x = y;
    y = z;
}
