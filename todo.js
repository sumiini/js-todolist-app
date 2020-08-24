const todoform = document.querySelector('.js-toDoForm');
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDosArr = [];

//forEach 랑 filter는 list에 있는 모든 item을 위한 함수를 실행시키는 것

function deleteToDo(event){
    const btn = event.target.parentNode;
    todolist.removeChild(btn);
    const cleanToDos= toDosArr.filter(function(toDo){
        return toDo.id !== parseInt(btn.id);
    });
    //filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array만든다.
    toDosArr=cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDosArr));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText= "❌";
    const span = document.createElement("span");
    const liId = toDosArr.length+1;
    delBtn.addEventListener("click",deleteToDo);

    span.innerText =text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = liId;
    
    todolist.appendChild(li);

    const toDoObj = {
        text : text, // 여기서 text는 내가 할일을 적은 그 text임.
        id : toDosArr.length+1
    };
    toDosArr.push(toDoObj);
    saveToDos();

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoinput.value;
    paintToDo(currentValue);
    todoinput.value="";

}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // toDos를 가져 온 뒤 이를 자바스크립트 object로 변환해줄 것이고, 각각에 대해서 paintToDo라는 function이 실행
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
   
}

function init(){
    loadToDos();
    todoform.addEventListener("submit",handleSubmit);
}

init(); 
