let pontosVoce = 0;
let pontosComputador = 0;
let pontosEmpate = 0;
let historico = [];
let jogoTerminado = false;

function jogadaComputador () {
  const opcoes = ["Pedra", "Papel", "Tesoura"];
  const aleatorio = Math.floor(Math.random() * 3);
  return opcoes[aleatorio];
}

function batalha() {
  const computador = jogadaComputador();
  let resultado = ""
  if (jogador === computador) {
    resultado = "Empate!";
    empates = empates + 1;
  } else if (
    (jogador === "pedra"   && computador === "tesoura") ||
    (jogador === "papel"   && computador === "pedra")   ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    resultado = "Voce venceu!";
    vitorias = vitorias + 1;
  } else {
    resultado = "Voce perdeu!";
    derrotas = derrotas + 1;
  }
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

function jogar(escolhaJogador) {

  if (jogoTerminado === true) {
    return;
  }

  const numero = Math.floor(Math.random() * 3);

  let escolhaComputador = "";

  if (numero === 0) {
    escolhaComputador = "pedra";
  }

  if (numero === 1) {
    escolhaComputador = "papel";
  }

  if (numero === 2) {
    escolhaComputador = "tesoura";
  }

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

