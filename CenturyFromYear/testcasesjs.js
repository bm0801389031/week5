describe("Basic Tests", function() {
  it("Should pass sample tests", function() {
    Test.expect(squareSum([1,2]), 'squareSum did not return a value')
    Test.assertEquals(squareSum([1,2]), 5)
    Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
    Test.assertEquals(squareSum([]), 0)
    Test.assertEquals(squareSum([-1,-2]), 5)
    Test.assertEquals(squareSum([-1,0,1]), 2)
  });
});


describe("Random Tests", function() {
  let squareSol = n => n.reduce((p, c) => p + c * c, 0),
      arrLen, testArr;
  for (let i = 0; i < 40; i++) {
    arrLen = Math.floor(Math.random() * 9) + 2;
    testArr = [];
    for (let j = 0; j < arrLen; j++) {
        testArr.push(Math.floor(Math.random() * 41) - 20);
    }    
    it("Testing for [" + testArr + "]", function() {
      Test.assertEquals(squareSum(testArr.slice()),squareSol(testArr),"It should work for random tests too")
    }); 
  }  
});  