let reponse = document.querySelectorAll('.actual div');
let couleur = document.querySelectorAll('.choice div');
let historique = document.querySelectorAll('.historique div');
let reset = document.querySelector('.reset');

const solution = ['vert', 'noir', 'noir', 'bleu'];
let solution1 = solution.slice();

let count = 0;
let search = new Array();
let compare = new Array();
let boule = new Array();
let bouleR = 0;
let bouleN = 0;
// let bouleC = 0;

for(let i = 0; i<couleur.length; i++) { // Boucle sur toutes les couleurs
    couleur[i].addEventListener('click', () => {

        reponse[count].className = couleur[i].className;  // Ajoute la couleur sur laquelle on clique dans la "réponse" (css)
        search.push(couleur[i].className); // Ajoute la couleur sur laquelle on a cliqué dans le tableau

        if(search[count] == solution1[count]) {
            compare.push(search[count]);
            bouleN++;
            solution1[count] = "";
        }

        count++;
        
        if(count>=4) {
        
            for(let z=0; z<solution1.length; z++) {
                solution1.filter(element => {
                    if(element == search[z]) {
                        bouleR++;
                        search[z] = "";
                    }
                })
            }

            // console.log( `Boule rouge : ${bouleR} - Boule noir : ${bouleN}` )
            // bouleC = bouleR - bouleN;

            for(let w=0; w<bouleN; w++) {
                boule.push('noir');
            }

            for(let l=0; l<bouleR; l++) {
                boule.push('rouge');
            }

            for(let y=0; y<reponse.length; y++) {
                historique[y].className = reponse[y].className;
                reponse[y].className = "";
                historique[y+4].className = boule[y];
            }

            count = 0;
            search = [];
            compare = [];
            boule = [];
            bouleR = 0;
            bouleN = 0;
            solution1 = solution.slice();
        }
    })
}

// Bouton reset
reset.addEventListener('click', () => {
    reponse.forEach(r => {
        r.className = "";
        count = 0;
        search = [];
        compare = [];
        boule = [];
        bouleR = 0;
        bouleN = 0;
        solution1 = solution.slice();
    })
});