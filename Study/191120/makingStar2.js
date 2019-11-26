for(var star = 1; star <= 13; star += 2) {
  console.log(" ".repeat(15.5-0.5*star) + "*".repeat(star));
}
for(var star = 32;star >= 18; star -= 2) {
  console.log(" ".repeat(16-(star/2)) + "*".repeat(star));
}
for(var star = 20;star <= 32; star += 2) {
  console.log(" ".repeat(16-(star/2)) + "*".repeat(star));
}
for(var star = 13;star >= 1; star -= 2) {
  console.log(" ".repeat(15.5-0.5*star) + "*".repeat(star));
}
