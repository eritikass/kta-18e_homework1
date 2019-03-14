function capitalize(word) {
  if (typeof word !== 'string') {
    throw new Error('input is not string');
  }
  const firstLetter = word.substr(0, 1);
  const otherLetters = word.substr(1);
  return firstLetter.toUpperCase() + otherLetters;
}
  
module.exports = capitalize;
  