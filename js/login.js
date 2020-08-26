const loginForm = document.querySelector(".login-box");
const loginId = document.querySelector(".login-box__id");
const loginPw = document.querySelector(".login-box__pw");
const loginBtn = document.querySelector(".login-box__login-btn");

const parseInfo = JSON.parse(localStorage.getItem("account"));

function initId() {
  loginId.classList.remove("login-box__alert");
  loginId.value = "";
}

function initPw() {
  loginPw.classList.remove("login-box__alert");
  loginPw.value = "";
}

function checkInfo() {
  const ID = loginId.value;
  const PW = loginPw.value;
  if (ID != parseInfo.id) {
    loginId.classList.add("login-box__alert");
    loginId.value = "아이디를 확인해주세요.";
  }
  if (PW != parseInfo.pw) {
    loginPw.classList.add("login-box__alert");
    loginPw.value = "비밀번호를 확인해주세요.";
  } else {
    location.href = "login_after.html";
  }
  loginId.addEventListener("click", initId);
  loginPw.addEventListener("click", initPw);
}

function handleSubmit(evt) {
  evt.preventDefault();
  checkInfo();
}

function init() {
  loginForm.addEventListener("submit", handleSubmit);
}

init();
