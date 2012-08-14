var approx = require('./index.js')
  , assert = require('assert')

var phi = 1.618033988749
  , pi = Math.PI

function testApprox(name, expected, precision) {

    var ratio = eval(name)
      , actual = approx(ratio, precision)

    assert.equal(actual, expected,
        "For " + name + " expected " + expected + ", got " + actual)
}

testApprox('0.5', 1/2)
testApprox('10', 10)
testApprox('pi', 22/7)
testApprox('phi', 13/8)
