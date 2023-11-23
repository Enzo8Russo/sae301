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
    profileInfoElement.innerHTML = '<p><strong>Nom d\'utilisateur:</strong> ' + profileInfo.username + '</p>' +
        '<p><strong>Nom:</strong> ' + profileInfo.nom + '</p>' +
        '<p><strong>Prénom:</strong> ' + profileInfo.prenom + '</p>' +
        '<p><strong>Niveau d\'étude:</strong> ' + profileInfo.niveauEtude + '</p>' +
        '<p><strong>Mail universitaire:</strong> ' + profileInfo.mailUniversitaire + '</p>' +
        '<p style="display: flex;align-items: center;"><strong>Avatar:</strong> <img width="30" height="30" src="' + profileInfo.avatar + '" alt="Avatar"></p>' +
        '<p><strong>Bio:</strong> ' + profileInfo.bio + '</p>' +
        '<p><strong>Numéro de téléphone:</strong> ' + profileInfo.numeroTel + '</p>';
}

function logout() {
    window.location.href = '#';
}

document.addEventListener('DOMContentLoaded', loadProfile);

