function abrirAba(nome) {
  const abas = document.querySelectorAll('.aba');
  abas.forEach(aba => aba.classList.remove('ativa'));

  const abaAtiva = document.getElementById(nome);
  if (abaAtiva) {
    abaAtiva.classList.add('ativa');
  }
}

function enviar() {
  alert("Resposta enviada!");
}
