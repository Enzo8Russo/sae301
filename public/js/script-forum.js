const forumData = {
    "sujets": [
        {
            "id": 1,
            "titre": "Aide pour l'integration !",
            "description": "J’aurais besoin d’aider pour mon td \n" +
                "sur un développement de carte",
            "reponse": 10,
            "poster": "23/08/22",
            "nom": "Tommy",
            "avatar": "https://picsum.photos/200/300?random=1"
        },
        {
            "id": 2,
            "titre": "J'ai pas compris cette exercice ?",
            "description": "J’aurais besoin d’aider pour mon td \n" +
                "sur un développement de carte",
            "reponse": 20,
            "poster": "10/01/23",
            "nom": "Tommy",
            "avatar": "https://picsum.photos/200/300?random=2"
        },
        {
            "id": 3,
            "titre": "Pouvez-vous m'aider pour finir ce devoir ?",
            "description": "J’aurais besoin d’aider pour mon td \n" +
                "sur un développement de carte",
            "reponse": 30,
            "poster": "09/04/23",
            "nom": "Tommy",
            "avatar": "https://picsum.photos/200/300?random=3"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const panier = document.getElementById('panier');

    const tbody = document.createElement('tbody');
    panier.appendChild(tbody);

    function refreshTable() {
        tbody.innerHTML = '';

        forumData.sujets.forEach(sujet => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${sujet.titre}</td>
                <td>${sujet.description}</td>
                <td>${sujet.reponse}</td>
                <td>${sujet.poster}</td>
                <td>${sujet.nom}</td>
                <td><img src="${sujet.avatar}" alt="${sujet.nom}" width="50"></td>
                <!-- Ajoutez d'autres colonnes si nécessaire -->
            `;
            tbody.appendChild(tr);
        });
    }

    const addSujetForm = document.getElementById('addSujetForm');
    const sujetTitreInput = document.getElementById('sujetTitre');
    const sujetDescriptionInput = document.getElementById('sujetDescription');
    const sujetReponseInput = document.getElementById('sujetReponse');
    const sujetPosterInput = document.getElementById('sujetPoster');
    const sujetNomInput = document.getElementById('sujetNom');
    const sujetAvatarInput = document.getElementById('sujetAvatar');

    // Écouter l'événement de soumission du formulaire
    addSujetForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const newSujetTitre = sujetTitreInput.value;
        const newSujetDescription = sujetDescriptionInput.value;
        const newSujetReponse = parseInt(sujetReponseInput.value);
        const newSujetPoster = sujetPosterInput.value;
        const newSujetNom = sujetNomInput.value;
        const newSujetAvatar = sujetAvatarInput.value;

        // Créer un nouvel objet sujet
        const newSujet = {
            id: forumData.sujets.length + 1, // Vous pouvez gérer les ID différemment si nécessaire
            titre: newSujetTitre,
            description: newSujetDescription,
            reponse: newSujetReponse,
            poster: newSujetPoster,
            nom: newSujetNom,
            avatar: newSujetAvatar
        };

        // Ajouter le nouveau sujet au tableau
        forumData.sujets.push(newSujet);

        // Rafraîchir le tableau
        refreshTable();

        // Effacer les valeurs du formulaire
        sujetTitreInput.value = '';
        sujetDescriptionInput.value = '';
        sujetReponseInput.value = '';
        sujetPosterInput.value = '';
        sujetNomInput.value = '';
        sujetAvatarInput.value = '';
    });

    // Appeler la fonction pour afficher le tableau initial
    refreshTable();
});