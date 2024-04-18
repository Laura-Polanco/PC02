const $usuario = $("#usuario");
const $password = $("#password");

const credenciales = [{
    usuario: "profesor",
    pass: "123456"
},
{
    usuario: "alumno",
    pass: "234567"
}, ];


$("#login").on("click", function() {
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    
    let usuarioEncontrado = false;

    for (let i = 0; i < credenciales.length; i++) {
        if (valueUsuario === credenciales[i].usuario) {
            usuarioEncontrado = true;
            if (valuePassword === credenciales[i].pass) {
                localStorage.setItem("tipoUsuario", valueUsuario);
                let dashboardUrl;
                if (valueUsuario === "profesor") {
                    dashboardUrl = "dashboard_profe.html";
                } else if (valueUsuario === "alumno") {
                    dashboardUrl = "dashboard_alu.html";
                }

                if (dashboardUrl) {
                    location.href = dashboardUrl;
                } else {
                    Swal.fire({
                        title: "ERROR",
                        text: "No se pudo determinar la URL de dashboard",
                        icon: "error"
                    });
                }
            } else {
                Swal.fire({
                    title: "ERROR",
                    text: "Contraseña incorrecta",
                    icon: "error"
                });
            }
            break;
        }
    }

    if (!usuarioEncontrado) {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});