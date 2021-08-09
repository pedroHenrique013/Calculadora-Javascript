function insert(num) {
  let numero = document.getElementById('operation').innerHTML;
  document.getElementById('operation').innerHTML = numero + num;
}

function clean() {
  document.getElementById('operation').innerHTML = "";
}

function back() {
  let resultado = document.getElementById('operation').innerHTML;
  document.getElementById('operation').innerHTML = resultado.substring(0, resultado.length -1)

}

function calcular() {
  let total = document.getElementById('operation').innerHTML;
  document.getElementById('operation').innerHTML = eval(total)
  
}

