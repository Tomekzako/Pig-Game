document.addEventListener('DOMContentLoaded', function () {


    var scores, roundScore, activePlayer, dice;

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 1;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById("current-1").textContent = '0';
    document.getElementById("current-2").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("score-2").textContent = '0';


    document.querySelector('.btn-roll').addEventListener('click', function () {

        dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';


        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
            roundScore = 0;
            document.getElementById("current-1").textContent = '0';
            document.getElementById("current-2").textContent = '0';
            
            document.querySelector('.player1-panel').classList.toggle('active');
            document.querySelector('.player2-panel').classList.toggle('active');
        }

    });

});