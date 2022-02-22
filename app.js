// Elements du DOM (html)
const divVies = document.querySelector('.vies');
const message = document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const input = document.getElementById('number');
const essayerBtn = document.getElementById('essayerBtn');
const rejouerBtn = document.getElementById('rejouer');
const body = document.getElementsByTagName('body')[0];

//Modèle de coeurs

const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';

//Fond
const bgStart= `linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)`;
const bgFroid = 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede = 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)';
const bgChaud = 'linear-gradient(to right, #fa709a 0%, #fee140 100%)';
const bgBrulant = 'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)';

//Fond gagnant

const bgWin = 'linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)';

//Fond perdant

const bgLoose = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';

// Logique play

const play = () => {

    //nombre aléatoire
    const randomNumber = Math.floor(Math.random() * 101); 
    //Math floor prend le chiffre (de math random *101) et l'arrondie à la valeur en dessous (100 au lieu de 101)
    const totalVies = 5;
    let vies = totalVies;

    //Actualisation à chaque essai -Toute la logique

    formulaire.addEventListener('submit', (e) => {     // e = l'élement actuel sur lequel se déroule l'évènement
        e.preventDefault()  // pour éviter que cela recharge la page à chaque fois lors de l'envoie du formulaire
        const valeurInput = parseInt(input.value); // "3" -> 3

        if(valeurInput < 0 || valeurInput > 100) return;

        if(valeurInput === randomNumber){
            body.style.backgroundImage = bgWin;
            message.textContent = `BRAVO !! Le nombre était bien ${randomNumber} !`
            rejouerBtn.style.display= "block";
            essayerBtn.setAttribute("disable", "");
        }

        if(valeurInput !== randomNumber){ // 2x "=" après un ! = valeur ET type.  1x=  = juste valeur. Pas possible de mettre !===
            if(randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3 ){
                body.style.backgroundImage = bgBrulant;
                message.textContent = "C'est Brûlant !!!";
            }
            else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6 ){
                body.style.backgroundImage = bgChaud;
                message.textContent = "C'est Chaud !";
            }
            else if (randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11 ){
                body.style.backgroundImage = bgTiede;
                message.textContent = "C'est tiède.";
            }
            else{
                body.style.backgroundImage = bgFroid;
                message.textContent = "C'est Froid....";
            }
            vies--;
            verifyLoose();
        }

        actualiseCoeurs(vies);



    })

    const verifyLoose = () => {
        if(vies === 0){
            body.style.backgroundImage = bgLoose;
            body.style.color = '#990000';
            essayerBtn.setAttribute("disabled", "");
            message.textContent = `Vous avez perdu... La réponse était ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }
    }

    //Actualiser le nombre de coeur :

    const actualiseCoeurs = (vies) => {
        divVies.innerHTML = "";
        let tableauDeVies = [];
        for(let i = 0; i < vies; i++){
            tableauDeVies.push(coeurPlein);
        }
        for(let i = 0; i < totalVies - vies; i++){
            tableauDeVies.push(coeurVide);
        }
        tableauDeVies.forEach(coeur => {
            divVies.innerHTML += coeur;
        })
    }
    actualiseCoeurs(vies);

    rejouerBtn.addEventListener('click', () => {
        //document.location.reload(true);
        reset();
        play();

    })

    function reset(){
        //Fonction qui prépare tout pour rejouer une fois le jeu terminé, redéclarer 5 vie, enlever l'attribut disabled, display none bouton rejouer.

        essayerBtn.removeAttribute("disabled");
        rejouerBtn.style.display = "none";
        input.value = "";
        body.style.backgroundImage = bgStart;
        message.textContent = ""

    }
}



play();







//                           A RAJOUTER :

// Empecher de faire une erreur si le meme chiffre est répété plus d'une fois.
// personnaliser le site, déco etc..
// Animations visuelles pour victoire/défaite.
// Choix de difficulté / nombre de vie. (Un mode hardcore/roulette russe avec une seule vie ? (avec le/les coeurs disposés en barillet?))
// 
// 

// responsive.
// déployement serveur.