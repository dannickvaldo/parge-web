class MyForm extends HTMLElement {
    constructor() {
        super();

        // Créer un modèle pour la structure du formulaire
        const template = document.createElement('template');
        template.innerHTML = `
            <center>
                <h1 id="lot">Bienvenue, enregistrez vos informations.</h1>
            </center>
            <center>
                <form method="post" name="form1">
                    <div id="table">
                        <header id="head">
                            <img src="images/white-logo.png" alt="Logo">
                        </header><br>
                        <div> 
                            <label for="nom">Nom</label>
                            <input type="text" id="nom" name="le nom" placeholder="Pseudo" required><br>
                        </div><br>
                        <div>
                            <label for="contact">Contact</label>
                            <input type="number" id="contact" name="le contact" placeholder="@contact" required><br>
                        </div><br>
                        <div>
                            <label for="mail">E-mail</label>
                            <input type="text" id="mail" name="le mail" placeholder="@gmail.com" required><br><br>
                        </div>
                        <div>
                            <button id="butto" type="submit" form="form1" value="Submit">Envoyer</button>
                        </div>
                    </div>
                    <div id="person">
                        <!-- tableau -->
                    </div>
                </form>
            </center>
            <style>
                #person {
                    display: flex;
                    justify-content: space-around;
                }
                table, th, td {
                    border: 2px solid black;
                    border-collapse: collapse;
                }
                #ddf {
                    background-color: bisque;
                }
            </style>
        `;

        // Attache le modèle au shadow DOM du composant Web
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Écouteur d'événements
        const btn = this.shadowRoot.querySelector("#butto");
        const personDiv = this.shadowRoot.querySelector('#person');
        let tabl = []; 

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            // Récupère les valeurs du formulaire
            const nom = this.shadowRoot.querySelector("#nom").value;
            const contact = this.shadowRoot.querySelector("#contact").value;
            const mail = this.shadowRoot.querySelector("#mail").value;

            // Validation
            if (nom.trim() === "" || contact.trim() === "" || mail.trim() === "") {
                alert("Remplissez tous les champs");
                return;
            }

            if(nom.length >= 26){
                alert("Le champ doit contenir moins de 26 caractères");
                return;
            }

            if (!/^[0-9]+$/.test(contact)) {
                alert("Remplissez correctement le numéro");
                return;
            }

            if (contact.length > 9) {
                alert("Le nombre de chiffres est dépassé");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
                alert("Adresse email invalide");
                return;
            }

            // Ajouter au tableau
            tabl.push({ nom, contact, mail });

            // Efface les champs de saisie
            this.shadowRoot.querySelector("#nom").value = "";
            this.shadowRoot.querySelector("#contact").value = "";
            this.shadowRoot.querySelector("#mail").value = "";

            // Créer/mettre à jour la table
            personDiv.innerHTML = ''; // Efface le tableau précédent

            const table = document.createElement('table');
            const tableHeaderRow = table.insertRow();
            tableHeaderRow.insertCell().textContent = 'Nom';
            tableHeaderRow.insertCell().textContent = 'Contact';
            tableHeaderRow.insertCell().textContent = 'E-mail';

            tabl.forEach(person => {
                const row = table.insertRow();
                row.insertCell().textContent = person.nom;
                row.insertCell().textContent = person.contact;
                row.insertCell().textContent = person.mail;
            });

            personDiv.appendChild(table);
        });
    }
}

// Définir le composant personnalisé
customElements.define('my-form', MyForm);
