const ACCOUNT = "account";

function saveInfo() {
  const adminInfo = {
    id: "admin",
    pw: 1290,
  };
  localStorage.setItem(ACCOUNT, JSON.stringify(adminInfo));
}

function init() {
  saveInfo();
}

init();
