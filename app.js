// Initialisation des données
let reponse = document.querySelectorAll('.actual div');
let couleur = document.querySelectorAll('.choice div');
let historique = document.querySelectorAll('.historique div');
let reset = document.querySelector('.reset');

// Création aléatoire de la solution
let solution = [];
for(let r=0; r<4; r++) {
    random = Math.floor(Math.random() * Math.floor(couleur.length));
    solution.push(couleur[random].className);
}

let essais = 0;
let count = 0;
let search = [];
let boule = [];
let bouleR = 0;
let bouleN = 0;
let bouleC = 0;
let solution1 = solution.slice();

// Fonction de reset de données
const dataReset = () => {
    count = 0;
    search = [];
    boule = [];
    bouleR = 0;
    bouleN = 0;
    bouleC = 0;
    solution1 = solution.slice();
}

// Fonction du jeu
const jeu = () => {
    for(let i = 0; i<couleur.length; i++) { // Boucle sur toutes les couleurs
        couleur[i].addEventListener('click', () => {
    
            reponse[count].className = couleur[i].className;
            search.push(couleur[i].className);
    
            if(search[count] == solution1[count]) {
                bouleN++;
                solution1[count] = "";
                search[count] = "";
            }
    
            count++;
            
            if(count>=4) {

                essais++;

                if(bouleN >= 4) {
                    alert(`Bravo! Vous avez gagné en ${essais} essais! \nLa partie va maintenant se relancer.`)
                    document.location.reload();
                }
    
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
                
                dataReset();
            }
        })
    }

    // Bouton reset
    reset.addEventListener('click', () => {
        reponse.forEach(r => {
            r.className = "";
        })
        dataReset();
    });
}
jeu();
