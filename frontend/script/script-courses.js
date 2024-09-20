document.addEventListener("DOMContentLoaded", () => {
  const fetchCourses = async () => {
    try {
      const response = await fetch('/dashboard/api/courses'); // Substitua pelo seu endpoint correto
      const data = await response.json();

      if (data.erro) {
        throw new Error(data.mensagem);
      }

      // Selecionar o container onde os cursos serão exibidos
      const coursesList = document.querySelector('.courses-list');

      // Limpar o conteúdo existente (exceto o título)
      coursesList.innerHTML = '<h1>Catálogo de Materiais</h1>';

      // Iterar sobre os cursos e criar elementos para exibi-los
      data.courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        courseCard.innerHTML = `
          <img
            src="https://destinopoa.com.br/wp-content/uploads/2024/03/Captura-de-tela-2024-03-26-155029-1024x303.jpg"
            alt="${course.name} Thumbnail"
          />
          <div class="course-info">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
<<<<<<< HEAD
            <a href="#" class="btn enroll-btn" data-course-id="${course.id}" data-course-link="${course.link}">Ver Detalhes</a>
=======
            <a href="${course.link}" class="btn">Ver Detalhes</a>
>>>>>>> 3cd5ea284e984cbe7dfe16fd84e9ed06f9499120
          </div>
        `;

        coursesList.appendChild(courseCard);
      });
<<<<<<< HEAD

      // Adicionar evento de clique para os botões de inscrição
      const enrollButtons = document.querySelectorAll('.enroll-btn');
      enrollButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
          event.preventDefault();
	  const courseId = button.getAttribute('data-course-id');
          const courseLink = button.getAttribute('data-course-link'); // Captura o link do curso
   	  await enrollUserInCourse(courseId, courseLink); // Passa o link para a função de inscrição
        });
      });

=======
>>>>>>> 3cd5ea284e984cbe7dfe16fd84e9ed06f9499120
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
    }
  };

<<<<<<< HEAD
  const enrollUserInCourse = async (courseId, courseLink) => {
    try {
        const response = await fetch('/dashboard/api/user/enroll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ course_id: courseId })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Erro ao inscrever-se no curso");
        }

        const data = await response.json();
        alert(data.message); // Exibe a mensagem de sucesso
	// Redirecionar para o link do curso
        window.location.href = courseLink; // Usa o link do curso passado
    } catch (error) {
        console.error("Erro:", error);
        alert("Houve um problema ao se inscrever no curso.");
    }
};


=======
>>>>>>> 3cd5ea284e984cbe7dfe16fd84e9ed06f9499120
  fetchCourses();
});

