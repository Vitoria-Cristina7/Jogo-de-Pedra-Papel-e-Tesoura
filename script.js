let pontosVoce = 0;
let pontosComputador = 0;
let pontosEmpate = 0;
let historico = [];
let jogoTerminado = false;

function jogadaComputador () {
  const opcoes = ["pedra", "papel", "tesoura"];
  const aleatorio = Math.floor(Math.random() * 3);
  return opcoes[aleatorio];
}

function atualizarPlacar() {
  document.getElementById("pontosVoce").innerHTML = pontosVoce;
  document.getElementById("pontosComputador").innerHTML = pontosComputador;
  document.getElementById("pontosEmpate").innerHTML = pontosEmpate;
}

function atualizarHistorico() {
  const lista = document.getElementById("listaHistorico");

  if (historico.length === 0) {
    lista.innerHTML = "<p>Nenhuma rodada ainda.</p>";
  } else {
    lista.innerHTML = "";
    for (let i = 0; i < historico.length; i++) {
      lista.innerHTML += "<p>" + historico[i] + "</p>";
    }
  }
}

function batalha(escolhaJogador, escolhaComputador) {

  let resultado = "";

  if (escolhaJogador === escolhaComputador) {

    resultado = "🤝 Empate!";
    pontosEmpate = pontosEmpate + 1;

  } else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
  ) {

    resultado = "✅ Você ganhou!";
    pontosVoce = pontosVoce + 1;

  } else {

    resultado = "❌ Computador ganhou!";
    pontosComputador = pontosComputador + 1;
  }

  return resultado;
}

function jogar(escolhaJogador) {

  if (jogoTerminado === true) {
    return;
  }

  const escolhaComputador = jogadaComputador();

  let emojiJogador = "";

  if (escolhaJogador === "pedra") {
    emojiJogador = "✊";
  }

  if (escolhaJogador === "papel") {
    emojiJogador = "✋";
  }

  if (escolhaJogador === "tesoura") {
    emojiJogador = "✌️";
  }

  let emojiComputador = "";

  if (escolhaComputador === "pedra") {
    emojiComputador = "✊";
  }

  if (escolhaComputador === "papel") {
    emojiComputador = "✋";
  }

  if (escolhaComputador === "tesoura") {
    emojiComputador = "✌️";
  }

  const resultado = batalha(escolhaJogador, escolhaComputador);

  document.getElementById("mensagem").innerHTML =
    emojiJogador + " x " + emojiComputador + " — " + resultado;
}

function zerarJogo() {
  pontosVoce = 0;
  pontosComputador = 0;
  pontosEmpate = 0;
  historico = [];
  jogoTerminado = false;

  atualizarPlacar();
  atualizarHistorico();

  document.getElementById("mensagem").innerHTML = "Faça sua jogada para começar";
}

document.getElementById("pedra").addEventListener("click", function() {
  jogar("pedra");
});

document.getElementById("papel").addEventListener("click", function() {
  jogar("papel");
});

document.getElementById("tesoura").addEventListener("click", function() {
  jogar("tesoura");
});

document.getElementById("zerar").addEventListener("click", function() {
  zerarJogo();
});