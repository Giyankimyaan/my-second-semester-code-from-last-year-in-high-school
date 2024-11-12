document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    // Ganti nama dan password
    var correctUsername = 'Giyan';
    var correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login berhasil!';
        setTimeout(function() {
            window.location.href = 'murid.html';
        }, 1000);
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Username atau password salah!';
    }
});

