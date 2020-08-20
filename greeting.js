const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS="currentUser";
const SOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const curretValue = input.value;
    paintGreeting(curretValue);
    saveName(curretValue);

}

function askForName(){
    form.classList.add(SOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    //form 을 지우고 나에게 greeting을 보여주고 내가 보낸 text를 넣을 거임.
    form.classList.remove(SOWING_CN);
    greeting.classList.add(SOWING_CN);
    greeting.innerText = `Hello ${text}`;

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser===null){
        askForName();

    }
    else{
        paintGreeting(currentUser);

    }
}

function init(){
    loadName();

}

init();