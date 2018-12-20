let reponse = document.querySelectorAll('.actual div');
let couleur = document.querySelectorAll('.choice div');
let historique = document.querySelectorAll('.historique div');

let count = 0;

const solution = ['jaune', 'vert', 'rouge', 'jaune'];
let search = new Array();
let compare = new Array();

for(let i = 0; i<couleur.length; i++) {
    couleur[i].addEventListener('click', () => {
        reponse[count].className = couleur[i].className;
        search.push(couleur[i].className);
        
        if(search[count] == solution[count]) {
            compare.push(search[count]);
        }
        
        count++;
        
        if(count>=4) { // Condition : Rempli l'historique + réinitialise les réponses + reset les tableaux et le count
            for(let y=0; y<reponse.length; y++) {
                historique[y].className = reponse[y].className;
                reponse[y].className = "";
            }
            count = 0;
            search = [];
            compare = [];
        }

    })
}


// Push comparaison dans un tableau et comparer ce tableau a la solution 
// Ajouter un tableau qui vérifie si une réponse est présente dans le tableau