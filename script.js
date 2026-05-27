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