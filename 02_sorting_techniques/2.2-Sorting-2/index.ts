//@ts-nocheck


/**
 * The main "driver" function for Merge Sort.
 * It takes the unsorted array and starts the recursive "divide" process.
 * @param array The array to be sorted
 * @returns The *same* array, now sorted (this is an in-place sort)
 */
function mergeSort(array: number[]): number[] {
  // Start the recursive division process, covering the entire array
  // from the first element (index 0) to the last (index array.length - 1)
  divide(array, 0, array.length - 1);
  return array;
}

/**
 * The "Divide" part of "Divide and Conquer".
 * This function recursively splits the array into two halves
 * until it reaches individual elements (the base case).
 * @param array The array being sorted
 * @param low The starting index of the sub-array to divide
 * @param high The ending index of the sub-array to divide
 */
function divide(array: number[], low: number, high: number) {
  // === BASE CASE ===
  // If the 'low' index is the same as the 'high' index,
  // it means we're looking at a sub-array with only one element.
  // A single element is, by definition, already sorted.
  if (low === high) {
    return; // Stop the recursion
  }

  // === RECURSIVE STEP ===
  // 1. Find the middle point to split the array.
  // We use Math.floor() to ensure 'mid' is an integer.
  let mid = Math.floor((low + high) / 2);

  // 2. Recursively call 'divide' on the LEFT half: [low...mid]
  divide(array, low, mid);

  // 3. Recursively call 'divide' on the RIGHT half: [mid+1...high]
  divide(array, mid + 1, high);

  // 4. Once both halves are sorted independently,
  // call 'merge' to combine them into one sorted sub-array.
  merge(array, low, mid, high);
}

/**
 * The "Conquer" (or "Combine") part.
 * This function takes two adjacent, sorted sub-arrays
 * (which are part of the main 'array') and merges them
 * into a single sorted sub-array in the correct location.
 *
 * @param array The main array
 * @param low The starting index of the *first* sorted sub-array
 * @param mid The ending index of the *first* sorted sub-array
 * @param high The ending index of the *second* sorted sub-array
 */
function merge(array: number[], low: number, mid: number, high: number): void {
  // This function modifies 'array' in-place, so it returns void.

  // Create a temporary array to store the merged values.
  let temp = [];

  // === POINTERS ===
  // 'left' pointer starts at the beginning of the first sub-array [low...mid]
  let left = low;
  // 'right' pointer starts at the beginning of the second sub-array [mid+1...high]
  let right = mid + 1;

  // === MAIN COMPARISON LOOP ===
  // Compare elements from both sub-arrays and add the smaller one
  // to the 'temp' array.
  while (left <= mid && right <= high) {
    //@ts-ignore
    if (array[left] <= array[right]) {
      temp.push(array[left]);
      left++; // Move the 'left' pointer
    } else {
      temp.push(array[right]);
      right++; // Move the 'right' pointer
    }
  }

  // === CLEANUP LOOPS ===
  // At this point, one of the sub-arrays has been exhausted.
  // We need to copy any remaining elements from the *other* sub-array.

  // Copy remaining elements from the first sub-array (if any)
  while (left <= mid) {
    temp.push(array[left]);
    left++;
  }

  // Copy remaining elements from the second sub-array (if any)
  while (right <= high) {
    temp.push(array[right]);
    right++;
  }

  // === FINAL STEP: COPY BACK ===
  // The 'temp' array now holds all elements from [low...high] in sorted order.
  // We must copy these values back into the *original* 'array'
  // at the correct positions.
  for (let i = low; i <= high; i++) {
    // We use 'i - low' to get the correct index from the 'temp' array.
    // (e.g., the first element of 'temp' (temp[0]) corresponds to array[low])
    //@ts-ignore
    array[i] = temp[i - low];
  }
}

// === EXECUTION ===
// const array = [6, 2, 1, 5, 13, 12, 55, 34, 16, 75, 32];
// console.log("Original:", array);
// mergeSort(array); // This modifies the 'array' variable
// console.log("Sorted:  ", array);

// Output:
// Original: [ 6, 2, 1, 5, 13, 12, 55, 34, 16, 75, 32 ]
// Sorted:   [ 1, 2, 5, 6, 12, 13, 16, 32, 34, 55, 75 ]



/**
 * Swaps two elements in an array in place.
 * * @param array - The array containing elements to swap
 * @param i - Index of the first element
 * @param j - Index of the second element
 */
function swapArray(array: number[], i: number, j: number): void {
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
}

/**
 * Partitions the array around a pivot element.
 * Elements smaller than the pivot are moved to the left.
 * Elements larger than the pivot are moved to the right.
 * * Strategy: Uses the first element as the pivot.
 * * @param array - The array to partition
 * @param low - The starting index
 * @param high - The ending index
 * @returns The final index position of the pivot
 */
function partition(array: number[], low: number, high: number): number {
  const pivot = array[low];
  let i = low;
  let j = high;

  while (i < j) {
    // Move 'i' right as long as elements are <= pivot
    // We check i <= high - 1 to prevent index out of bounds
    while (array[i] <= pivot && i <= high - 1) {
      i++;
    }

    // Move 'j' left as long as elements are > pivot
    // We check j >= low + 1 to ensure we don't cross the start
    while (array[j] > pivot && j >= low + 1) {
      j--;
    }

    // If pointers haven't crossed, swap the misplaced elements
    if (i < j) {
      swapArray(array, i, j);
    }
  }

  // Place the pivot (currently at array[low]) into its correct sorted position (j)
  swapArray(array, low, j);
  
  return j;
}

/**
 * Recursive helper function to execute Quick Sort.
 * * @param array - The array to sort
 * @param low - The starting index
 * @param high - The ending index
 */
function qs(array: number[], low: number, high: number): void {
  if (low < high) {
    // Get the partitioning index
    const partitionIndex = partition(array, low, high);

    // Recursively sort elements before partition and after partition
    // Note: partitionIndex is excluded because the pivot is already sorted
    qs(array, low, partitionIndex - 1);
    qs(array, partitionIndex + 1, high);
  }
}

/**
 * Main Quick Sort function.
 * Time Complexity: O(n log n) on average, O(n^2) worst case.
 * Space Complexity: O(log n) due to recursion stack.
 * * @param array - The array of numbers to be sorted
 * @returns The sorted array
 */
function quickSort(array: number[]): number[] {
  qs(array, 0, array.length - 1);
  return array;
}

// --- Execution ---
// const array = [6, 2, 1, 5, 13, 12, 55, 34, 16, 75, 32];

// console.log("Original:", array);
// quickSort(array);
// console.log("Sorted:  ", array);