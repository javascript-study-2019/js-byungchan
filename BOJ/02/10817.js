var A = 20, B = 30, C = 10;
if ((A <= B && A >= C) || (A <= C && A >= B)) {
  console.log(A);
} else if ((B >= A && B <= C) || (B >= C && B <= A)) {
  console.log(B);
} else {
  console.log(C);
}
