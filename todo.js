const todoform = document.querySelector('.js-toDoForm');
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDosArr = [];

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText= "❌";
    const span = document.createElement("span");
    span.innerText =text;
    li.appendChild(delBtn);
    li.appendChild(span);
    
    todolist.appendChild(li);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoinput.value;
    paintToDo(currentValue);
    todoinput.value="";

}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        
    }
   
}

function init(){
    loadToDos();
    todoform.addEventListener("submit",handleSubmit);
}

init(); 
