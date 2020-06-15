function sTax(Price) {
  let salesTax = 0.2 * Price;
  return salesTax;
}

function calculateSalesTax(Price) {
  let tax = sTax(Price);
  return tax + Price;
}

function formatCurrency(Price) {
  let tax = sTax(Price);
  lastPrice = Price + tax;
  return "£" + lastPrice.toFixed(2);
}

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
