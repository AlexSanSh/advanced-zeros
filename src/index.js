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
  const factorsCopy = factors.slice();
  factorsCopy.sort((a,b)=>a-b);
  const maxItem = factorsCopy[factorsCopy.length-1];
  factorsCopy.forEach(item=>{if (item===maxItem) count++;});
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
