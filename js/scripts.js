//Seleccionar elementos

//getElementById
//Selecciona elementos solo por id
const heading2 = document.getElementById('heading');
console.log(heading2)


//querySelector
//Seleccionar máximo un elemento
const heading = document.querySelector('.header_texto h2');
heading.textContent = 'Blog de café con consejos y cursos, desde JavaScript';
heading.classList.add('nueva_clase');



//QuerySelectorAll
//Selecciona todos los elementos que cumplan con el selector
const enlace = document.querySelectorAll('.navegacion a');
console.log(enlace);

for(let i = 0; i < enlace.length; i++){
    console.log(enlace[i]);
}

//Generar codigo HTML con JavaScript
    //Crear el enlace
        const nuevo_enlace = document.createElement('A');
    //Agregarle una clase
        nuevo_enlace.classList.add('navegacion_enlace');
    //Agregarle el href
        nuevo_enlace.href = 'nuevo_enlace.html';
    //Agregar el contenido
        nuevo_enlace.textContent = 'Un nuevo enlace';
    //Agregarlo al documento
        const navegacion = document.querySelector('.navegacion');
        navegacion.appendChild(nuevo_enlace);

    console.log(nuevo_enlace.outerHTML);


//Eventos en JavaScript
function imprimir(){
    console.log(8);
}

console.log(1);

window.addEventListener('load', function(){ //Espera que se cargue el JS, los archivos y que el HTML este listo
    console.log(2);
});

window.addEventListener('load', imprimir);

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //Espera que se cargue el HTMl pero no CSS o imagenes
    console.log(4);
});

console.log(5);

//Seleccionar elementos y asociarles un evento
/*
const btnEnviar = document.querySelector('.boton_primario');
btnEnviar.addEventListener('click', function(evento){
    evento.preventDefault();
    console.log('Enviando');
});
*/

//Eventos de los inputs y textarea
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leer);
email.addEventListener('input', leer);
mensaje.addEventListener('input', leer);

//Evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //Validar el formulario
    const {nombre, email, mensaje} = datos;
    
    if (nombre === '' || email === '' || mensaje === ''){
        mostraralerta('Todos los datos son obligatorios');
        return;
    }else{
        mostraralerta('Formulario enviado con exito!');
    }
    //Enviar el formulario
});

function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(evento.target.value);
    console.log(datos);
}

function mostraralerta(dato){
    alert(dato);
}