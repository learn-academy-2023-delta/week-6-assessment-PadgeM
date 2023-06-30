// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('generateSentences', () => {
  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

  const expectedOutput = [
    "Ford Prefect is a hitchhiker.",
    "Zaphod Beeblebrox is president of the galaxy.",
    "Arthur Dent is a radio employee."
  ]

  const result = generateSentences(hitchhikersCharacters)

  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
    expect(result).toEqual(expectedOutput)
  })

  result.forEach((sentence, index) => {
    it(`returns the expected sentence for character ${index + 1}`, () => {
      expect(sentence).toBe(expectedOutput[index])
    })
  })
})



// // b) Create the function that makes the test pass.

const generateSentences = (characters) => {
  return characters.map(character => {
    const capitalized = character.name
      .split(' ')
      .map(name => name.charAt(0).toUpperCase() + name.slice(1))
      .join(' ')
    return `${capitalized} is ${character.occupation}.`
  })
}



// Pseudo code:

// const generateSentences = (characters) => { declares a function named generateSentences that takes in an array of characters as its parameter.
// return characters.map(character => { uses the map function to iterate over each character in the characters array.
//   Inside the map callback, const capitalized = character.name assigns the name property of the current character to a variable named capitalized. 
//   .split(' ') splits the capitalized string into an array of words by using a space as the separator.
//   .map(name => name.charAt(0).toUpperCase() + name.slice(1)) iterates over each word in the array and capitalizes the first letter of each word. The charAt(0) method returns the first character of the word, toUpperCase() converts it to uppercase, and name.slice(1) extracts the rest of the word starting from the second character.
//   .join(' ') joins the array of capitalized words back together into a single string, using a space as the separator. 
// ${capitalized} is ${character.occupation}. constructs the sentence by combining the capitalized name, the word "is," and the occupation of the character. The resulting sentence is returned.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('getRemainders', () => {
  it('returns an array of remainders when given a mixed data array', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

    expect(getRemainders(hodgepodge1)).toEqual([2, 0, 0, -1, 0])
    expect(getRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})


// b) Create the function that makes the test pass.

const getRemainders = (mixedArray) => {
  return mixedArray
    .filter(item => typeof item === 'number')
    .map(number => number % 3)
}


// Pseudo code:
// const getRemainders = (mixedArray) => { declares a function named getRemainders that takes in a mixed data array as its parameter.
//   .filter(item => typeof item === 'number') filters the mixedArray to create a new array that only contains elements of type 'number'. It checks the type of each item using the typeof operator and keeps only the items that are 'number'.
//   .map(number => number % 3) maps over each number in the filtered array and calculates its remainder when divided by 3 using the modulus operator %. The resulting remainders are collected and returned as an array. 

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('NumSum', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]

    expect(NumSum(cubeAndSum1)).toEqual(99)
    expect(NumSum(cubeAndSum2)).toEqual(1125)
  })
})


// b) Create the function that makes the test pass.

const NumSum = (numbers) => {
  return numbers.reduce((sum, number) => sum + Math.pow(number, 3), 0)
}


// Pseudo code:
// const NumSum = (numbers) => { declares a function named NumSum that takes in an array of numbers as its parameter.
//   .reduce((sum, number) => sum + Math.pow(number, 3), 0) uses the reduce method to iterate over each number in the array and accumulate the sum of their cubes. 
//   In each iteration, (sum, number) are the parameters representing the accumulated sum and the current number being processed. 
//   Math.pow(number, 3) calculates the cube of the current number using the Math.pow function, where the number is raised to the power of 3. 
//   sum + Math.pow(number, 3) adds the cube of the current number to the accumulated sum. 
//   The initial value of the sum is set to 0 as specified by the , 0 argument at the end of the reduce method.
