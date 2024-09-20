
async function loadprofile() {
    // Modificando o texto do h2 com id 'nickname-1

        try {
          const response = await fetch("/dashboard/api"); // Substitua pelo endpoint correto do seu back-end
          if (!response.ok) {
            throw new Error("Erro ao buscar o nome do usuário");
          }
          const userinfo = await response.json();
          return userinfo;
        } catch (error) {
          console.error("Erro:", error);
          return "Visitante"; // Valor padrão em caso de erro
        }

    const nicknameHeader = document.getElementById('nickname-1');
    nicknameHeader.textContent = userinfo.user.nickname

    // Modificando o texto do span com id 'nickname-2'
    const nicknameSpan = document.getElementById('nickname-2');
    nicknameSpan.textContent = userinfo.user.nickname

    // Modificando o texto do span com id 'username'
    const usernameSpan = document.getElementById('username');
    usernameSpan.textContent = userinfo.user.username

    // Modificando o texto do span com id 'courses'

    // Modificando a descrição na class 'description'
    const descriptionDiv = document.getElementById('description');
    descriptionDiv.textContent = userinfo.user.description


    userinfo.course.forEach((course, index) => {
        resultado += course.name; // Adiciona a fruta atual à variável resultado
        if (index < userinfo.course.length - 1) {
            resultado += ", "; // Adiciona uma vírgula se não for o último elemento
        }
    })

    const coursesname = document.getElementbyId('courses');
    coursesname.textContent = resultado
    
}

window.onload = loadprofile;