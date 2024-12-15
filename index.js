        const userList = document.getElementById('userList');
        const addUserButton = document.getElementById('addUserButton');
        let currentUserIndex = null; // Pour suivre l'utilisateur en cours de modification

        // Fonction pour ajouter ou modifier un utilisateur
        const addUser = () => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                if (currentUserIndex !== null) {
                    // Modifier l'utilisateur existant
                    const li = userList.children[currentUserIndex];
                    li.innerHTML = `${name} - ${email} <button onclick="editUser(${currentUserIndex})">Modifier</button> <button onclick="deleteUser(${currentUserIndex})">Supprimer</button>`;
                    currentUserIndex = null; // Réinitialiser l'index de l'utilisateur en cours de modification
                } else {
                    // Ajouter un nouvel utilisateur
                    const li = document.createElement('li');
                    li.innerHTML = `${name} - ${email} <button onclick="editUser(${userList.children.length})">Modifier</button> <button onclick="deleteUser(${userList.children.length})">Supprimer</button>`;
                    userList.appendChild(li);
                }

                // Réinitialiser les champs de saisie
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        };

        // Fonction pour modifier un utilisateur
        const editUser = (index) => {
            const li = userList.children[index];
            const [userName, userEmail] = li.textContent.split(' - ');

            document.getElementById('name').value = userName;
            document.getElementById('email').value = userEmail.split(' Modifier')[0].trim(); // Extraire l'email
            currentUserIndex = index; // Mettre à jour l'index de l'utilisateur en cours de modification
        };

        // Fonction pour supprimer un utilisateur
        const deleteUser = (index) => {
            userList.removeChild(userList.children[index]);
            currentUserIndex = null; // Réinitialiser l'index de l'utilisateur en cours de modification
        };

        // Ajouter un événement au bouton
        addUserButton.addEventListener('click', addUser);