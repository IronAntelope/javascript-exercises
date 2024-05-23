const palindromes = function (str) {
  let arr = str.toLowerCase().replace(/[!.,' ']/g, "").split("");
  let revArr = [...arr].reverse();
  console.log(arr);
  console.log(revArr);

  let newStr = arr.toString();
  let newRevStr = revArr.toString();

  return (newStr === newRevStr) ? true : false;
};

// console.log(palindromes('ZZZZ car, a man, a maracaz.'));

// Do not edit below this line
module.exports = palindromes;
