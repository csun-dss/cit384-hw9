// Part 1: Display today's date in MM/DD/YYYY format.
const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const year = today.getFullYear();
document.getElementById("dateOutput").textContent = `Today is ${month}/${day}/${year}`;

// Part 2: Convert four separate string values without arrays or loops.
const firstValue = "58";
const secondValue = "23.45";
const thirdValue = "banana";
const fourthValue = "120";

const firstNumber = Number(firstValue);
const secondNumber = Number(secondValue);
const thirdNumber = Number(thirdValue);
const fourthNumber = Number(fourthValue);

const firstResult = `Original: "${firstValue}" | Converted: ${firstNumber} | isNaN: ${Number.isNaN(firstNumber)} | isInteger: ${Number.isInteger(firstNumber)}`;
const secondResult = `Original: "${secondValue}" | Converted: ${secondNumber} | isNaN: ${Number.isNaN(secondNumber)} | isInteger: ${Number.isInteger(secondNumber)}`;
const thirdResult = `Original: "${thirdValue}" | Converted: ${thirdNumber} | isNaN: ${Number.isNaN(thirdNumber)} | isInteger: ${Number.isInteger(thirdNumber)}`;
const fourthResult = `Original: "${fourthValue}" | Converted: ${fourthNumber} | isNaN: ${Number.isNaN(fourthNumber)} | isInteger: ${Number.isInteger(fourthNumber)}`;

// Two if/else statements give additional validation feedback.
let validityMessage;
if (Number.isNaN(thirdNumber)) {
  validityMessage = "The third value is not a valid number.";
} else {
  validityMessage = "The third value is a valid number.";
}

let integerMessage;
if (Number.isInteger(secondNumber)) {
  integerMessage = "The second value is an integer.";
} else {
  integerMessage = "The second value is not an integer.";
}

const conversionOutput = document.getElementById("numberConversionOutput");
conversionOutput.textContent = firstResult + "\n" + secondResult + "\n" + thirdResult + "\n" + fourthResult + "\n\n" + validityMessage + "\n" + integerMessage;

// Part 3: Use three numeric values for a simple purchase calculation.
const itemPrice = 39.95;
const shippingCost = 6.50;
const taxRate = 0.08;
const subtotal = itemPrice + shippingCost;
const taxAmount = itemPrice * taxRate;
const totalCost = subtotal + taxAmount;

document.getElementById("mathOutput").textContent =
  `Item price: $${itemPrice.toFixed(2)}\n` +
  `Shipping: $${shippingCost.toFixed(2)}\n` +
  `Subtotal (addition): $${subtotal.toFixed(2)}\n` +
  `Tax (multiplication): $${taxAmount.toFixed(2)}\n` +
  `Total: $${totalCost.toFixed(2)}`;
