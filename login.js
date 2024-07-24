document.getElementById('toRegister').addEventListener('click', function() {
    document.getElementById('loginDiv').style.display = 'none';
    document.getElementById('registerDiv').style.display = 'block';
});

document.getElementById('toLogin').addEventListener('click', function() {
    document.getElementById('registerDiv').style.display = 'none';
    document.getElementById('loginDiv').style.display = 'block';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const hashedPassword = btoa(password);  // Simple base64 encoding for demonstration

    localStorage.setItem(username, hashedPassword);
    alert('Registration successful! Please login.');
    document.getElementById('toLogin').click();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const hashedPassword = btoa(password);  // Simple base64 encoding for demonstration

    if (localStorage.getItem(username) === hashedPassword) {
        sessionStorage.setItem('loggedInUser', username);
        showSecurePage(username);
    } else {
        alert('Invalid username or password!');
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    sessionStorage.removeItem('loggedInUser');
    document.getElementById('securePage').style.display = 'none';
    document.getElementById('loginDiv').style.display = 'block';
});

function showSecurePage(username) {
    document.getElementById('loginDiv').style.display = 'none';
    document.getElementById('registerDiv').style.display = 'none';
    document.getElementById('securePage').style.display = 'block';
    document.getElementById('user').textContent = username;
}

// Check if user is already logged in
window.onload = function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showSecurePage(loggedInUser);
    } else {
        document.getElementById('loginDiv').style.display = 'block';
    }
};
