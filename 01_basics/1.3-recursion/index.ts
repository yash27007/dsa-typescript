/**
 * Prints a name n times using recursion
 * @param name - The string to print
 * @param n - Number of times to print
 */
function printNTimes(name: string, n: number): void {
    if (n <= 0) {
        return;
    }
    if (n === 1) {
        console.log(name);
        return;
    }
    console.log(name);
    printNTimes(name, n - 1);
}

/**
 * Prints numbers from current to n using recursion
 * @param current - The starting number
 * @param n - The ending number
 */
function printNNumbers(current: number, n: number): void {
    if (current > n) {
        return;
    }
    console.log(current);
    printNNumbers(current + 1, n);
}

/**
 * Calculates the sum of numbers from 1 to n using recursion
 * @param n - The upper limit number
 * @returns The sum of numbers from 1 to n
 */
function sumOfN(n: number): number {
    if (n <= 0) {
        return 0;
    }
    return n + sumOfN(n - 1);
}

/**
 * Calculates the factorial of a number using recursion
 * @param n - The number to calculate factorial for
 * @returns The factorial of n
 */
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Checks if a string is a palindrome
 * @param text - The string to check
 * @returns True if the string is a palindrome, false otherwise
 */
function checkPalindrome(text: string): boolean {
    return text === text.split('').reverse().join('');
}
