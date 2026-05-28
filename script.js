let pontosVoce = 0;
let pontosComputador = 0;
let pontosEmpate = 0;
let historico = [];
let jogoTerminado = false;

function atualizarPlacar() {
  document.getElementById("pontosVoce").innerHTML = pontosVoce;
  document.getElementById("pontosComputador").innerHTML = pontosComputador;
  document.getElementById("pontosEmpate").innerHTML = pontosEmpate;
}

function atualizarHistorico() {
  const lista = document.getElementById("listaHistorico");

  if (historico.length === 0) {
    lista.innerHTML = "<p>Nenhuma rodada ainda.</p>";
    return;
  }

  lista.innerHTML = "";

  for (let i = 0; i < historico.length; i++) {
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = historico[i];
    lista.appendChild(paragrafo);
  }
}

function batalha(escolhaJogador) {

  if (jogoTerminado === true) {
    return;
  }

  const numero = Math.floor(Math.random() * 3);

  let escolhaComputador = "";

  if (numero === 0) {
    escolhaComputador = "pedra";
  } else if (numero === 1) {
    escolhaComputador = "papel";
  } else {
    escolhaComputador = "tesoura";
  }

  let emojiJogador = "";

  if (escolhaJogador === "pedra") {
    emojiJogador = "✊";
  } else if (escolhaJogador === "papel") {
    emojiJogador = "✋";
  } else {
    emojiJogador = "✌️";
  }

  let emojiComputador = "";

  if (escolhaComputador === "pedra") {
    emojiComputador = "✊";
  } else if (escolhaComputador === "papel") {
    emojiComputador = "✋";
  } else {
    emojiComputador = "✌️";
  }

  let resultado = "";

  if (escolhaJogador === escolhaComputador) {

    pontosEmpate = pontosEmpate + 1;
    resultado = "🤝 Empate!";

  } else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
  ) {

    pontosVoce = pontosVoce + 1;
    resultado = "✅ Você ganhou!";

  } else {

    pontosComputador = pontosComputador + 1;
    resultado = "❌ Computador ganhou!";
  }

  document.getElementById("mensagem").innerHTML =
    emojiJogador + " x " + emojiComputador + " — " + resultado;

  historico.unshift(
    emojiJogador +
    " Você x Computador " +
    emojiComputador +
    " — " +
    resultado
  );

  if (historico.length > 10) {
    historico.pop();
  }

  atualizarPlacar();
  atualizarHistorico();

  const modo = Number(document.getElementById("modo").value);

  if (modo == 3) {

    if (pontosVoce >= 2) {
      document.getElementById("mensagem").innerHTML =
        "🏆 Você venceu o jogo!";
      jogoTerminado = true;
    }

    if (pontosComputador >= 2) {
      document.getElementById("mensagem").innerHTML =
        "💻 O computador venceu o jogo!";
      jogoTerminado = true;
    }
  }

  if (modo == 5) {

    if (pontosVoce >= 3) {
      document.getElementById("mensagem").innerHTML =
        "🏆 Você venceu o jogo!";
      jogoTerminado = true;
    }

    if (pontosComputador >= 3) {
      document.getElementById("mensagem").innerHTML =
        "💻 O computador venceu o jogo!";
      jogoTerminado = true;
    }
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

  document.getElementById("mensagem").innerHTML =
    "Faça sua jogada para começar";
}

document.getElementById("pedra").addEventListener("click", function () {
  batalha("pedra");
});

document.getElementById("papel").addEventListener("click", function () {
  batalha("papel");
});

document.getElementById("tesoura").addEventListener("click", function () {
  batalha("tesoura");
});

document.getElementById("zerar").addEventListener("click", function () {
  zerarJogo();
});