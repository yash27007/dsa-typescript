//@ts-nocheck
/**
 * Important Sorting techniques
 */

/**
 * Selection sort
 * @param array Takes in an unsorted array
 * @returns Returns a sorted array
 *
 */

function selectionSort(array: number[]): number[] {
  // The outer loop 'i' iterates from the start to the second-to-last element.
  // 'i' represents the boundary between the sorted (left) and unsorted (right) parts.
  for (let i = 0; i < array.length - 1; i++) {
    // --- 1. FIND THE MINIMUM ---

    // Assume the first element of the unsorted part (at index 'i') is the smallest.
    let minIndex = i;

    // The inner loop 'j' scans the rest of the unsorted part of the array.
    for (let j = i + 1; j < array.length; j++) {
      // If we find an element smaller than our current minimum,
      // update minIndex to point to this new smallest element.
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // --- 2. SWAP ---

    // After the inner loop, 'minIndex' holds the index of the smallest
    // element in the unsorted part.

    // We only need to swap if the minimum isn't already in its correct place.
    // This is a small optimization.
    if (minIndex !== i) {
      // Standard swap logic
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

function bubbleSort(array: number[]): number[] {
  const n = array.length;
  let swapped = false;
  // using swapped as a flag for optimization
  for (let i = 0; i < n - 1; i++) {
    // The inner loop goes from the start to the (n - i - 1)th element.
    // Elements after (n - i - 1) are already in their correct, sorted place.
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (array[j] > array[j + 1]) {
        // Swap them if they're in the wrong order
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
        // You can also use modern a modern JS/TS swap:
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      if (!swapped) {
        break;
      }
      console.log("runs");
    }
  }
  return array;
}

function insertionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
        [array[j-1],array[j]] = [array[j], array[j-1]]
        j--
    }
  }
  return array
}

const array = [9,34,1,3,5,53,53,1,2,12,4];
console.log(insertionSort(array));
