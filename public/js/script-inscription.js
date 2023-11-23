function submitForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }
    simulateServerRequest(username, email, password);
}

function simulateServerRequest(username, email, password) {
    setTimeout(function () {
        alert('Inscription simulée pour ' + username + ' avec l\'adresse e-mail ' + email);
        window.location.href = "/inscription-success"; // Redirigez l'utilisateur vers une page de succès
    }, 500);
}

