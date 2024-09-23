const form = document.getElementById("form-activity");
const nome = [];
const tel = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaContato();
  atualizaAgenda();
});

function adicionaContato() {
  const inputName = document.getElementById("nome-contato");
  const inputTel = document.getElementById("telefone-contato");

  nome.push(inputName.value);
  tel.push(inputTel.value);

  let linha = "<tr>";
  linha += `<td>${inputName.value}</td>`;
  linha += `<td>${inputTel.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linha;

  inputName.value = "";
  inputTel.value = "";
}

function atualizaAgenda() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
