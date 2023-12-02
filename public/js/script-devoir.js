const data = {
    "products": [
        {
            "id": 1,
            "name": "R312 - Integration web",
            "price": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ",
            "date": "2023-12-12"
        },
        {
            "id": 2,
            "name": "R312 - Integration web",
            "price": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ",
            "date": "2023-12-15"
        },
        {
            "id": 3,
            "name": "R312 - Integration web",
            "price": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. ",
            "date": "2023-12-20"
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const panier = document.getElementById('panier');

    // Fonction pour rafraîchir le contenu du panier avec les données actuelles
    function refreshPanier() {
        // Supprimer le contenu actuel du panier
        panier.innerHTML = '';

        // Réafficher toutes les div avec les données mises à jour
        data.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                        <p style='font-weight: 700; padding: 10px;font-size: 17px;'>${product.name}</p>
                        <p style='font-size: 14px; padding: 10px;'>${product.price}</p>
                        <p class="due-date" style="font-size: 14px; padding: 10px;">A rendre le <span class="due-date">${formatDate(product.date)}</span></p>
                        <div style='text-align: right;padding: 10px;'><a class="form-submit" href="#" style="text-decoration: none; padding: 7px 13px; font-family: 'Prompt', sans-serif; border-radius: 30px;">VOIR PLUS</a></div>
                        <!-- Ajoutez d'autres éléments si nécessaire -->
                    `;
            panier.appendChild(productDiv);
        });

        // Vous pouvez également mettre à jour d'autres éléments (total, TVA, etc.) ici si nécessaire
    }

    // Récupérer le formulaire depuis le localStorage
    const addProductForm = document.getElementById('addProductForm');

    // Écouter l'événement de soumission du formulaire
    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const newProductName = document.getElementById('productName').value;
        const newProductPrice = document.getElementById('productPrice').value;
        const newProductDate = document.getElementById('productDate').value;

        // Créer un nouvel objet produit
        const newProduct = {
            id: data.products.length + 1, // Vous pouvez gérer les ID différemment si nécessaire
            name: newProductName,
            price: newProductPrice,
            date: newProductDate
        };

        // Ajouter le nouvel article au panier et au localStorage
        data.products.push(newProduct);

        // Rafraîchir le panier
        refreshPanier();

        // Effacer les valeurs du formulaire
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productDate').value = '';
    });

    // Appeler la fonction pour afficher le panier initial
    refreshPanier();

    // Fonction pour formater la date
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', options);
    }
});
