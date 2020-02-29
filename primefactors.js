function primeFactors(number) {
    var factors = [];
    var divisor = 2;

    while(number > 1) {
        if(number % divisor == 0) {
            factors.push(divisor);
            number = number / divisor;
        }  else {
            divisor++;
        }
    }
    return factors;
}

var test = require('unit.js');
describe('Test numbers', function(){
    it ("1", function() { primeFactors(1).must.be.eql([]); });
    it ("2", function() { primeFactors(2).must.be.eql([2]); });
    it ("3", function() { primeFactors(3).must.be.eql([3]); });
    it ("4", function() { primeFactors(4).must.be.eql([2,2]); });
    it ("5", function() { primeFactors(5).must.be.eql([5]); });
    it ("6", function() { primeFactors(6).must.be.eql([2,3]); });
    it ("7", function() { primeFactors(7).must.be.eql([7]); });
    it ("8", function() { primeFactors(8).must.be.eql([2,2,2]); });
    it ("9", function() { primeFactors(9).must.be.eql([3,3]); });
    it ("10", function() { primeFactors(10).must.be.eql([2,5]); });
    it ("11", function() { primeFactors(11).must.be.eql([11]); });
    it ("12", function() { primeFactors(12).must.be.eql([2,2,3]); });
    it ("13", function() { primeFactors(13).must.be.eql([13]); });
    it ("14", function() { primeFactors(14).must.be.eql([2,7]); });
    it ("15", function() { primeFactors(15).must.be.eql([3,5]); });
    it ("16", function() { primeFactors(16).must.be.eql([2,2,2,2]); });
    it ("17", function() { primeFactors(17).must.be.eql([17]); });
    it ("18", function() { primeFactors(18).must.be.eql([2,3,3]); });
    it ("19", function() { primeFactors(19).must.be.eql([19]); });
    it ("20", function() { primeFactors(20).must.be.eql([2,2,5]); });
    it ("21", function() { primeFactors(21).must.be.eql([3,7]); });
    it ("22", function() { primeFactors(22).must.be.eql([2,11]); });
    it ("25", function() { primeFactors(25).must.be.eql([5,5]); });
    it ("35", function() { primeFactors(35).must.be.eql([5,7]); });
});
