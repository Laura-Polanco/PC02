const cursos = {
    dw: {
        titulo: "Curso de Desarrollo Web",
        descripcion: "El curso de desarrollo web es un programa educativo diseñado para enseñar las habilidades fundamentales necesarias para  construir sitios web interactivos y funcionales."
    },
    arqempr: {
        titulo: "Curso de Ingenería de Software",
        descripcion: "El curso de Ingeniería de Software enseña a diseñar, desarrollar y mantener software de calidad. Cubre temas como gestión de proyectos, diseño de arquitectura, programación y metodologías ágiles. Prepara a los estudiantes para resolver problemas en la industria del software."
    },
};



function mostrarDescripcion(btn) {
    const tituloCurso = btn.parentElement.querySelector('.card-title').textContent.trim();

    const curso = Object.values(cursos).find(curso => curso.titulo === tituloCurso);

    if (curso) {
        Swal.fire({
            title: `Descripción Del ${curso.titulo}`,
            text: curso.descripcion,
            icon: 'info',
            confirmButtonText: 'OK'
        })}
    };