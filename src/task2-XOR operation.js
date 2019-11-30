/**
 *  function to perform xor operation of all the numbers in range L to R (inclusive)
 *  and return even or odd of resultent xor operation
 *
 * @param {number} T - number of test case
 *
 * @reference - If the count of Odd Numbers is even,
                    XOR of all odd numbers = Even
                    XOR of all even numbers = Even
                    Final XOR = Even ^ Even = Even


                    If the count of Odd Numbers is Odd,
                    XOR of all odd numbers = Odd
                    XOR of all even numbers = Even
                    Final XOR = Odd ^ Even = Odd
 */
// change the testcase argument here
xorOfRange(7);

function xorOfRange(T) {

  if (T <= 0) {
    alert("Please test for atleast 1 testcase");
    return;
  }

  console.log(`${T}\n`);

  for (let i = 1; i <= T; i++) {

    // Provide your inputs here
      let firstInput = prompt("Input starting positive integer number", 1);
      let secondInput = prompt("Input ending positive integer number", 1);

      xorOperation(firstInput, secondInput);
  }

  /**
   * @param {number} L - integer number
   * @param {number} R - integer number
   * @returns {string} result - odd or even
   */

  function xorOperation(L, R) {

    let oddCount = Math.floor((R - L)/2);

    if(R % 2 == 1 || L % 2 ==1) oddCount++;

    if(oddCount % 2 == 1) console.log('odd');

    else console.log('even');
  }
}
