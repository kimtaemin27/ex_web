// const loginForm = document.getElementById("login-form");
//     // 쿼리 셀렉터 를 사용할 시 id 임을 명확히 표시
//     // const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 동일한데 더 짧게

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

    // 일반적으로 String 만 포함되어있는 변수는 대문자로 작성
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginBtnSubmit(event){
    // 새로고침 막기
    event.preventDefault();
    // 기존 폼 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // 아이디 변수에 저장
    const username = loginInput.value;
    // localStorage 에 username 저장 (key , value)
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);


    // const logId = loginInput.value;
    // console.log(logId);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", loginBtnSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginBtnSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}