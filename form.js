/* FORM VALIDATION 
1. password must be 8 - 16 character long
2. password must include an uppercase and lowercase letters and a special character
3. username must begin with a letter, not contain spaces and must end with a number  
*/
const username = document.querySelector('[data-username]');
const password = document.querySelector('[data-password]');
const form = document.querySelector('form');
const display = document.querySelector('#display');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  usernameRegex = /^[A-Z][a-z]+\d+$/;
  passwordRegex = /^[A-Za-z]+\d+$/i;
  if (usernameRegex.test(username.value)) {
    if (passwordRegex.test(password.value) && password.value.length >= 8) {
      console.log(passwordRegex.test(password.value));
      displayInfo(`Username - ${username.value} ✔
       Password - ${password.value} ✔`);
    } else {
      displayMessage('Password must be 8 - 16 character long and must include an uppercase and lowercase letters and a special character');
      hideMessage();
    }
  } else {
    displayMessage('Username must begin with an uppercase letter, no spaces and must end with a number');
    hideMessage();
  }
});

function displayMessage(msg) {
  display.style.display = 'block';
  display.innerText = '⚠ ' + msg;
  display.style.fontSize = '0.75rem';
}
function hideMessage() {
  setTimeout(function () {
    display.style.display = 'none';
  }, 2000);
}
function displayInfo(msg) {
  display.style.backgroundColor = '#10aaff';
  display.style.color = '#fff';
  display.style.display = 'block';
  display.innerText = msg;
  display.style.fontSize = '1rem';
}
