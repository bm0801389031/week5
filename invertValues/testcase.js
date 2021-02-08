describe("Invert array values", function(){
  it("Basic Tests", function(){
    Test.assertDeepEquals(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    Test.assertDeepEquals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
    Test.assertDeepEquals(invert([]), []);
    Test.assertDeepEquals(invert([0]), [0]);
  });
  it("Random Tests", function() {
    
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function sol(array) {
        return array.map(function(n) {return n === 0 ? 0: -n;});
    } 
    
    function generateArr() {
        var arr = [], n = rand(5, 100);
        for(var i = 0; i < n; i++) {
           arr.push(rand(-100,100));
        }
        return arr;
    }
    
    for(var i = 0; i < 100; i++) {
      var v = generateArr();
      Test.assertDeepEquals(invert(v.slice()), sol(v));
    }
  });
});