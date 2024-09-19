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
            <a href="${course.link}" class="btn">Ver Detalhes</a>
          </div>
        `;

        coursesList.appendChild(courseCard);
      });
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
    }
  };

  fetchCourses();
});

