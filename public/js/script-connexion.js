function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Exemple de vérification côté client
    if (username === '' || password === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Exemple de requête AJAX (simulée)
    // Remplace cela par une requête HTTP réelle vers ton serveur Symfony
    // pour effectuer la vérification côté serveur
    simulateServerRequest(username, password);
}

function simulateServerRequest(username, password) {
    // Exemple de requête AJAX (simulée)
    setTimeout(function () {
        alert('Connexion simulée pour ' + username);
        // Ici, tu enverrais la demande au serveur Symfony pour la vérification
        // et tu gérerais la réponse du serveur en conséquence
    }, 500);
}
