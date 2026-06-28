/* ==========================
   MODO OSCURO
========================== */

const boton = document.getElementById("btn-modo");

if (boton) {
    boton.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
    });
}

/* ==========================
   VALIDACIÓN DEL NOMBRE
========================== */

const nombre = document.getElementById("nombreApellido");
const error = document.getElementById("errorNombre");

function validarNombre() {

    const valor = nombre.value.trim();
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    error.textContent = "";
    nombre.style.border = "";

    if (valor === "") {
        error.textContent = "Debe ingresar el nombre y apellido.";
        nombre.style.border = "2px solid red";
        return false;
    }

    if (!regex.test(valor)) {
        error.textContent = "No se permiten números.";
        nombre.style.border = "2px solid red";
        return false;
    }

    if (valor.split(/\s+/).length < 2) {
        error.textContent = "Debe ingresar nombre y apellido.";
        nombre.style.border = "2px solid red";
        return false;
    }

    return true;
}

nombre.addEventListener("input", validarNombre);
nombre.addEventListener("blur", validarNombre);

/* ==========================
   VALIDACIÓN DEL EMAIL
========================== */

const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");

function validarEmail() {

    const patron = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|live\.com)$/;

    errorEmail.textContent = "";
    email.style.border = "";

    if (email.value.trim() === "") {
        errorEmail.textContent = "Debe ingresar un correo electrónico.";
        email.style.border = "2px solid red";
        return false;
    }

    if (!patron.test(email.value.trim())) {
        errorEmail.textContent = "Solo se permiten correos Gmail, Hotmail, Outlook o Live.";
        email.style.border = "2px solid red";
        return false;
    }

    return true;
}

email.addEventListener("input", validarEmail);
email.addEventListener("blur", validarEmail);

/* ==========================
   ENVÍO DEL FORMULARIO
========================== */

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    if (validarNombre() && validarEmail()) {

        alert("Gracias por ayudar a los gatos 🐾");

        formulario.reset();

        setTimeout(function () {
            window.location.href = "programas.html";
        }, 5000);

    }

});