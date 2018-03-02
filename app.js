document.addEventListener('DOMContentLoaded', function () {


    var scores, roundScore, activePlayer, dice;

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 1;

    document.querySelector('.dice').style.display = 'none';


    document.querySelector('.btn-roll').addEventListener('click', function () {

        dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';
    })

});