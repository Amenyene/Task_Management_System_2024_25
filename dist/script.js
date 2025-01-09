var registerLink = document.getElementById('registerLink');
var loginLink = document.getElementById('loginLink');
var registrationForm = document.getElementById('registrationForm');
var loginForm = document.getElementById('loginForm');
var registrationDiv = document.getElementById('registration');
var loginDiv = document.getElementById('login');
registerLink.addEventListener('click', function () {
    registrationDiv.style.display = 'block';
    loginDiv.style.display = 'none';
});
loginLink.addEventListener('click', function () {
    registrationDiv.style.display = 'none';
    loginDiv.style.display = 'block';
});
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;
    var role = document.getElementById('role').value;
    alert("User ".concat(regUsername, " registered as ").concat(role, " successfully!"));
    registrationForm.reset(); // Reset the form
    loginDiv.style.display = 'block';
    registrationDiv.style.display = 'none';
});
// Event listener for login form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'adminpass') {
        window.location.href = 'admin-dashboard.html';
    }
    else if (username === 'user' && password === 'userpass') {
        window.location.href = 'user-dashboard.html';
    }
    else {
        alert('Invalid credentials. Please try again.');
    }
});
