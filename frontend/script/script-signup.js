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
    const [nickname,username,password,password2] = inputs;
    if (password.value.length >= 8) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    }
}

const submitInfos = async () => {
    const [nickname,username,password,password2] = inputs;

    try {
        // Objeto JSON
        const infostoapi = {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Definir o tipo de conteúdo
            },
            body: JSON.stringify({
                username: username.value,
                nickname: nickname.value,
                password: password.value
            }),
        };

    if(password.value == password2.value)
    {
        // Requisição HTTP
        const response = await fetch("/api/signup", infostoapi);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        // Depuração de erro
        const json = await response.json();
        if (!json.erro) {
            // Login bem-sucedido
            console.log(json.mensagem); // 'cadastro realizado com sucesso!'
            // Redireciona para a pagina de login
            window.location.href = '/signin';
        } else {
            // Exibir a mensagem de erro
            console.error(json.mensagem);
        }
    }
    else
    {
        alert("As senhas não coincidem.")
    }
    } catch (error) {
        console.error(error.message);
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
button.addEventListener("click", submitInfos); // Adiciona o evento de clique ao botão 
