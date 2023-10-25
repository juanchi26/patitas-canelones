const costo = document.getElementById("costoCastracion")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")
const subject = document.getElementById("subject")
const enviar = document.getElementById("enviar")
const mail = document.getElementById("mail2")
const botonUp = document.getElementById("boton-up")

document.addEventListener("DOMContentLoaded", () => {
    costo.innerHTML = "650"    // costo de la castracion

    email.addEventListener("input", () => {
        mail.value = email.value
        
    })

    asunto.addEventListener("input", () => {
        subject.value = asunto.value
        console.log(subject)
    })

    window.onscroll = function () {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 100) {
          botonUp.style.transform = "scale(1)";
        } else if (scroll < 100) {
          botonUp.style.transform = "scale(0)";
        }
      }
    
    botonUp.addEventListener("click", scrollUp);

    function scrollUp() {
      let desplScroll = document.documentElement.scrollTop;
      if (desplScroll > 0) {
        window.scrollTo(0, 0)
      }
    } 

})
