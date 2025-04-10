
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (in a real app, you would check against a database)
    if(username === 'admin' && password === 'password') {
        // Redirect to home page after successful login
        window.location.href = 'home.html';
    } else {
        // Show error message
        document.getElementById('username-error').textContent = 'Invalid credentials';
        document.getElementById('username-error').style.display = 'block';
        document.getElementById('password-error').style.display = 'block';
    }
});
