function findFirstPalindrome(words) {
    for (const word of words) {
        const isPalindrome = word === word.split("").reverse().join("");
        if (isPalindrome) {
            console.log(`${word} is a palindrome`);
            return word;
        } else {
            console.log(`${word} is not a palindrome`);
        }
    }
}

const words = ["racecar", "kayak", "wow", "hello", "dog"];
const palindrome = findFirstPalindrome(words);