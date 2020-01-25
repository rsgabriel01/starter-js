var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderToDos() {
    for (const todo of toDos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderToDos();