document.addEventListener('DOMContentLoaded', function () {


    var scores, roundScore, activePlayer, dice, gameRunning, lastDice;

    init();

    document.querySelector('.btn-roll').addEventListener('click', function () {

        if (gameRunning) {
            dice = Math.floor(Math.random() * 6) + 1;

            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'img/dice-' + dice + '.png';

            if (dice === 6 && dice === lastDice) {
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            } else if (dice !== 1) {
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }

            lastDice = dice;
        }

    });

    document.querySelector('.btn-hold').addEventListener('click', function () {

        if (gameRunning) {
            scores[activePlayer] += roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            var input = document.querySelector('.final-score').value;
            var endGame;
            if(input) {
                endGame = input;
            } else {
                endGame = 100;
            }
            
            if (scores[activePlayer] >= endGame) {
                document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
                document.querySelector('.player' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player' + activePlayer + '-panel').classList.remove('active');
                document.querySelector('.dice').style.display = 'none';

                gameRunning = false;

            } else {
                nextPlayer();
            }
        }
    });

    document.querySelector('.btn-new').addEventListener('click', init);



    function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = '0';
        document.getElementById("current-1").textContent = '0';

        document.querySelector('.player0-panel').classList.toggle('active');
        document.querySelector('.player1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }

    function init() {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        gameRunning = true;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById("current-0").textContent = '0';
        document.getElementById("current-1").textContent = '0';
        document.getElementById("score-0").textContent = '0';
        document.getElementById("score-1").textContent = '0';

        document.getElementById('name-0').textContent = "Player 1";
        document.getElementById('name-1').textContent = "Player 2";

        document.querySelector('.player0-panel').classList.remove('winner');
        document.querySelector('.player1-panel').classList.remove('winner');
        document.querySelector('.player0-panel').classList.remove('active');
        document.querySelector('.player1-panel').classList.remove('active');
        document.querySelector('.player0-panel').classList.add('active');
    }

});