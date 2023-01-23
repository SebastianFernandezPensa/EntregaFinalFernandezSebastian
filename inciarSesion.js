const inputNombre = document.getElementById('nombCont')
const formContacto = document.getElementById('contacto')
const inputEmail = document.getElementById('emailCont')
const imputMensaje = document.getElementById('coment')
const inputEnviar = document.getElementById('botonCont')
const expresion = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/

eventos()
function eventos(){
    document.addEventListener('DOMContentLoaded', btnDisabled)

    inputEmail.addEventListener('blur', formularioEnviar)
    imputMensaje.addEventListener('blur', formularioEnviar)
    inputEnviar.addEventListener('blur', formularioEnviar)
    inputNombre.addEventListener('blur', formularioEnviar)

    formContacto.addEventListener('submit', enviarEmail)
}

function btnDisabled(){
    inputEnviar.disabled = true
}

function formularioEnviar(e){

    if(e.target.value.length > 0){
        const error = document.querySelector('p.error')
        if(error){
            error.remove()
        }
        e.target.classList.remove('invalido')
        e.target.classList.add('valido')
    } else {
        e.target.classList.remove('valido')
        e.target.classList.add('invalido')

        mensajeError('Todos los campos son obligatorios')
    }

    if(e.target.type === 'email'){
        if(expresion.test(e.target.value)){
            const error = document.querySelector('p.error')
            if(error){
                error.remove()
            }
            e.target.classList.remove('invalido')
            e.target.classList.add('valido')
        }else{
            e.target.classList.remove('valido')
            e.target.classList.add('invalido')
            mensajeError('Email no vaildo')
        }
    }
    if(expresion.test(inputEmail.value) !== '' && imputMensaje.value !== '' && inputNombre.value !== '' ){
        inputEnviar.disabled = false
    }
}

function mensajeError(mensaje){
    const errorMensaje = document.createElement('p')
    errorMensaje.textContent=mensaje
    errorMensaje.classList.add('mensajeInvalido','error')

    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        formContacto.appendChild(errorMensaje)
    }
}
 
function enviarEmail(e){
    e.preventDefault()
}

