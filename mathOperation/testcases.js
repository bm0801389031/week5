console.log("Basic tests\n");
Test.assertSimilar(basicOp('+', 4, 7), 11);
Test.assertSimilar(basicOp('-', 15, 18), -3);
Test.assertSimilar(basicOp('*', 5, 5), 25);
Test.assertSimilar(basicOp('/', 49, 7), 7);

console.log("Random tests\n");
console.log("+\n");
for (let i = 0; i < 5; i++)
{
  let temp = Math.floor(Math.random() * 1005);
  let temp2 = Math.floor(Math.random() * 1005);
  Test.assertSimilar(basicOp('+', temp, temp2), temp + temp2);
}
console.log("-\n");
for (let i = 0; i < 5; i++)
{
  let temp = Math.floor(Math.random() * 1005);
  let temp2 = Math.floor(Math.random() * 1005);
  Test.assertSimilar(basicOp('-', temp, temp2), temp - temp2);
}
console.log("*\n");
for (let i = 0; i < 5; i++)
{
  let temp = Math.floor(Math.random() * 1005);
  let temp2 = Math.floor(Math.random() * 1005);
  Test.assertSimilar(basicOp('*', temp, temp2), temp * temp2);
}
console.log("/\n");
for (let i = 0; i < 5; i++)
{
  let temp = Math.floor(Math.random() * 1005);
  let temp2 = Math.floor(Math.random() * 1005);
  Test.assertSimilar(basicOp('/', temp, temp2), temp / temp2);
}