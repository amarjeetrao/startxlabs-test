/**
 * function to sort input stings in ascending order based on first character of each strings
 * @param {Array} - array of input strings
 * @returns {void} - loging sorted strings in ascending order
 *
 */

function sortStrings() {
  let localArrayOfStrings = [...arguments];
  let sortedArrayOfStrings = localArrayOfStrings.sort();

  sortedArrayOfStrings.forEach(string => {
    console.log(string);
  });
}

sortStrings("zill", "marjeet", "dd", "jjdfs");
