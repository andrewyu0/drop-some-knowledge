// check palindrome

function checkPal(str) {
    return str == str.split('').reverse().join('');
};

checkPal("racecar"); // true 




