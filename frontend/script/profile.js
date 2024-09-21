async function loadprofile() {
    try {
        const response = await fetch("/dashboard/api"); // Substitua pelo endpoint correto do seu back-end
        if (!response.ok) {
            throw new Error("Erro ao buscar o nome do usuário");
        }
        const userinfo = await response.json();
        
        const id = document.getElementById('id');
        id.textContent = "#"+userinfo.user.id;

        // Modificando o texto do span com id 'nickname-2'
        const nicknameSpan = document.getElementById('nickname-2');
        nicknameSpan.textContent = userinfo.user.nickname;

        // Modificando o texto do span com id 'username'
        const usernameSpan = document.getElementById('username');
        usernameSpan.textContent = userinfo.user.username;

        // Modificando a descrição na div com id 'description'
        const descriptionDiv = document.getElementById('description');
        descriptionDiv.textContent = userinfo.user.description;

        // Modificando o texto do span com id 'courses'
        let resultado = "";
        if (userinfo.courses && Array.isArray(userinfo.courses)) {
            userinfo.courses.forEach((course, index) => {
                resultado += course.course_name; // Adiciona o curso atual à variável resultado
                if (index < userinfo.courses.length - 1) {
                    resultado += ", "; // Adiciona uma vírgula se não for o último elemento
                }
            });
        } else {
            resultado = "Nenhum curso disponível"; // Caso não haja cursos
        }

        const coursesname = document.getElementById('courses');
        coursesname.textContent = resultado;
    } catch (error) {
        console.error("Erro:", error);
        const nicknameHeader = document.getElementById('nickname-1');
        nicknameHeader.textContent = "Visitante"; // Valor padrão em caso de erro
    }
}

window.onload = loadprofile;

