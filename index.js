//random password generator

const length = 12;
const lowerCase = true;
const upperCase = true;
const number = true;
const symbol = true;

function generatePassword(length, lowerCase, upperCase, number, symbol) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += lowerCase ? lowerCaseChars : "";
    allowedChars += upperCase ? upperCaseChars : "";
    allowedChars += number ? numberChars : "";
    allowedChars += symbol ? symbolChars : "";

    if(length === 0) {
    console.log("Minimum password length is 1");
    }
    if(allowedChars === "") {
    console.log("select 1 atlease attribute!");
    }

    for(let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length) + 1;
        password += allowedChars[randomIndex];
    }
    return password;
}


const password = generatePassword(length, lowerCase, upperCase, number,symbol);
console.log(`suggested random password is: ${password} `);
