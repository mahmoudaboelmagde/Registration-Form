let usernameInput = document.getElementById("usernameInput");
let userEmailInput = document.getElementById("userEmailInput");
let userPasswordInput = document.getElementById("userPasswordInput");
let signupBtn = document.getElementById("signupBtn");
let userInfo;
if (localStorage.getItem("userContianer") == null) {
  userInfo = [];
} else {
  userInfo = localStorage.JSON.parse(getItem("userContianer"));
}

function signUp() {
  userInputsvalidation()
  isExist()

  if (userInputsvalidation() == true && isExist() == false) {
      
    let userDate = {
      name: usernameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    userInfo.push(userDate);
    localStorage.setItem("userContianer", JSON.stringify(userInfo));
    const confirmMsg = document.getElementById("confirmMsg");
    confirmMsg.classList.replace("d-none", "d-block");
    const signin = document.getElementById("signin");
    signin.classList.replace("d-none", "d-block");

  } else {
    const tryAgainMsg = document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-none", "d-block");
  }
}

function userNameValidation() {
  const usernameAlert = document.getElementById("usernameAlert");
  const regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (regex.test(usernameInput.value) == true && usernameInput.value != "") {
    usernameInput.classList.add("is-valid");
    usernameInput.classList.remove("is-invalid");
    usernameAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    usernameInput.classList.add("is-invalid");
    usernameInput.classList.remove("is-valid");
    usernameAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userEmailValidation() {
  const userEmailAlert = document.getElementById("userEmailAlert");
  const regex = /@[a-z]{5,10}(\.com)$/;
  if (regex.test(userEmailInput.value) == true && userEmailInput.value != "") {
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    userEmailAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userEmailInput.classList.add("is-invalid");
    userEmailInput.classList.remove("is-valid");
    userEmailAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function userPasswordValidation() {
  const userPasswordAlert = document.getElementById("userPasswordAlert");
  const regex = /^.{5,15}$/;
  if (
    regex.test(userPasswordInput.value) == true &&
    userPasswordInput.value != ""
  ) {
    userPasswordInput.classList.add("is-valid");
    userPasswordInput.classList.remove("is-invalid");
    userPasswordAlert.classList.replace("d-block", "d-none");
    return true;
  } else {
    userPasswordInput.classList.add("is-invalid");
    userPasswordInput.classList.remove("is-valid");
    userPasswordInput.classList.replace("d-none", "d-block");
    return false;
  }
}

function userInputsvalidation() {
  if (
    userNameValidation() == true &&
    userEmailValidation() == true &&
    userPasswordValidation() == true
  ) {
    return true;
  }
  return false;
}

function isExist() {
  let accountExistMsg = document.getElementById("accountExistMsg");

  for (let i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() ||
      userInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase()
    ) {
      accountExistMsg.classList.replace("d-none", "d-block");
      usernameInput.classList.remove("is-valid");
      userEmailInput.classList.remove("is-valid");
      userPasswordInput.classList.remove("is-valid");

      return true;
    }
  }
  return false;
}
let userNAme = localStorage.getItem("sessionUsers");

function logIn() {
  let loginEmail = document.getElementById("loginEmail");
  let loginPassword = document.getElementById("loginPassword");
  let loginBtn = document.getElementById("loginBtn");
  let wrongMsg = document.getElementById("wrongMsg");

  if (loginEmail.value == "" || loginPassword.value == "") {
    let fillMsg = document.getElementById("fillMsg");
    fillMsg.classList.replace("d-none", "d-block");
    return false;
  }
  for (let i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() &&
      userInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()
    ) {
      localStorage.setItem("sessionUsers", userInfo[i].name);
      loginBtn.setAttribute("hraf", "welcome.html");
    } else {
      wrongMsg.classList.replace("d-none", "d-block");
    }
  }
}

function disPlayWolcomeUser() {
  document.getElementById("username").innerHTML = "Welcome " + userNAme;
}

function logOut() {
  localStorage.removeItem("sessionUsers");
}
