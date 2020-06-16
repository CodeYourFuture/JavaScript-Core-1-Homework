/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(price) {
  let saleTax = (20 / 100) * price;
  let totalPrice = price + saleTax;

  return totalPrice;
}

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that transforms numbers into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function formatCurrency(price) {
  let formatPrice = calculateSalesTax(price).toFixed(2);

  return `£${formatPrice}`;
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 4-tax.js` into your terminal
*/

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test("calculateSalesTax function - case 1 works", calculateSalesTax(15) === 18);
test(
  "calculateSalesTax function - case 2 works",
  calculateSalesTax(17.5) === 21
);
test(
  "calculateSalesTax function - case 3 works",
  calculateSalesTax(34) === 40.8
);

test("formatCurrency function - case 1 works", formatCurrency(15) === "£18.00");
test(
  "formatCurrency function - case 2 works",
  formatCurrency(17.5) === "£21.00"
);
test("formatCurrency function - case 3 works", formatCurrency(34) === "£40.80");
