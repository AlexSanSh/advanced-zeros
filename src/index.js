module.exports = function getZerosCount(number, base) {
const factors = [];
let num = 2;
let countZeros = 0;
let count = 0;
function getFactors(number) {
  if (number%num===0) {
    factors.push(num);
    number = number / num;
    getFactors(number);
  }else if (number%num!==0) {
    if (!(number < num)) {
      num++;
      getFactors(number);
    }
  }
}
getFactors(base);
const maxItem = factors[factors.length-1];
  for (let i = 0; i < factors.length; i++) {
    if (factors[i]===maxItem) count++;
    else continue;
  };
for (let i = number; i >=maxItem; i--) {
        for (let j = i; j>=maxItem; j=j/maxItem) {
          if (j%maxItem===0) countZeros++ ;
          else break;
        }
  }
  return countZeros/count;
};
