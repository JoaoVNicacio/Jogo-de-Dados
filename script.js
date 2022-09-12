// Chamando os Elementos do HTML:
const btnPlayerOne = document.getElementById('btn-1');
const btnPlayerTwo = document.getElementById('btn-2');
const res1 = document.getElementById('result-1');
const res2 = document.getElementById('result-2');
const btnRestart = document.getElementById('btn-restart');

// Variaveis do jogo:
let permissionP1 = true;
let permissionP2 = false;
let resultsPlayer1 = [];
let resultsPlayer2 = [];
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let counter = 0;

// Função para rodar o primeiro dado:
const rollDice1 = () => {

    if (permissionP1 === true) {

        let resultP1 = Math.floor(1 + 6 * Math.random());
        res1.innerHTML = resultP1;
        resultsPlayer1.push(resultP1);
        console.log(resultsPlayer1);

        permissionP1 = !permissionP1;
        permissionP2 = !permissionP2;

    } else {
        alert(`É a vez do outro jogador`);
    }
}

// Função para rodar o segundo dado:
const rollDice2 = () => {

    if (permissionP2 === true) {

        let resultP2 = Math.floor(1 + 6 * Math.random());
        res2.innerHTML = resultP2;
        resultsPlayer2.push(resultP2);
        console.log(resultsPlayer2);

        permissionP1 = !permissionP1;
        permissionP2 = !permissionP2;

    } else {
        alert(`É a vez do outro jogador`);
    }

    // Exibindo o vencedor da rodada:
    if (resultsPlayer1[counter] > resultsPlayer2[counter]) {
        alert(`O vencedor da rodada ${counter + 1} é o jogador 1`);

    } else if (resultsPlayer2[counter] > resultsPlayer1[counter]) {
        alert(`O vencedor da rodada ${counter + 1} é o jogador 2`);

    } else if (resultsPlayer2[counter] === resultsPlayer1[counter]) {
        alert(`Empate`);
    }

    counter++;

    // Exibindo o vencedor final ao chegar em 10 rodadas:
    if (resultsPlayer2.length == 10) {

        for (let i = 0; i <= 10; i++) {

            if (resultsPlayer1[i] > resultsPlayer2[i]) {
                pointsPlayer1 += 1;

            } else if (resultsPlayer2[i] > resultsPlayer1[i]) {
                pointsPlayer2 += 1;
            }
        }

        if (pointsPlayer1 > pointsPlayer2) {
            alert(`O vencedor final é o jogador 1`);

        } else if (pointsPlayer2 > pointsPlayer1) {
            alert(`O vencedor final é o jogador 2`);

        } else if (pointsPlayer1 === pointsPlayer2) {
            alert(`O resultado final é Empate`);

        } else {
            alert(`Ops, algo deu errado`)
        }

        // Reiniciando o jogo ao final:
        pointsPlayer1 = 0;
        pointsPlayer1 = 0;
        counter = 0;
        resultsPlayer1 = [];
        resultsPlayer2 = [];
        permissionP1 = true;
        permissionP2 = false;
        res1.innerHTML = '';
        res2.innerHTML = '';

        alert(`Iremos reiniciar o jogo`);
    }
}

// Função de reiniciar o jogo:
const restartGame = () => {

    pointsPlayer1 = 0;
    pointsPlayer1 = 0;
    counter = 0;
    resultsPlayer1 = [];
    resultsPlayer2 = [];
    permissionP1 = true;
    permissionP2 = false;

    alert(`Iremos reiniciar o jogo`);
    res1.innerHTML = '';
    res2.innerHTML = '';
}

// Linkando botões e funções:
btnPlayerOne.onclick = rollDice1;
btnPlayerTwo.onclick = rollDice2;
btnRestart.onclick = restartGame;
