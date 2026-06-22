/**
 * Arrays Medium Level Problems
 */

/**
 * 1. Two Sum: Check if a pair with given sum exists in array
 * 1st variant: Return YES if a pair exists, else NO.
 * 2nd variant: Return indices of the two numbers, else [-1, -1].
 */

class TwoSum {
  bruteForceExists(array: number[], k: number): string {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i]! + array[j]! === k) {
          return "YES";
        }
      }
    }

    return "NO";
  }

  bruteForceIndices(array: number[], k: number): [number, number] {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i]! + array[j]! === k) {
          return [i, j];
        }
      }
    }

    return [-1, -1];
  }

  optimalExists(array: number[], k: number): string {
    const seen = new Set<number>();

    for (const num of array) {
      const complement = k - num;
      if (seen.has(complement)) {
        return "YES";
      }
      seen.add(num);
    }

    return "NO";
  }

  optimalIndices(array: number[], k: number): [number, number] {
    const indexMap = new Map<number, number>();

    for (let i = 0; i < array.length; i++) {
      const num = array[i]!;
      const complement = k - num;

      if (indexMap.has(complement)) {
        return [indexMap.get(complement) as number, i];
      }

      indexMap.set(num, i);
    }

    return [-1, -1];
  }
}

// 2. Sort an array of 0s, 1s and 2s

function sortArrayCounting(array: number[]): number[] {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;

  for (const num of array) {
    if (num === 0) {
      zeroCount++;
    } else if (num === 1) {
      oneCount++;
    } else {
      twoCount++;
    }
  }

  let index = 0;
  while (zeroCount > 0) {
    array[index++] = 0;
    zeroCount--;
  }
  while (oneCount > 0) {
    array[index++] = 1;
    oneCount--;
  }
  while (twoCount > 0) {
    array[index++] = 2;
    twoCount--;
  }

  return array;
}

function sortArrayDutchNationalFlag(array: number[]): number[] {
  let low = 0;
  let mid = 0;
  let high = array.length - 1;

  while (mid <= high) {
    if (array[mid] === 0) {
      [array[low], array[mid]] = [array[mid] as number, array[low] as number];
      low++;
      mid++;
    } else if (array[mid] === 1) {
      mid++;
    } else {
      [array[mid], array[high]] = [array[high] as number, array[mid] as number];
      high--;
    }
  }

  return array;
}

function sortArray(array: number[]): number[] {
  return sortArrayDutchNationalFlag(array);
}

// 3. Find the Majority Element that occurs more than N/2 times

function findMajorityElement(array: number[]): number {
  let num = -1;
  const elements = new Map<number, number>();
  for (const arr of array) {
    elements.set(arr, (elements.get(arr) ?? 0) + 1);
  }

  const threshold = Math.floor(array.length / 2);

  for (const [element, count] of elements) {
    if (count > threshold) {
      num = element;
  }
}
  return num;
}

function findMajorityElementOptimal(array: number[]): number {
  if (array.length === 0) return -1;

  let count = 0;
  let candidate = array[0]!;

  for (const num of array) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Verify candidate occurs more than n/2 times
  let occurrences = 0;
  for (const num of array) {
    if (num === candidate) occurrences++;
  }

  return occurrences > Math.floor(array.length / 2) ? candidate : -1;
}

// 4. Max subarray sum -> Kadane's Algorithm

function maxSubArrayBruteForce(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0]!;
  }
  let max_sum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    let curr_sum = 0;
    for (let j = i; j < array.length; j++) {
      curr_sum = curr_sum + array[j]!;
      if (curr_sum > max_sum) {
        max_sum = curr_sum;
      }
    }
  }
  return max_sum;
}

function maxSubArrayOptimal(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0]!;
  }
  let max_sum = Number.NEGATIVE_INFINITY;
  let curr_sum = 0;
  for (let i = 0; i < array.length; i++) {
    curr_sum = curr_sum + array[i]!;
    if (curr_sum > max_sum) {
      max_sum = curr_sum;
    }
    if (curr_sum < 0) {
      curr_sum = 0;
    }
  }
  return max_sum;
}

function printMaxSubArray(array:number[]):number[]{
  let start = 0
  let tempstart = 0
  let end = 0
  if(array.length ===0){
    return []
  }
  if(array.length === 1){
    return array
  }
  let max_sum = Number.NEGATIVE_INFINITY
  let curr_sum = 0
  for(let i = 0; i< array.length; i++){
    curr_sum = curr_sum + array[i]!;
    if(curr_sum > max_sum){
      start = tempstart
      end = i
      max_sum = curr_sum
    }
    if(curr_sum < 0){
      curr_sum = 0;
      tempstart = i+1
    }
  }
  return array.slice(start,end+1)
}

// 4. Buy and sell stocks

const buyAndSellStocksBrute = (prices:number[]):number =>{
  if(prices.length === 0) return 0
  let maxProfit = 0
  for (const [i, buyPrice] of prices.entries()) {
    for (const [j, sellPrice] of prices.entries()) {
      if (j <= i) continue
      const currProfit = sellPrice - buyPrice
      if (currProfit > maxProfit) maxProfit = currProfit
    }
  }
  return maxProfit
}

const buyAndSellStocks = (prices:number[]):number =>{
  if(prices.length === 0) return 0
  let minPrice = prices[0]!
  let maxProfit = 0
  for (const price of prices) {
    if (price < minPrice) minPrice = price
    const currProfit = price - minPrice
    if (currProfit > maxProfit) maxProfit = currProfit
  }
  return maxProfit
}

// 6. Rearrange Array Elements by Sign

function rearrangeBySignBruteForce(array: number[]): number[] {
  if (array.length === 0) return [];
  const pos: number[] = [], neg: number[] = [];
  for (const v of array) {
    if (v < 0) neg.push(v);
    else pos.push(v);
  }
  let pcount = 0, ncount = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) array[i] = pos[pcount++]!;
    else array[i] = neg[ncount++]!;
  }
  return array;
}

function rearrangeBySignOptimal(array: number[]): number[] {
  const res = new Array(array.length).fill(0);
  let posIdx = 0, negIdx = 1;
  for (const v of array) {
    if (v > 0) { res[posIdx] = v; posIdx += 2; }
    else { res[negIdx] = v; negIdx += 2; }
  }
  return res;
}

// 7. Next Permutation

function nextPermutation(array: number[]): number[] {
  const n = array.length;
  let pivot = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (array[i]! < array[i + 1]!) { pivot = i; break; }
  }
  if (pivot === -1) {
    array.reverse();
    return array;
  }
  for (let i = n - 1; i > pivot; i--) {
    if (array[i]! > array[pivot]!) {
      [array[i], array[pivot]] = [array[pivot]!, array[i]!];
      break;
    }
  }
  // splice removes the suffix and returns it, then reverse in-place, then spread back
  const suffix = array.splice(pivot + 1).reverse();
  array.push(...suffix);
  return array;
}

// 8. Leaders in Array

function leaderArrayBruteForce(array: number[]): number[] {
  const n = array.length;
  const leaders: number[] = [array[n - 1]!];
  for (let i = n - 2; i >= 0; i--) {
    let isLeader = true;
    for (let j = i + 1; j < n; j++) {
      if (array[j]! > array[i]!) { isLeader = false; break; }
    }
    if (isLeader) leaders.push(array[i]!);
  }
  return leaders;
}

function leaderArrayOptimal(array: number[]): number[] {
  const n = array.length;
  const leaders: number[] = [array[n - 1]!];
  let maxSoFar = array[n - 1]!;
  for (let i = n - 2; i >= 0; i--) {
    if (array[i]! >= maxSoFar) {
      maxSoFar = array[i]!;
      leaders.push(array[i]!);
    }
  }
  return leaders.reverse();
}

// 9a. Longest Consecutive Sequence

function longestConsecutiveBruteForce(array: number[]): [number, number[]] {
  if (array.length === 0) return [0, []];
  array.sort((a, b) => a - b);
  let maxLength = 1, currentLength = 1;
  let bestStartVal = array[0]!, currentStartVal = array[0]!;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) continue;
    if (array[i] === array[i - 1]! + 1) {
      currentLength++;
      if (currentLength > maxLength) { maxLength = currentLength; bestStartVal = currentStartVal; }
    } else {
      currentLength = 1;
      currentStartVal = array[i]!;
    }
  }
  return [maxLength, Array.from({ length: maxLength }, (_, i) => bestStartVal + i)];
}

function longestConsecutiveOptimal(array: number[]): [number, number[]] {
  if (array.length === 0) return [0, []];
  const numSet = new Set(array);
  let maxLength = 0, bestStartVal = array[0]!;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentLength = 1;
      while (numSet.has(num + currentLength)) currentLength++;
      if (currentLength > maxLength) { maxLength = currentLength; bestStartVal = num; }
    }
  }
  return [maxLength, Array.from({ length: maxLength }, (_, i) => bestStartVal + i)];
}

// 9b. Set Matrix Zeroes

class SetMatrixZero {
  bruteForce(matrix: number[][]): number[][] {
    if (matrix.length === 0) return [];
    const zeros: [number, number][] = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i]!.length; j++) {
        if (matrix[i]![j] === 0) zeros.push([i, j]);
      }
    }
    for (const [row, col] of zeros) {
      for (let j = 0; j < matrix[row]!.length; j++) matrix[row]![j] = 0;
      for (let i = 0; i < matrix.length; i++) matrix[i]![col] = 0;
    }
    return matrix;
  }

  optimal(matrix: number[][]): number[][] {
    if (matrix.length === 0) return [];
    const rows = matrix.length, cols = matrix[0]!.length;
    const colZero = matrix.some(row => row[0] === 0);
    for (let i = 0; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i]![j] === 0) { matrix[0]![j] = 0; matrix[i]![0] = 0; }
      }
    }
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[0]![j] === 0 || matrix[i]![0] === 0) matrix[i]![j] = 0;
      }
    }
    if (matrix[0]![0] === 0) {
      for (let j = 0; j < cols; j++) matrix[0]![j] = 0;
    }
    if (colZero) {
      for (let i = 0; i < rows; i++) matrix[i]![0] = 0;
    }
    return matrix;
  }
}

// 10. Rotate Matrix by 90 Degrees

class RotateMatrixNinety {
  bruteForce(matrix: number[][]): number[][] {
    if (matrix.length === 0) return [];
    const rows = matrix.length, cols = matrix[0]!.length;
    const transpose: number[][] = Array.from({ length: cols }, () => new Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transpose[j]![i] = matrix[i]![j]!;
      }
    }
    for (const row of transpose) row.reverse();
    return transpose;
  }

  optimal(matrix: number[][]): number[][] {
    if (matrix.length === 0) return [];
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [matrix[i]![j], matrix[j]![i]] = [matrix[j]![i]!, matrix[i]![j]!];
      }
    }
    for (const row of matrix) row.reverse();
    return matrix;
  }
}

// 11. Spiral Traversal

function spiralTraversal(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];
  const result: number[] = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0]!.length - 1;
  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) result.push(matrix[top]![col]!);
    top++;
    for (let row = top; row <= bottom; row++) result.push(matrix[row]![right]!);
    right--;
    if (top <= bottom) {
      for (let col = right; col >= left; col--) result.push(matrix[bottom]![col]!);
      bottom--;
    }
    if (left <= right) {
      for (let row = bottom; row >= top; row--) result.push(matrix[row]![left]!);
      left++;
    }
  }
  return result;
}

// 12. Count Subarrays with Given Sum

class SubArraySum {
  bruteForce(array: number[], k: number): number {
    if (array.length === 0) return 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      let currentSum = 0;
      for (let j = i; j < array.length; j++) {
        currentSum += array[j]!;
        if (currentSum === k) count++;
      }
    }
    return count;
  }

  optimal(array: number[], k: number): number {
    if (array.length === 0) return 0;
    let count = 0, prefixSum = 0;
    const prefixCounts = new Map<number, number>([[0, 1]]);
    for (const num of array) {
      prefixSum += num;
      count += prefixCounts.get(prefixSum - k) ?? 0;
      prefixCounts.set(prefixSum, (prefixCounts.get(prefixSum) ?? 0) + 1);
    }
    return count;
  }
}