const dan= document.querySelectorAll("li");
const val= Array.from('dan');
for(let li of val){
    li.addEventListener("click",  function(event){
        event.preventDefault();
        console.log(event);
        // console.log(li.textcontent);
        // console.log(li.getAttribute('href'));
    });
}
console.log(val);


// =====================================================================formulaire=======================================================
   
// --------------------------------------------------selection du bouton envoyer---------------------------------------------------------------------

