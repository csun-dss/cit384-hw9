# CIT 384 Homework 9

A single webpage demonstrating JavaScript built-in objects, number conversion, validation, arithmetic, conditionals, and browser DOM output.

## Built-in objects and methods used

- `Date`, `getMonth()`, `getDate()`, `getFullYear()` — read today's date.
- `String()` and `padStart()` — format the month and day with leading zeros.
- `Number()` — convert strings to numeric values.
- `Number.isNaN()` — identify unsuccessful number conversions.
- `Number.isInteger()` — identify integers.
- `toFixed(2)` — display money amounts with two decimal places.
- `document.getElementById()` and `textContent` — display JavaScript results on the webpage.
- `if/else` — choose messages based on conversion and integer checks.

## Live GitHub Pages site



## Screenshot



Save a screenshot of the running page as `screenshot.png` in this repository before submitting.

## Reflection 

The easiest part was creating the variables for the number conversion tests. The hardest part was formatting the date so the month and day always had two digits. I learned that the Date object counts months starting at zero, so I need to add one to get the correct month. I learned that Number() converts numeric strings but returns NaN for text that is not a number, and that Number.isInteger() can check the converted result. I also learned how to use getElementById() and textContent to show JavaScript results directly on a webpage.
