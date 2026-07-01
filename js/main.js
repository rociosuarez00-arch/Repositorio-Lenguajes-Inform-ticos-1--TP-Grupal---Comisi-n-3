/* ==========================
   MODO OSCURO
========================== */

// Si está guardado como "modo"==="oscuro", se pone la clase "oscuro" en el body
if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("oscuro");
}
// Buscamos el botón en el HTML usando su id ("btn-modo").
const btnModo = document.getElementById("btn-modo");
// Le decimos al botón: "cuando te hagan click, ejecutá esto".
btnModo.addEventListener("click", () => {
  // toggle alterna la clase "oscuro" en el body:
  // si no está, la agrega; si ya está, la saca.
    document.body.classList.toggle("oscuro");
    // Preguntamos si el modo oscuro quedó activado (true o false)
    // para cambiar el texto del botón según corresponda. (En este caso no pongo nada)
    const modoActivo = document.body.classList.contains("oscuro");
    btnModo.textContent = modoActivo ? "" : "";
    // Mantener localmente el modo oscuro
    localStorage.setItem("modo", modoActivo ? "oscuro" : "claro");
});
/* Segundo botón modo oscuro. Para menú mobile */
const btnModoMobile = document.getElementById("btn-modo-mobile");
btnModoMobile.addEventListener("click", () => {
        btnModo.click();
});

/* ==========================
   VALIDACIÓN DEL NOMBRE
========================== */

const nombre = document.getElementById("nombreApellido");
const error = document.getElementById("errorNombre");

if (nombre && error) {

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

}

/* ==========================
   VALIDACIÓN DEL EMAIL
========================== */

const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");

if (email && errorEmail) {
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
}

/* ==========================
   ENVÍO DEL FORMULARIO
========================== */

const formulario = document.getElementById("formulario");
if(formulario){

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
}