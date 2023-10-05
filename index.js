/* Pseudocode steps for exercise solution

- create string with message statement and combination (secretMessage)
- create first number using arithmetic operator - use addition (code1) - answer must return 10.
- create second number using arithmetic operator - use multiplication and subtraction (code2) - answer must return 40.
- create third number using arithmetic operator use division (code3) - answer must return 39.
- create "alert" so dialogue box shows up with code

*/

//message string to be displayed in dialog box when user opens page. secretMessage is variable to use to insert message for dialogue box.
const secretMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// addition operation to generate first code. 2 + 7 = 9. 9 + 1 = 10.
let code1 = 2 + 7 + 1;
//multiplication and subtraction operation to generate second code. 5 * 10 = 50. 50-10 = 40.
let code2 = 5 * 10 - 10;
//division operation to generate third and final code. 195 / 5 = 39.
let code3 = 195 / 5;

/*
Dialogue box generation.
Combines variables secretMessage (display set message string), code1 (first number of combination), code2 (second number of combination), and code 3 (third number of combination)
uses template literal to include space between secretMessage and the hyphens between each number so operation does not become extremely long.
*/

alert(`${secretMessage} ${code1}-${code2}-${code3}`);