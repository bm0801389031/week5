Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);
Test.assertDeepEquals(digitize(23582357),[7,5,3,2,8,5,3,2]);
Test.assertDeepEquals(digitize(984764738),[8,3,7,4,6,7,4,8,9]);
Test.assertDeepEquals(digitize(45762893920),[0,2,9,3,9,8,2,6,7,5,4]);
Test.assertDeepEquals(digitize(548702838394),[4,9,3,8,3,8,2,0,7,8,4,5]);

Test.describe('Random tests', function() {
  var i, x, y;
  for (x = i = 1; i <= 37; x = ++i) {
    y = 10 + Math.ceil((9 * Math.pow(1.7, x) - 10) * Math.random());
    Test.it('Testing ' + y, function() {
      Test.assertDeepEquals(digitize(y), y.toString().split('').reverse().map(Number));
    });
  }
});