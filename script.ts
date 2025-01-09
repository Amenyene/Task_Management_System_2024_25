
const registerLink = document.getElementById('registerLink') as HTMLAnchorElement;
const loginLink = document.getElementById('loginLink') as HTMLAnchorElement;
const registrationForm = document.getElementById('registrationForm') as HTMLFormElement;
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const registrationDiv = document.getElementById('registration') as HTMLElement;
const loginDiv = document.getElementById('login') as HTMLElement;


registerLink.addEventListener('click', () => {
    registrationDiv.style.display = 'block';
    loginDiv.style.display = 'none';
});


loginLink.addEventListener('click', () => {
    registrationDiv.style.display = 'none';
    loginDiv.style.display = 'block';
});


registrationForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const regUsername = (document.getElementById('regUsername') as HTMLInputElement).value;
    const regPassword = (document.getElementById('regPassword') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLSelectElement).value;

    alert(`User ${regUsername} registered as ${role} successfully!`);

    registrationForm.reset(); // Reset the form
    loginDiv.style.display = 'block';
    registrationDiv.style.display = 'none';
});

// Event listener for login form submission
loginForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (username === 'admin' && password === 'adminpass') {
        window.location.href = 'admin-dashboard.html';
    } else if (username === 'user' && password === 'userpass') {
        window.location.href = 'user-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});