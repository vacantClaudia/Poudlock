
// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function() {
       let form= document.querySelector('form');
       form.addEventListener('submit', app.handleValue);
    },
    handleValue: function(evt){
       evt.preventDefault();
       let speech= document.querySelector('.speech')
       console.log(speech)
       const value= document.querySelector('.name').value;
       if (value===""){
           speech.textContent='Ca ne fonctionne qu\'avec un nom, pardi!'
       }else if(value.length===8){
        speech.innerHTML="<img src='images/maxopus.png' alt='maxopus'/>"
       }else if (value.startsWith('L') || value.endsWith('x')){
        speech.innerHTML="<img src='images/lustrix.png' alt='lustrix'/>"
       }else if (value.length % 5 == 0 || value.length % 3 == 0){
        speech.innerHTML="<img src='images/anthorvus.png' alt='anthorvus'/>"
       }else{ speech.innerHTML="<img src='images/darioptera.png' alt='darioptera'/>"}
    },
    
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
