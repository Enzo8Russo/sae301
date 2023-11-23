const data = {
    "products": [
        {
            "id": 1,
            "name": "T-shirt",
            "price": 10,
            "quantity": 1,
            "image": "https://picsum.photos/200/300?random=1"
        },
        {
            "id": 2,
            "name": "Pantalon",
            "price": 20,
            "quantity": 2,
            "image": "https://picsum.photos/200/300?random=2"
        },
        {
            "id": 3,
            "name": "Chaussures",
            "price": 30,
            "quantity": 1,
            "image": "https://picsum.photos/200/300?random=3"
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const panier = document.getElementById('panier');

    // Créer la partie tbody du tableau
    const tbody = document.createElement('tbody');
    panier.appendChild(tbody);

    // Fonction pour rafraîchir le tableau avec les données actuelles
    function refreshTable() {
        // Supprimer le contenu actuel du tbody
        tbody.innerHTML = '';

        // Réafficher toutes les lignes avec les données mises à jour
        data.products.forEach(product => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td><img src="${product.image}" alt="${product.name}" width="50"></td>
                <!-- Ajoutez d'autres colonnes si nécessaire -->
            `;
            tbody.appendChild(tr);
        });

        // Vous pouvez également mettre à jour d'autres éléments (total, TVA, etc.) ici si nécessaire
    }

    // Récupérer le formulaire et le panier depuis le localStorage
    const addProductForm = document.getElementById('addProductForm');
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const productQuantityInput = document.getElementById('productQuantity');
    const productImageInput = document.getElementById('productImage');

    // Écouter l'événement de soumission du formulaire
    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const newProductName = productNameInput.value;
        const newProductPrice = parseFloat(productPriceInput.value);
        const newProductQuantity = parseInt(productQuantityInput.value);
        const newProductImage = productImageInput.value;

        // Créer un nouvel objet produit
        const newProduct = {
            id: data.products.length + 1, // Vous pouvez gérer les ID différemment si nécessaire
            name: newProductName,
            price: newProductPrice,
            quantity: newProductQuantity,
            image: newProductImage
        };

        // Ajouter le nouvel article au tableau et au localStorage
        data.products.push(newProduct);
        localStorage.setItem('panier', JSON.stringify(data.products));

        // Rafraîchir le tableau
        refreshTable();

        // Effacer les valeurs du formulaire
        productNameInput.value = '';
        productPriceInput.value = '';
        productQuantityInput.value = '';
        productImageInput.value = '';
    });

    // Appeler la fonction pour afficher le tableau initial
    refreshTable();
});
