/**
 * Solutions to basic math problems from Striver sheet
 */

/**
 * Counts the number of digits in a given number
 * @param n - The number to count digits from
 * @returns The count of digits
 */
function countDigits(n: number): number {
    const count = Math.floor(Math.log10(n) + 1);
    return count;
}

/**
 * Reverses a given number
 * @param n - The number to reverse
 * @returns The reversed number
 */
function reverseNumber(n: number): number {
    let rev = 0;
    while (n > 0) {
        const ld = n % 10;
        rev = (rev * 10) + ld;
        n = Math.floor(n / 10);
    }
    return rev;
}

/**
 * Checks if a number is a palindrome
 * @param n - The number to check
 * @returns True if the number is a palindrome, false otherwise
 */
function checkPalindrome(n: number): boolean {
    return n === reverseNumber(n);
}

/**
 * Calculates the GCD of two numbers using Euclidean Algorithm
 * @param a - First number
 * @param b - Second number
 * @returns The GCD of the two numbers
 */
function gcd(a: number, b: number): number {
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    
    if (a === 0) {
        return b;
    }
    return a;
}

/**
 * Checks if a number is an Armstrong number
 * @param n - The number to check
 * @returns True if the number is an Armstrong number, false otherwise
 */
function armstrongNumber(n: number): boolean {
    const dup = n;
    let sum = 0;
    const dig = countDigits(n);
    
    while (n > 0) {
        const ld = n % 10;
        sum = sum + Math.pow(ld, dig);
        n = Math.floor(n / 10);
    }
    
    return sum === dup;
}
