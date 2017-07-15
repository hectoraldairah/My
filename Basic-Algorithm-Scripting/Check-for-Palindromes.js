
function palindrome(str) {
    // Good luck!
    var regex = /[\W_]/g; //Define the Regular Expression
    str = str.toLowerCase().replace(regex, ''); //Replace all the non-alphanumeric characters
    var rword = str.split("").reverse().join(""); //Reverse the String
    return str === rword; //Compare the inverted string with original
}
palindrome("_eye");