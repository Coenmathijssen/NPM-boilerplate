/*!
 * create a random number between two numbers <https://github.com/Coenmathijssen/NPM-boilerplate>
 *
 * Copyright (c) 2018-2019, Coen Mathijssen.
 * Licensed under the MIT License.
 */

module.exports = randomNumber

const randomNumber = (firstNumber, secondNumber) => {
  return Math.floor(Math.random() * secondNumber) + firstNumber
}
