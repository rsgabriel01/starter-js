var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var toDos = JSON.parse(localStorage.getItem("list_toDos")) || [];

function renderToDos() {
  listElement.innerHTML = "";

  for (const todo of toDos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo + " ");

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    var pos = toDos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteToDo(" + pos + ")");

    var linkText = document.createTextNode("EXCLUIR");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderToDos();

function addToDo() {
  var todoText = inputElement.value;

  if (todoText == "") {
    alert("O campo digitavel não pode ser vázio!");
  } else if (todoText.length == 0) {
    alert("Há apenas espaços vazios no campo digitavel, por favor verifique!");
  } else if (todoText.trim() != todoText) {
    alert(
      "Não é possivel preencher o campo com espaços vazios no inicio ou fim do que foi digitado, por favor verifique!"
    );
  } else {
    toDos.push(todoText);
    inputElement.value = "";
    renderToDos();
    saveToStorage();
  }
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {
  toDos.splice(pos, 1);
  renderToDos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_toDos", JSON.stringify(toDos));
}
