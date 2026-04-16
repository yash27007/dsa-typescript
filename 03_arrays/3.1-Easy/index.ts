//@ts-nocheck
/**
 * Arrays
 */

// 1. Find the largest in  the array

function largest(array: number[]): number {
  let max = array.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, array[0]);

  return max;
}

// 2. Find the second largest in an array

function secondLargest(array: number[]): number {
  // Check if array has enough elements
  if (array.length < 2) {
    throw new Error("Array must have atlest 2 values");
  }

  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (current > largest) {
      second = largest;
      largest = current;
    } else if (current > second && current !== largest) {
      // Update second only if it's a new unique runner-up
      second = current;
    }
  }

  return second;
}

// 3. Check if an arrray is sorted

function checkSorted(array: number[]): bool {
  if (array.length < 2) {
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
// console.log(secondLargest([2, 4, 4, 5, 6, 7, 8, 22, 22, 34]));

// 4. Remove duplicates from a sorted array

function removeDuplicates(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }
  let i = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] != array[i]) {
      i++;
      array[i] = array[j];
    }
  }
  return array.slice(0, i + 1);
}

// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5, 6]));

// 5. Left Rotate an array

function leftRotate(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }
  let temp = array[0];

  for (let i = 0; i <= array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = temp;
  return array;
}

console.log(leftRotate([1, 2, 3, 4, 5]));

// 6. Rotate an array by k times with side

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    // Using destructuring for an easy swap
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

function rotateArray(
  nums: number[],
  k: number,
  side: "left" | "right",
): number[] {
  const n = nums.length;
  if (n < 2) return nums;

  k = k % n;
  if (k === 0) return nums;

  if (side === "right") {
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
  } else {
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    reverse(nums, 0, n - 1);
  }

  return nums;
}

// Testing
const list = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(list, 2, "right"));
// Output: [6, 7, 1, 2, 3, 4, 5]

// 7. Move zeros

function moveZeros(array: number[]): number[] {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[i], array[j]] = [array[j], array[i]];
      j++;
    }
  }
  return array;
}

console.log(moveZeros([1, 0, 2, 3, 0, 4, 0, 1]));

// 8. Linear Search

function linearSearch(array: number[], key: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key) {
      return i;
    }
  }
  return -1;
}

// 9 . Union of two sorted arrays
class UnionArray {
  /**

       * freq.get(array[i])

       * The code asks the Map: "What is the current count for this number?" If the number is already in the Map, it returns the current number (e.g., 1).

       * If the number is NOT in the Map yet, it returns undefined.

       *
       * This is the Logical OR operator. In JavaScript, undefined is "falsy."

       * If freq.get() returns a number (like 1), the code uses that number.

       * If freq.get() returns undefined, the code "falls back" to 0.

       * This ensures you are always performing math on a number, never on undefined.

       * 4. The Increment: + 1

       * Now that the code has either the existing count or a 0, it adds 1 to it.

       */

  // Brute Force: Using Map
  FindUnionBruteforce(array1: number[], array2: number[]): number[] {
    let freq = new Map<number, number>();
    for (let i = 0; i < array1.length; i++) {
      freq.set(array1[i], (freq.get(array1[i]) || 0) + 1);
    }
    for (let j = 0; j < array2.length; j++) {
      freq.set(array2[j], (freq.get(array2[j]) || 0) + 1);
    }
    return Array.from(freq.keys()).sort((a, b) => a - b);
  }

  // Language Feature: Using Set
  FindUnionSet(array1: number[], array2: number[]): number[] {
    const st = new Set([...array1, ...array2]);
    return Array.from(st).sort((a, b) => a - b);
  }

  // Optimal: Two-Pointer (Assumes input arrays are already sorted)
  FindUnionOptimal(array1: number[], array2: number[]): number[] {
    let i = 0;
    let j = 0;
    let union: number[] = [];

    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        if (union.length === 0 || union[union.length - 1] !== array1[i]) {
          union.push(array1[i]);
        }
        if (array1[i] === array2[j]) j++; // Move both if equal
        i++;
      } else {
        if (union.length === 0 || union[union.length - 1] !== array2[j]) {
          union.push(array2[j]);
        }
        j++;
      }
    }

    // Append remaining elements after the main loop finishes
    while (i < array1.length) {
      if (union[union.length - 1] !== array1[i]) {
        union.push(array1[i]);
      }
      i++;
    }
    while (j < array2.length) {
      if (union[union.length - 1] !== array2[j]) {
        union.push(array2[j]);
      }
      j++;
    }

    return union;
  }
}

class IntersectionArray {
  intersectionBruteForce(array1: number[], array2: number[]): number[] {
    let intersection: number[] = [];
    let visited: number[] = new Array(array2.length).fill(0);

    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j] && visited[j] == 0) {
          intersection.push(array1[i]);
          visited[j] = 1;
          break;
        }

        if (array2[j] > array1[i]) {
          break;
        }
      }
    }

    return intersection;
  }

  intersectionOptimal(array1: number[], array2: number[]): number[] {
    let intersection = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        i++;
      } else if (array2[j] < array1[i]) {
        j++;
      } else {
        intersection.push(array1[i]);
        i++;
        j++;
      }
    }

    return intersection;
  }
}

let array1 = [1, 2, 2, 3, 3, 4, 5];
let array2 = [2, 3, 3, 6, 7, 8];

const obj = new IntersectionArray();
const result = obj.intersectionOptimal(array1, array2);
console.log("Intersection : ", result);

// 11. Consecutive ones

function consecutiveOnes(array: number[]): number {
  let count = 0;
  for (let x of array) {
    if (x === 1) {
      count++;
    }
    if (x === 0) {
      count = 0;
    }
  }
  return count;
}

//  12 . find unique number

class Unique {
  findUniqueBruteforce(array: number[]): number {
    const freq = new Map<number, number>();

    for (const x of array) {
      freq.set(x, (freq.get(x) || 0) + 1);
    }

    for (const [num, count] of freq) {
      if (count === 1) return num;
    }

    return -1;
  }

  findUniqueOptimal(array: number[]): number {
    let xor = 0;
    for (let arr of array) {
      xor = xor ^ arr;
    }

    return xor;
  }
}

// 13. Longest sub-array with sum k

class MaxSubarray {
  maxSubArrayBruteForce(array: number[], k: number): number {
    let maxLength = 0;
    const n = array.length;

    for (let i = 0; i < n; i++) {
      let currentSum = 0;
      for (let j = i; j < n; j++) {
        currentSum += array[j];

        if (currentSum === k) {
          const currentLength = j - i + 1;
          if (currentLength > maxLength) {
            maxLength = currentLength;
          }
        }
      }
    }

    return maxLength;
  }

  // Works when array contains non-negative numbers.
  maxSubArrayOptimal(array: number[], k: number): number {
    let maxLength = 0;
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < array.length; right++) {
      currentSum += array[right];

      while (left <= right && currentSum > k) {
        currentSum -= array[left];
        left++;
      }

      if (currentSum === k) {
        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
          maxLength = currentLength;
        }
      }
    }

    return maxLength;
  }
}

// Universal approach: works with positives, zeros, and negatives.
function longestSubarrayWithSumK(array: number[], k: number): number {
  const preSumMap = new Map<number, number>();
  let currentSum = 0;
  let maxLen = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];

    if (currentSum === k) {
      if (i + 1 > maxLen) {
        maxLen = i + 1;
      }
    }

    const rem = currentSum - k;
    if (preSumMap.has(rem)) {
      const length = i - (preSumMap.get(rem) as number);
      if (length > maxLen) {
        maxLen = length;
      }
    }

    // Store only first occurrence of each prefix sum.
    if (!preSumMap.has(currentSum)) {
      preSumMap.set(currentSum, i);
    }
  }

  return maxLen;
}

// Example usage:
// const mx = new MaxSubarray();
// console.log(mx.maxSubArrayBruteForce([1, 2, 1, 1, 1], 3)); // 3
// console.log(mx.maxSubArrayOptimal([1, 2, 1, 1, 1], 3)); // 3
// console.log(longestSubarrayWithSumK([2, -1, 2, 3, -2, 1], 3)); // 5
