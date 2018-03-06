module.exports = function getZerosCount(number, base) {
const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
let factorial = number;
let countSystem = base;
const primes = [];
 for (let i = 0; i < primeNums.length; i++) {
   if (countSystem>1) {
       while (countSystem%primeNums[i]===0) {
         primes.push(primeNums[i]);
         countSystem /= primeNums[i];
     }
   }
 }
const maxPrime = primes[primes.length-1];
let pow = 0;
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]===maxPrime) pow++;
  };
let zeroQuantity = 0;
 while (factorial/maxPrime>0) {
   zeroQuantity+=parseInt(factorial/maxPrime);
   factorial = parseInt(factorial/maxPrime);
 }

 return parseInt(zeroQuantity/pow);
};
