function isPalindrome(string) {
  // convert string to an array
  const arrayValues = string.split("");

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert reversed array to string
  const reverseString = reverseArrayValues.join("");

  return string == reverseString;
}

module.exports = isPalindrome;
