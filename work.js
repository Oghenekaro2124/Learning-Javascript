// A function that reverses a given string using a for loop
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Example usage
  console.log(reverseString('ground')); // Output: 'dnuorg'



//   A function that counts the number of characters in a string
function countCharacters(str) {
    return str.length;
  }
  
  // Example usage
  console.log(countCharacters('hello')); // Output: 5
  console.log(countCharacters('JavaScript')); // Output: 10



//   A function that capitalizes the first letter of each word
function capitalizeWords(sentence) {
    // Split the sentence into an array of words
    return sentence
      .split(' ')                  // Split the sentence by spaces
      .map(word =>                  // Map each word to a new version
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');                   // Join the words back into a sentence
  }
  
  // Example usage
  console.log(capitalizeWords('learning javascript from scratch')); // Output: 'Learning Javascript From Scratch'


//   A function to find the maximum and minimum values in an array of numbers 
function findMax(arr) {
    return Math.max(...arr);
  }
  
  // Example usage
  console.log(findMax([1, 3, 7, 2, 5])); // Output: 7

  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // Example usage
  console.log(findMin([1, 3, 7, 2, 5])); // Output: 1

//   A function that calculates the sum of elements in an array 
//  Using Array.prototype.reduce()

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // Example usage
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  
//   A function that filters out elements from an array based on a given condition
// Handling edge cases
function filterArray(arr, condition) {
    if (!Array.isArray(arr)) {
      throw new TypeError('The first argument must be an array');
    }
    if (typeof condition !== 'function') {
      throw new TypeError('The second argument must be a function');
    }
    return arr.filter(condition);
  }
  
  // Example usage
  try {
    console.log(filterArray([1, 2, 3], num => num > 1)); // Output: [2, 3]
  } catch (error) {
    console.error(error.message);
  }
  
//   A function  to calculate the factorial of a given number
// Using Iteration
function factorialIterative(n) {
    if (n < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Example usage
  console.log(factorialIterative(5)); // Output: 120

//   A function to check if a nummber is prime or not
function isPrime(n) {
    if (n <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
    if (n <= 3) {
      return true; // 2 and 3 are prime
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false; // Multiples of 2 or 3 are not prime
    }
  
    // Check for factors from 5 to sqrt(n)
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Example usage
  console.log(isPrime(29)); // Output: true
  console.log(isPrime(15)); // Output: false

//   Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

function generateFibonacci(n) {
    if (n <= 0) {
      return []; // Return an empty array for non-positive input
    }
    
    // Initialize the first two Fibonacci numbers
    const sequence = [0, 1];
    
    // Generate the sequence up to n terms
    while (sequence.length < n) {
      const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextTerm);
    }
    
    return sequence.slice(0, n); // Return only the first n terms
  }
  
  // Example usage
  console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
  console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  
