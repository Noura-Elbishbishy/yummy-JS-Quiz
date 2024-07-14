document.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById('signInBtn');
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    function validateForm() {
        let valid = true;
        // Clear previous error messages
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('ageError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('repassError').textContent = '';
        // Retrieve input values
        let AccNameInput = document.getElementById('Name').value;
        let AccEmailInput = document.getElementById('Email').value;
        let AccPhoneInput = document.getElementById('phone').value;
        let AccAgeInput = document.getElementById('age').value;
        let AccPassInput = document.getElementById('pass').value;
        let AccRepassInput = document.getElementById('repass').value;

        // Validate inputs
        if (!AccNameInput) { // Validate name
            document.getElementById('nameError').textContent = 'Name is required';
            valid = false;
        }

        if (!AccEmailInput) { // Validate email
            document.getElementById('emailError').textContent = 'Email is required';
            valid = false;
        } else if (!validateEmail(AccEmailInput)) {
            document.getElementById('emailError').textContent = 'Invalid email format';
            valid = false;
        }

        if (!AccPhoneInput) { // Validate phone
            document.getElementById('phoneError').textContent = 'Phone number is required';
            valid = false;
        }

        if (!AccAgeInput) { // Validate age
            document.getElementById('ageError').textContent = 'Age is required';
            valid = false;
        }

        if (!AccPassInput) { // Validate password
            document.getElementById('passwordError').textContent = 'Password is required';
            valid = false;
        } else {
            let passErrorText = validatePassword(AccPassInput);
            if (passErrorText.length > 0) {
                document.getElementById('passwordError').textContent = passErrorText.join('. ');
                valid = false;
            }
        }

        if (AccPassInput !== AccRepassInput) { // Validate re-password
            document.getElementById('repassError').textContent = 'Passwords do not match';
            valid = false;
        }

        signInBtn.disabled = !valid;
    }

    signInBtn.addEventListener('click', function() {
   
        let AccNameInput = document.getElementById('Name').value;
        let AccEmailInput = document.getElementById('Email').value;
        let AccPassInput = document.getElementById('pass').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let userExists = false;

        for (let i = 0; i < users.length; i++) { // Check law user exists
            if (users[i].email === AccEmailInput) {
                userExists = true;
                break;
            }
        }

        if (userExists) {
            document.getElementById('emailError').textContent = 'Email is already registered. Please use a different email.';
        } else {
            users.push({ name: AccNameInput, email: AccEmailInput, password: AccPassInput });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Sign in successful! You can now log in.');
        }
    });

    function validateEmail(email) {
        let emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailTest.test(email.toLowerCase());
    }

    function validatePassword(password) {
        let passErrorText = [];
        if (password.length < 8) {
            passErrorText.push('Password must be at least 8 characters long');
        }
        if (!/[A-Z]/.test(password)) {
            passErrorText.push('Password must contain at least one uppercase letter');
        }
        if (/\s/.test(password)) {
            passErrorText.push('Password must not contain spaces');
        }
        return passErrorText;
    }
});
