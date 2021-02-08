/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a for loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForLoop = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + "!");
  }
  return newArr;
};

// const shoutForLoop = (arr) => arr.map((el) => el + "!");
// console.log(shoutForLoop(["I", "am", "a", "happy", "array"]));

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a while loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @return {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutWhileLoop = arr => {
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(arr[i] + "!")
    i++
  }
  return newArr
};

/**
 * Takes in an array and returns a new array with element
 * getting a ! added to the end.
 * Must use a [for/of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop
 * @param {Array} - ["I", "am", "a", "happy", "array"]
 * @returns {Array} - ["I!", "am!", "a!", "happy!", "array!"]
 */

const shoutForOfLoop = arr => {
  let newArr = [];
  for (let el of arr) {
    newArr.push(el + "!");
  }
  return newArr;
};

/**
 * Takes in an array and returns the sum of all values
 * @param {number[]} nums
 * @returns {number} sum
 */

const sumArray = nums => {
  let sum = 0;
  nums.forEach((el) => {
    sum += el
  })
  return sum
};


/**
 * Takes in an array and returns an array of all the odd valued elements
 * @param {number[]} nums
 * @returns {array} odds
 */

const oddArray = nums => nums.filter(el => el % 2 === 1)

/**
 * Takes in an array and returns an array of all the even valued elements
 * @param {number[]} nums
 * @returns {array} evens
 */

const evenArray = nums => nums.filter(el => el % 2 === 0)

/**
 * Takes in array and returns the smallest number in the array
 * @param {number[]} nums
 * @returns {number} smallest value
 */

const findSmallest = nums => {
  let smallestNum = Infinity;
  nums.forEach(el => {
    if (el < smallestNum) {
      smallestNum = el
    }
  })
  return smallestNum
};

/**
 * Takes in array and returns the second smallest number in the array
 * You may NOT use sort
 * @param {number[]} nums
 * @returns {number} second smallest value
 */

 //*** revisit ***/
const findSecondSmallest = nums => {
 let smallestNum = Infinity;
 let secondSmallest = Infinity;
 for (let i = 0; i < nums.length; i++) {
   if (nums[i] < secondSmallest) {
    secondSmallest = nums[i]
    } else if (secondSmallest < smallestNum)
    smallestNum = secondSmallest; 
 }
 return secondSmallest
};

/**
 * Takes in array and returns the second largest number in the array
 * @param {number[]} nums
 * @returns {number} second largest value
 */

 //*** revisit ***/
const findSecondLargest = () => {};

/**
 * Takes in array and returns an array with all the values but with no duplicates.
 * Exp Input: [4,2,6,2,2,6,4,9,2,1] Output: [4, 2, 6, 9, 1]
 * @param {number[]} nums
 * @returns {array} nums without the duplicates
 */
// Hint: Look into the `.includes` method.


// could this be written with another array method?
// const removeDups = arr => {
//   return arr.filter((el) => {
//     return !arr.includes(el)
//   })
// }

const removeDups = arr => {
  const newArr = [];
  arr.forEach(el => {
    if (!newArr.includes(el)) {
      newArr.push(el)
    }
  })
  return newArr;
}


//*** revisit ***/
// const removeDups = arr => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }

module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findSecondSmallest,
  findSecondLargest,
  removeDups,
};
