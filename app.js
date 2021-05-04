
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
       const value= document.querySelector('.name').value;
       if (value===""){
           alert('Ca ne fonctionne qu\'avec un nom, pardi!')
       }else if(value.length===8){
           alert('maison MAXOMUS')
       }else if (value.startsWith('L') || value.endsWith('x')){
           alert('maison LUSTRIX') 
       }else if (value.length % 5 == 0 || value.length % 3 == 0){
           alert('maison ANTHORVUS')
       }else{ alert ('maison DARIOPTERA')}
    },
    
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
