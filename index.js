//random password generator
const generatedPassword = document.querySelector(".generatedPassword");

const lowerCaseCheckBoxButton = document.querySelector("#lowercase");
const upperCaseCheckBoxButton = document.querySelector("#uppercase");
const numberCheckBoxButton = document.querySelector("#number");
const symbolCheckBoxButton = document.querySelector("#symbol");



function generatePassword() {
    let passwordLength = document.querySelector("#passwordLength").value;
    passwordLength = Number(passwordLength); //*password length is checked whenever the button is clicked

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"; //*giving values to attributes
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    //!checking which attribute is active
    if(lowerCaseCheckBoxButton.checked) {
        allowedChars += lowerCaseChars;
    }
    if(upperCaseCheckBoxButton.checked) {
        allowedChars += upperCaseChars
    }
    if(numberCheckBoxButton.checked) {
        allowedChars += numberChars
    }
    if(symbolCheckBoxButton.checked) {
        allowedChars += symbolChars
    }

    //TODO: test cases for 0 password length and no active attribute
    if(passwordLength === 0 || passwordLength === "") {
        generatedPassword.textContent = "Minimum password length is 1";
    }
    if(allowedChars === "") {
        generatedPassword.textContent = "atlease 1 attribute should be selected";

    }

    //*generating the random password which is equal to input value
    //*storing the random password to variable
    for(let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length) + 1;
        password += allowedChars[randomIndex];
    }
    generatedPassword.textContent = `Your password is: ${password}`;
    return password;

}

