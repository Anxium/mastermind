let reponse = document.querySelectorAll('.actual div');
let couleur = document.querySelectorAll('.choice div');
let historique = document.querySelectorAll('.historique div');
let reset = document.querySelector('.reset');

const solution = ['jaune', 'noir', 'bleu', 'rouge'];
let solution1 = solution.slice();

let search = new Array();
let boule = new Array();
let count = 0;
let bouleR = 0;
let bouleN = 0;
let bouleC = 0;

for(let i = 0; i<couleur.length; i++) { // Boucle sur toutes les couleurs
    couleur[i].addEventListener('click', () => {

        reponse[count].className = couleur[i].className;  // Ajoute la couleur sur laquelle on clique dans la "réponse" (css)
        search.push(couleur[i].className); // Ajoute la couleur sur laquelle on a cliqué dans le tableau

        if(search[count] == solution1[count]) {
            bouleN+=1;
            solution1[count] = "empty";
            search[count] = "empty";
        }

        count++;
        
        if(count>=4) {

            for(let z=0; z<solution1.length; z++) {
                for(let m=0; m<search.length; m++) {
                    if(search[z] == solution1[m]) {
                        bouleR++;
                        search[z] = "";
                        solution1[m] = bouleR;
                    }
                }
            }

            bouleC = bouleR - bouleN;

            for(let w=0; w<bouleN; w++) {
                boule.push('noir');
            }

            for(let l=0; l<bouleC; l++) {
                boule.push('rouge');
            }

            for(let y=0; y<reponse.length; y++) {
                historique[y].className = reponse[y].className;
                reponse[y].className = "";
                historique[y+4].className = boule[y];
            }

            count = 0;
            search = [];
            boule = [];
            bouleR = 0;
            bouleN = 0;
            bouleC = 0;
            solution1 = solution.slice();
        }
    })
}

// Bouton reset
reset.addEventListener('click', () => {
    reponse.forEach(r => {
        r.className = "";
    })
    count = 0;
    search = [];
    boule = [];
    bouleR = 0;
    bouleN = 0;
    solution1 = solution.slice();
});