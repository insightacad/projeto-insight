const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [nickname, password] = inputs;

    if (nickname.value.length >= 3 && password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
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
        const response = await fetch("/api/signin", infostoapi);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        // Depuração de erro
        const json = await response.json();
        if (!json.erro) {
            // Login bem-sucedido
            console.log(json.mensagem); // 'Login realizado com sucesso!'
            // Armazenar o token em localStorage
            localStorage.setItem('authToken', json.token);
            // Redireciona para a pagina da dashboard
            window.location.href = '/dashboard'
        } else {
            // Exibir a mensagem de erro
            console.error(json.mensagem);
        }
    } catch (error) {
        console.error(error.message);
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
button.addEventListener("click", submitInfos); // Adiciona o evento de clique ao botão 
