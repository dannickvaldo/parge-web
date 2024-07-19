class MyForm extends HTMLElement {
    constructor() {
      super();
  
      const template = document.getElementById('personDiv');
      template.innerHTML = `<center>
              <h1 id="lot">bienvenue enregistrer vos information.</h1>
          </center>
          <center>
              <form method="post" name="form1">
                  <div id="table">
          
                      <header id="head">
                          <img src="images/white-logo.png">
                      </header><br>
          
                      <div> 
                          <label for="nom">NOM</label>
                          <input type="text" id="nom" name="le nom" placeholder="speudo" required><br>
                      </div><br>
          
                      <div>
                          <label for="contact">CONTACT</label>
                          <input type="number" id="contact" name="le contact" placeholder="@contact" required><br>
                      </div><br>
          
                      <div>
                          <label for="mail">E-MAIL</label>
                          <input type="text" id="mail" name="le mail" placeholder="@gmail.com" required><br><br>
                      </div>
          
                      <div>
                          <button id="butto" type="submit" form="form1" value="Submit">envoyer</button>
                      </div>
                  </div>
                  <div id="person">
                      <!-- tableau -->
                  </div>
              </form>
          
          </center>
      ;`

      this.appendChild(template.content.cloneNode(true));
  
      // Event Listener
      const btn = this.querySelector("#butto");
      const personDiv = this.querySelector('#person');
      let tabl = []; 
  
      btn.addEventListener("click", (e) => {
          e.preventDefault();
  
          const nom = this.querySelector("#nom").value;
          const contact = this.querySelector("#contact").value;
          const mail = this.querySelector("#mail").value;
  
          // Validation
          if (nom.trim() === "" || contact.trim() === "" || mail.trim() === "") {
              alert("remplissez tout les champs");
              return;
          }
  
          if(nom.length >= 26){
              alert("remplissez le champs avec moin de caracter");
              return 0;
          }
  
          if (!/^[0-9]+$/.test(contact)) {
              alert("remplisez correctement le numero");
              return;
          }
  
          if (contact.length > 9) {
              alert("le nombre de chiffre est depasser")
              return;
          }
  
          if (!/^[^s@]+@[^s@]+.[^s@]+$/.test(mail)) {
              alert("address email invalide");
              return;
          }
  
          // Add to array
          tabl.push({ nom, contact, mail });
  
          // Clear the input fields
          this.querySelector("#nom").value = "";
          this.querySelector("#contact").value = "";
          this.querySelector("#mail").value = "";
  
          // Create/update the table
          personDiv.innerHTML = ''; // Clear the previous table
  
          const table = document.createElement('table');
          const tableHeaderRow = table.insertRow();
          tableHeaderRow.insertCell().textContent = 'nom';
          tableHeaderRow.insertCell().textContent = 'contact';
          tableHeaderRow.insertCell().textContent = 'email';
  
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
  
  customElements.define('my-form', MyForm);