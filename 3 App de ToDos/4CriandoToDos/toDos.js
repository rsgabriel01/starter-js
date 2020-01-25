var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'Fazer café ',
    'Estudar Javascript ',
    'Acessar comunidade da Rocketseat '
];

function renderToDos() {
    listElement.innerHTML = '';

    for (const todo of toDos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo + ' ');

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var linkText = document.createTextNode('EXCLUIR');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderToDos();

function addToDo() {
    var todoText = inputElement.value;

    toDos.push(todoText);
    inputElement.value = '';
    renderToDos();
}

buttonElement.onclick = addToDo;