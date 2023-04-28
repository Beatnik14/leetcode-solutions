// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (x: number): boolean => {

    let temp = 0;
    let temp1 = x;

    while (temp1 >= 1) {
        temp = temp * 10 + temp1%10;
        temp1 = Math.floor(temp1/10);
    }
    console.log(temp, x)
    return temp == x
};

console.log(isPalindrome(1233211))
