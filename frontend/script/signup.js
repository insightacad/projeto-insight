const inputs = document.querySelectorAll(".input")
const loginBtn = document.querySelector("#login-button")

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span-active")
}

const handleFocusOut = ({ target }) => {
    if (target.value === "") {
        const span = target.previousElementSibling;
        span.classList.remove("span-active")
    }
}

// console.log(loginBtn.removeAttribute('disabled'))

const [nickname, username, password, secondpassword] = inputs;

const handleLogin = () => {

    if (username.value && password.value.length >=8) {
            loginBtn.removeAttribute('disabled')
    } else {
        loginBtn.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener("focus", handleFocus))
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut))
inputs.forEach((input) => input.addEventListener("input", handleLogin))

// Calling API
async function SubmitInfos() {
    try {

        // Json Object
        const infostoapi = {
            method: "POST",
            body: JSON.stringify({nickname: nickname.value, username: username.value, password: password.value}),
        };
        if(password.value == secondpassword.value)
        {
            // HTTP Request
            const response = await fetch("/api/signup",infostoapi)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            // Error debugging
            const json = await response.json();
            console.log(json);
        }
        else
        {
            alert("senha não confere.")
        }
      } catch (error) {
        console.error(error.message);
      }
}