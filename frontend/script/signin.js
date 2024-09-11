const inputs = document.querySelectorAll(".input"); 
const loginBtn = document.querySelector("#login-button");

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span-active");
}

const handleFocusOut = ({ target }) => {
    if (target.value === "") {
        const span = target.previousElementSibling;
        span.classList.remove("span-active");
    }
}

const handleLogin = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.setAttribute('disabled', '');
    }
}

const submitInfos = async () => {
    const [username, password] = inputs;

    try {
        // Objeto JSON
        const infostoapi = {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Definir o tipo de conteúdo
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            }),
        };

        // Requisição HTTP
        const response = await fetch("/api/login", infostoapi);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Depuração de erro
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
inputs.forEach((input) => input.addEventListener("input", handleLogin));
loginBtn.addEventListener("click", submitInfos); // Adiciona o evento de clique ao botão
