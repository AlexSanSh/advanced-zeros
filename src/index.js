module.exports = function getZerosCount(number, base) {
const factors = [];
let num = 2;
let countZeros = 0;
const getFactors = (number) => {
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
const getMainFactors = (arr) => {
  let count = 0;
  const maxItem = factors[factors.length-1];
  for (let i = 0; i < factors.length; i++) {
    if (factors[i]===maxItem) count ++;
  }
return [maxItem, count];
}
getFactors(base);
const mainFactors = getMainFactors(factors);
for (let i = number; i >=2; i--) {
        for (let j = i; j>=2; j=j/mainFactors[0]) {
          if (j%mainFactors[0]===0) countZeros++ ;
          else break;
        }
  }
  return countZeros/mainFactors[1];
}
