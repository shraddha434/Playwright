let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

/*Which option should you use?

Since you're learning JavaScript fundamentals for Playwright automation, continue using Node.js in VS Code for now. Use readline when you need interactive terminal input. Use prompt() when practising browser-based JavaScript.

Remember: prompt() is browser functionality, not a standard global function in Node.js.
*/
