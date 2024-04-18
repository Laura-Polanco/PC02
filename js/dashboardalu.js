document.addEventListener("DOMContentLoaded", function() {
    const tipoUsuario = localStorage.getItem("tipoUsuario");

    const datosAlumnos = [
        {
            "nombre": "Laura Jacqueline",
            "apellido": "Polanco Santos",
            "telefono": "000 000 000",
            "direccion": "Lima, Perú"
        },
    ];

    function mostrarDatosAlumno() {
        let indiceAlumno;
        if (tipoUsuario === "alumno") {
            indiceAlumno = 0;
        } 
        const alumno = datosAlumnos[indiceAlumno];

        document.getElementById("nombreAlumno").innerText = alumno.nombre;
        document.getElementById("apellidoAlumno").innerText = alumno.apellido;
        document.getElementById("telefonoAlumno").innerText = alumno.telefono;
        document.getElementById("direccionAlumno").innerText = alumno.direccion;
    }

    mostrarDatosAlumno();
});

const encuestaForm = document.getElementById("encuestaForm");
encuestaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(encuestaForm);
    const profesorFavorito = formData.get("profesorFavorito");

    Swal.fire({
        title: "¡Encuesta Enviada!",
        icon: "success"
    });
});

