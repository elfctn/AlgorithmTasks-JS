module.exports = isPalindrom;

/*
function isPalindrom(kelime) {
  kelime = kelime.toLowerCase();

  const tersKelime = kelime.split('').reverse().join('');

  return kelime === tersKelime;
}
*/

function isPalindrom(str) {
  return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}
