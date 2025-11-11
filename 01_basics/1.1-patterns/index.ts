/*
This file contains the patterns problems solutions
Resource Link : https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
*/

/**
 * Pattern 1: Square pattern with stars
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 */
function pattern1(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

// pattern1(5);

/**
 * Pattern 2: Right-angled triangle with stars
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 */
function pattern2(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

// pattern2(5);

/**
 * Pattern 3: Right-angled triangle with increasing numbers in each row
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */
function pattern3(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += `${j + 1} `;
        }
        console.log(row);
    }
}

// pattern3(5);

/**
 * Pattern 4: Right-angled triangle with same number in each row
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 */
function pattern4(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += `${i + 1} `;
        }
        console.log(row);
    }
}

// pattern4(5);

/**
 * Pattern 5: Inverted right-angled triangle with stars
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 * *
 */
function pattern5(n: number): void {
    for (let i = n; i > 0; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

// pattern5(5);

/**
 * Pattern 6: Inverted right-angled triangle with increasing numbers
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */
function pattern6(n: number): void {
    for (let i = n; i > 0; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += `${j + 1} `;
        }
        console.log(row);
    }
}

// pattern6(5);

/**
 * Pattern 7: Pyramid pattern with stars
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */
function pattern7(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// pattern7(5);

/**
 * Pattern 8: Inverted pyramid pattern with stars
 * *********
 *  *******
 *   *****
 *    ***
 *     *
 */
function pattern8(n: number): void {
    for (let i = n; i > 0; i--) {
        let row = "";
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }
        for (let j = 0; j < 2 * i - 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// pattern8(5);

/**
 * Pattern 9: Diamond pattern with stars
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 * *********
 *  *******
 *   *****
 *    ***
 *     *
 */
function pattern9(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            row += "*";
        }
        console.log(row);
    }
    for (let i = n; i > 0; i--) {
        let row = "";
        for (let j = 0; j < n - i; j++) {
            row += " ";
        }
        for (let j = 0; j < 2 * i - 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// pattern9(5);

/**
 * Pattern 10: Triangle and inverted triangle pattern
 *   *
 *   * *
 *   * * *
 *   * * * *
 *   * * * * *
 *   * * * *
 *   * * *
 *   * *
 *   *
 *   *
 */
function pattern10(n: number): void {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }

    for (let i = n - 1; i > 0; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

pattern10(5);   