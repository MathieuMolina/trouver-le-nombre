// Elements du DOM (html)
const divVies = document.querySelector('vies');
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
const bgFroid = 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)';
const bgTiede = 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)';
const bgChaud = 'linear-gradient(to right, #fa709a 0%, #fee140 100%)';
const bgBrulant = 'inear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)';

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
    console.log(randomNumber);

//Actualisation à chaque essai -Toute la logique

    formulaire.addEventListener('submit', (e) => {     // e = l'élement actuel sur lequel se déroule l'évènement
        e.preventDefault()  // pour éviter que cela recharge la page à chaque fois lors de l'envoie du formulaire
        const valeurInput = parseInt(input.value); // "3" -> 3

        if(valeurInput < 0 || valeurInput > 100) return;

        if(valeurInput === randomNumber){
            body.style.backgroundImage = bgWin;
            message.textContent = `BRAVO !! Le nombre était bien ${randomNumber}`
            rejouerBtn.style.display= "block";
        }

        if(valeurInput !==randomNumber){

            
        }


    });
}




