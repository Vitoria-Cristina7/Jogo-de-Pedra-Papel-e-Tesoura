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