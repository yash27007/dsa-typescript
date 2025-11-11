/*
Hashing is a fundamental technique used to uniquely identify and store data in a way that allows for extremely fast retrieval. The average time complexity for insertion, deletion, and search operations is O(1) (constant time).Its core idea is to use a special function, called a hash function, to convert an input (like a string, number, or object) into a fixed-size integer. This integer is then used as an index to store the data in an array called a hash table.
*/

/**
 * Count the frequency of a number and print it
 */

function countFrequency(arr: number[]): void {
  let n = arr.length;
  // Make a visited array of type boolean, initialized to false
  let visited: boolean[] = new Array(n).fill(false);

  // Use the first loop to point to an element of the array
  for (let i = 0; i < n; i++) {
    // If the visited index is already true then skip the other steps
    if (visited[i]) {
      continue;
    }

    // Initialize the variable count to 1
    let count = 1;
    // Make that index true in the visited array
    visited[i] = true;

    // Run second loop starting from the next element
    for (let j = i + 1; j < n; j++) {
      // if we find the element
      if (arr[i] === arr[j]) {
        // then mark the visited index true and increase the count
        visited[j] = true;
        count++;
      }
    }
    console.log(`${arr[i]} ${count}`);
  }
}

/**
 * Function to print the number with the highest and the lowest frequency in an array
 */

function printMinMaxFrequency(array: number[]): void {
  // === Step 1: Build the Frequency Map ===
  const hashMap: Map<number, number> = new Map();

  for (const num of array) {
    const currentCount = hashMap.get(num) ?? 0;
    hashMap.set(num, currentCount + 1);
  }

  if (hashMap.size === 0) {
    console.log("Empty array");
    return;
  }

  let minFrequency = Infinity;
  let maxFrequency = 0;

  let minFreqNumber: number | null = null;
  let maxFreqNumber: number | null = null;

  for (const [number, frequency] of hashMap.entries()) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      maxFreqNumber = number;
    }

    if (frequency < minFrequency) {
      minFrequency = frequency;
      minFreqNumber = number;
    }
  }

  console.log(`${maxFreqNumber} ${minFreqNumber}`);
}

const array1 = [10, 5, 10, 15, 10, 5];
printMinMaxFrequency(array1);
// Output: 10 15
