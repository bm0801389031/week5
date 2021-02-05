describe("Example tests", function(){
    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    var actual = countPositivesSumNegatives(testData);
    var expected = [10, -65];

    Test.assertDeepEquals(actual, expected);
    
    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];
    
    Test.assertDeepEquals(actual, expected);
});

describe("Wrong values tests", function(){
    var testData = null;
    var actual = countPositivesSumNegatives(testData);

    Test.assertDeepEquals(actual, []);
    
    testData = [];
    actual = countPositivesSumNegatives(testData);
    
    Test.assertDeepEquals(actual, []);
});

describe("100 Random Tests", function(){
    var solution = function(input) {
        var result = [];

        if (input == null || input.length == 0)
        {
            return result;
        }
        
        result.push(0);
        result.push(0);
        
        for(let i = 0; i < input.length; i++)
        {
            if (input[i] > 0)
            {
                result[0]++;
            }
            else
            {
                result[1] += input[i];
            }
        }
        
        return result;
    }

    for (let i = 0; i < 100; i++)
    {
        let testData = [];
      
        let testDataSize = Math.floor(Math.random()*100);
        
        for (let y = 0; y < testDataSize; y++)
        {
            testData.push(Math.floor(Math.random() * 100) * (Math.random() < 0.5 ? 1 : -1));
        }
        
        var expected = solution(testData);
        var actual = countPositivesSumNegatives(testData);
        
        Test.assertDeepEquals(actual, expected);
    }
});