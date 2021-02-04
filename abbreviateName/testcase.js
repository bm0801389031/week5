Test.assertEquals(abbrevName("Sam Harris"), "S.H");
Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
Test.assertEquals(abbrevName("Evan Cole"), "E.C");
Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
Test.assertEquals(abbrevName("David Mendieta"), "D.M");

Test.assertEquals(abbrevName("george clooney"), "G.C");
Test.assertEquals(abbrevName("marky mark"), "M.M");
Test.assertEquals(abbrevName("eliza doolittle"), "E.D");
Test.assertEquals(abbrevName("reese witherspoon"), "R.W");


for(var i = 0; i < 200; i++){
  testString = makeString();
  Test.assertEquals(abbrevName(testString), randomTest(testString));
}

function makeString() {
    return makeWord(1, 20) + " " + makeWord(1, 20)
  }

function makeWord(min, max) {
  var array = [];
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var length = Math.ceil((Math.random() * max) + min)

  for( var i=0; i < length; i++ ) {
      array.push(possible[(Math.floor(Math.random() * possible.length))]);
  }

  return array.join("");
}

function randomTest(name){
  var arr = name.split(" ");
  return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase()
}