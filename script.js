import { WORDS } from "./word.js"

const NUMBER_OF_GUESSES = 6
let guessesRemaning = NUMBER_OF_GUESSES
let currentGuess = []
let nextLetter = 0
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)