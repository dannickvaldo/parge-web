const btn = document.querySelector("#butto");

const personDiv = document.getElementById('person');

let tabl = []; // Tableau pour stocker les données

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const contact = document.getElementById("contact").value;
    const mail = document.getElementById("mail").value;

    // j'ajoute une table
    tabl.push({ nom, contact, mail });

    personDiv.innerHTML = '';

    document.getElementById("nom").value="";
    document.getElementById("contact").value="";
    document.getElementById("mail").value="";



    // cree la nouvel table
    const table = document.createElement('table');
    const tableHeaderRow = table.insertRow();
    tableHeaderRow.insertCell().textContent = 'nom';
    tableHeaderRow.insertCell().textContent = 'contact';
    tableHeaderRow.insertCell().textContent = 'email';

    // Ajouter les données au table
    tabl.forEach(person => {
        const row = table.insertRow();
        row.insertCell().textContent = person.nom;
        row.insertCell().textContent = person.contact;
        row.insertCell().textContent = person.mail;
    });

    // Ajouter le tableau au personDiv
    personDiv.appendChild(table);
});