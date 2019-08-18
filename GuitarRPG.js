// funtion moveImage = () => {
//     let elem = document.getElementById('prs','fender','gibson','gretsch');
//     let pos = 0;
//     let id = setInterval(frame, 10);
//     function frame () {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// };
$(document).ready(function () {

    $("#guitar").click(function() {
  
      if ($(this).hasClass('unlocked')) {
        $("#guitar").animate( {
          top: $(this).offset().top -27
        }, 1000, function() {
        });
  
        $("#guitar").removeClass(".playerBox");
        $(this).addClass('.opponentBox');
      }
      else {
        console.log("Sorry, broken");
      }
    });
  
  });

let player = {
    health: 100,
    power: 30
}

let opponent = {
    health: 100,
    power: 15
}

const attack = () => {
    let attackButton = document.getElementById('attack-btn');
    let restartButton = document.getElementById ('restart-btn');
    let gameMessage = document.getElementById('game-message');

    let playerAttack = determineAttack(player.power);
    opponent.health -= playerAttack;
    printToScreen();

    if (isGameOver(opponent.health)) {
        endGame("You've won the battle!"); 
        return;
    }

    attackButton.disabled = true;
    gameMessage.innerText = "Your rival is about turn it up!"

    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        printToScreen();

        if (isGameOver(player.health)) {
            endGame("You were out-dueled this time!");
            return;
        }

        attackButton.disabled = false;
    }, 500);
}

const endGame = (message) => {
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-btn').hidden = true;
    document.getElementById ('restart-btn').hidden = false;
}
const determineAttack = (power) => {
    return Math.floor(Math.random() * power);
}

const isGameOver = (health) => {
    return health <= 0;
}

const restart = () => {
    opponent.health = 100;
    document.getElementById('game-message').innerText = "";
    document.getElementById('attack-btn').hidden = false;
    document.getElementById ('restart-btn').hidden = true;
    printToScreen();
}

const printToScreen = () => {
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('player-health').innerText = player.health
}

printToScreen();
