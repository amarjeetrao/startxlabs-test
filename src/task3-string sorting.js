/**
 * function to sort input stings in ascending order based on first character of each strings
 * @param {Array} - array of input strings
 * @returns {void} - loging sorted strings in ascending order
 *
 */

function sortStrings() {

  if(arguments.length == 0) {
    alert('Please pass at least one string aurgument to the function');
    return;
  }

  let localArrayOfStrings = [...arguments];
  let sortedArrayOfStrings = localArrayOfStrings.sort();

  sortedArrayOfStrings.forEach(string => {
    console.log(string);
  });
}

sortStrings("zill", "marjeet", "dd", "jjdfs");
