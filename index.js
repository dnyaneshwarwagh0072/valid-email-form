const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMessage = document.getElementById('success-message');
const form = document.getElementById('signup-form');

function validateEmail(email) {
    return email.length > 3 && email.includes('@') && email.includes('.');
}

function validatePassword(password) {
    return password.length >= 8;
}

function handleValidation() {
    const emailValid = validateEmail(emailInput.value);
    const passwordValid = validatePassword(passwordInput.value);

    if (emailValid) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }

    if (passwordValid) {
        passwordError.style.display = 'none';
    } else {
        passwordError.style.display = 'block';
    }

    if (emailValid && passwordValid) {
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
    }
}

emailInput.addEventListener('input', handleValidation);
passwordInput.addEventListener('input', handleValidation);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailValid = validateEmail(emailInput.value);
    const passwordValid = validatePassword(passwordInput.value);

    if (!emailValid || !passwordValid) {
        alert('Please fix the validation errors before submitting.');
        return;
    }

    const confirmed = confirm('Are you sure you want to submit the form?');
    if (confirmed) {
        alert('Successful signup!');
        form.reset();
        successMessage.style.display = 'none';
    } else {
        form.reset();
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        successMessage.style.display = 'none';
    }
});