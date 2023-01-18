// entry point AKA Controller
function getValues() {
    let userInput = document.getElementById('userInput').value;

    let palindromeString = checkForPalindrome(userInput);

    displayResults(palindromeString);
}

// logic function
// check to see if the input is a palindrome
function checkForPalindrome(userInput) {
    let regex = /[\W_]/g;
    let trimmedUserInput = userInput.toLowerCase().replace(regex, '');
    let palindromeString = ''

    for (let i = (trimmedUserInput.length - 1); i >= 0; i--) {
        palindromeString += trimmedUserInput[i];
    }

    if (palindromeString != trimmedUserInput) {
        // if it's not a palindrome, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: `"${userInput}" is not a Palindrome!`
            }
        ); 
    } else {
        return palindromeString;
    }

}

// view function
function displayResults(palindromeString) {
    if (palindromeString) {    
        document.getElementById('results').innerHTML = `Your word or sentence reversed is: ${palindromeString}`;
        document.getElementById('alert').classList.remove('invisible')
    }
}