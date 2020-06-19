// Add comments to explain what this function does. You're meant to use Google!
// a function with no parameters passed. The function is to multiply the given value with 10.
function getNumber() {
	// It will return numbers from 0 to 9 multiplied by 10.
	return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
// This is a function with 2 parameters to concatenate 2 values
function s(w1, w2) {
	// The value of (w2) will be added to after the value of (w1);
	return w1.concat(w2);
}

function concatenate(firstWord, secondWord, thirdWord) {
	// Write the body of this function to concatenate three words together
	return firstWord.concat(" ", secondWord, " ", thirdWord);
	// Look at the test case below to understand what to expect in return
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-function-output` into your terminal
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

test(
	"concatenate function - case 1 works",
	concatenate("code", "your", "future") === "code your future"
);
test(
	"concatenate function - case 2 works",
	concatenate("I", "like", "pizza") === "I like pizza"
);
test(
	"concatenate function - case 3 works",
	concatenate("I", "am", 13) === "I am 13"
);
