function loadProfile() {
    simulateProfileRequest();
}

function simulateProfileRequest() {
    setTimeout(function () {
        // Récupère le chemin de l'avatar depuis la balise meta
        var avatarPath = document.querySelector('meta[name="avatar-path"]').getAttribute('content');
        var profileInfo = {
            username: 'utilisateur123',
            nom: 'Doe',
            prenom: 'John',
            niveauEtude: 'Master',
            mailUniversitaire: 'john.doe@example.com',
            avatar: avatarPath,
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ville: 'Ville',
            codePostal: '12345',
            numeroTel: '123-456-7890',
            rue: 'Nom de la rue',
        };

        displayProfileInfo(profileInfo);
    }, 500);
}

function displayProfileInfo(profileInfo) {
    var profileInfoElement = document.getElementById('profileInfo');
    profileInfoElement.innerHTML = '<p><strong>Nom d\'utilisateur:</strong> ' + profileInfo.username + '</p><br><br>' +
        '<p><strong>Nom:</strong> ' + profileInfo.nom + '</p><br><br>' +
        '<p><strong>Prénom:</strong> ' + profileInfo.prenom + '</p><br><br>' +
        '<p><strong>Niveau d\'étude:</strong> ' + profileInfo.niveauEtude + '</p><br><br>' +
        '<p><strong>Mail universitaire:</strong> ' + profileInfo.mailUniversitaire + '</p><br><br>' +
        '<p style="display: flex;align-items: center;"><strong>Avatar:</strong> <img style="margin-left: 8px;" width="50" height="50" src="' + profileInfo.avatar + '" alt="Avatar" title="Avatar"></p><br><br>' +
        '<p><strong>Bio:</strong> ' + profileInfo.bio + '</p><br><br>' +
        '<p><strong>Numéro de téléphone:</strong> ' + profileInfo.numeroTel + '</p>';
}

function logout() {
    window.location.href = '#';
}

document.addEventListener('DOMContentLoaded', loadProfile);

