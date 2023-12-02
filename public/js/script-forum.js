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
            "avatar": "https://www.zupimages.net/up/23/48/zmyq.png"
        },
        {
            "id": 2,
            "titre": "J'ai pas compris cette exercice ?",
            "description": "J’aurais besoin d’aider pour mon td \n" +
                "sur un développement de carte",
            "reponse": 20,
            "poster": "10/01/23",
            "nom": "Tommy",
            "avatar": "https://www.zupimages.net/up/23/48/zmyq.png"
        },
        {
            "id": 3,
            "titre": "Pouvez-vous m'aider pour ce devoir ?",
            "description": "J’aurais besoin d’aider pour mon td \n" +
                "sur un développement de carte",
            "reponse": 30,
            "poster": "09/04/23",
            "nom": "Tommy",
            "avatar": "https://www.zupimages.net/up/23/48/zmyq.png"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const panier = document.getElementById('panier');

    const divContainer = document.createElement('div');
    divContainer.className = 'containeraze'; // Ajoutez une classe au conteneur

    panier.appendChild(divContainer);

    function refreshContainer() {
        divContainer.innerHTML = '';

        forumData.sujets.forEach(sujet => {
            const divSujet = document.createElement('div');
            divSujet.className = 'sujet'; // Ajoute une classe à la div du sujet
            divSujet.innerHTML = `
                <div><img src="https://www.zupimages.net/up/23/48/p4le.png" alt="Chat" title="Chat" width="50" height="50"></div>
                <div style="max-width: 350px; text-align: center;
    width: 100%;"><span style="font-family: 'Prompt', sans-serif;
    font-size: 18px;
    color: #000;
    transition: all .5s ease;">${sujet.titre}</span><br>${sujet.description}</div>
                <div style="text-align: center;"><span style="font-family: 'Prompt', sans-serif;
    font-size: 18px;
    color: #000;
    transition: all .5s ease;">Réponses</span><br>${sujet.reponse}</div>
                <div style="text-align: center"><span style="font-family: 'Prompt', sans-serif;
    font-size: 18px;
    color: #000;
    transition: all .5s ease;">Posté le ${sujet.poster}</span><br>Par ${sujet.nom}</div>
                <div><img src="${sujet.avatar}" alt="${sujet.nom}" title="${sujet.nom}" width="50" height="50"></div>
            `;
            divContainer.appendChild(divSujet);
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

        // Rafraîchir le conteneur
        refreshContainer();

        // Effacer les valeurs du formulaire
        sujetTitreInput.value = '';
        sujetDescriptionInput.value = '';
        sujetReponseInput.value = '';
        sujetPosterInput.value = '';
        sujetNomInput.value = '';
        sujetAvatarInput.value = '';
    });

    // Appeler la fonction pour afficher le conteneur initial
    refreshContainer();
});
