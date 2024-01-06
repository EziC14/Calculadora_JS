const pantalla = document.querySelector(".valor-pantalla");
const resultado = document.querySelector(".valor-resultado");
const botones = document.querySelectorAll(".numero");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "borrarTodo") {
            pantalla.textContent = "0";
            resultado.textContent = "";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!" || pantalla.textContent === "Infinity") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            resultado.textContent = "";
            return;
        }

        if (boton.id === "igual") {
            try {
                let expresion = pantalla.textContent.replace(/x/g, '*');
                resultado.textContent = eval(expresion);
            } catch {
                resultado.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || resultado.textContent === "Error!" || resultado.textContent === "Infinity") {
            resultado.textContent = '';
            if (botonApretado === ".") {
                pantalla.textContent = "0" + botonApretado;
            } else {
                pantalla.textContent = botonApretado;
            }
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
