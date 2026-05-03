function abrirAba(nome) {
  let abas = document.querySelectorAll('.aba');
  abas.forEach(aba => aba.classList.remove('ativa'));

  document.getElementById(nome).classList.add('ativa');
}

function enviar() {
  alert("Resposta enviada com sucesso!");
}
