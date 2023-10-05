/* Pseudocode steps for exercise solution

- create string with message statement and combination (secretMessage)
- create first number using arithmetic operator (code1)
- create second number using arithmetic operator (code2)
- create third number using arithmetic operator (code3)
- create "alert" so dialogue box shows up with code

*/

//message string to be displayed in dialog box when user opens page.
const secretMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// addition operation to generate first code. Answer should be 49.
let code1 = 12 + 33 + 4;
//multiplication and subtraction operation to generate second code. Answer should be 26.
let code2 = 16 * 3 - 22;
//modular operation to generate third and final code. Answer should be 7.
let code3 = 103 % 24;

alert(`${secretMessage} ${code1}-${code2}-${code3}`);