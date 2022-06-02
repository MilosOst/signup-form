function confirmPassword() {
    let password = pass1Field.value;
    let password2 = pass2Field.value;

    if (password.length && password2.length) {
        if (password !== password2) {
            const errorMessage = document.querySelector('#error-msg');
            errorMessage.textContent = 'Passwords do not match.';
        }
    }
    else if (password === password2) {
        document.querySelector('#error-msg').textContent = '';
        }
}


const pass1Field = document.querySelector('#password1');
const pass2Field = document.querySelector('#password2');


pass1Field.addEventListener('input', confirmPassword);
pass2Field.addEventListener('input', confirmPassword);
