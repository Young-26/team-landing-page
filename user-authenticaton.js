// WARNING: Storing credentials in client-side JS is insecure. 
// This is for demonstration only.
const VALID_USERNAME = "user";
const VALID_PASSWORD = "password123";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission to a server

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageArea = document.getElementById('message');

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        messageArea.textContent = "Login successful! Welcome, " + username + ".";
        messageArea.style.color = "green";
        // In a real application, you would set a session cookie or token here.
    } else {
        messageArea.textContent = "Invalid username or password.";
        messageArea.style.color = "red";
    }
});
