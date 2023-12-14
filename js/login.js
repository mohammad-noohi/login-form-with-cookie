const $ = document;
const userNameInput = $.querySelector(".username-inp");
const passwordInput = $.querySelector(".password-inp");
const rememberInput = $.querySelector("#remember-me-input");
const loginBtn = $.querySelector(".login-btn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // save user information in cookie when user confirm

  let userNameValue = userNameInput.value.trim().toLowerCase();
  let passwordValue = passwordInput.value.trim().toLowerCase();
  let isRememberChekced = rememberInput.checked;

  if (userNameValue && passwordValue && isRememberChekced) {
    // create userInfo object
    let userInfo = {
      name: userNameValue,
      password: passwordValue,
    };

    let now = new Date();
    let expireTime = new Date(now.setDate(now.getDate() + 15)).toUTCString();

    // set cookie
    document.cookie = `userInfo=${JSON.stringify(
      userInfo
    )};path=/;expires=${expireTime}`;
  }

  clearInputs()
});

window.addEventListener("load", (e) => {
  if (document.cookie) {
    let equalAssignIndex = document.cookie.indexOf("=");
    let userLoginData = JSON.parse(
      document.cookie.substring(equalAssignIndex + 1)
    );
    userNameInput.value = userLoginData.name;
    passwordInput.value = userLoginData.password;
    rememberInput.checked = true;
  }
});

function clearInputs() {
  userNameInput.value = "";
  passwordInput.value = "";
  rememberInput.checked = false;
}
