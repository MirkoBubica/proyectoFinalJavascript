const contenedor = document.getElementById("quiz");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado")


const preguntas = [
  {
    pregunta: "1. ¿Como se llama el Jojo de Parte 3?",
    respuestas: {
      A: "Joseph Joestar",
      B: "Jonathan Joestar",
      C: "Jotaro Kujo"
    },
    respuestaCorrecta: "C"
  },
  {
    pregunta: "2. ¿Cual es la habilidad del Stand 'The World'?",
    respuestas: {
      A: "Borrar el espacio",
      B: "Parar el tiempo",
      C: "Controlar el mundo"
    },
    respuestaCorrecta: "B"
  },
  {
    pregunta: "3. ¿Star Platinum es el mismo tipo del Stand que The World?",
    respuestas: {
      A: "Si",
      B: "No",
    },
    respuestaCorrecta: "A"
  },
  {
    pregunta: "4. ¿Que relacion familiar tiene Josuke con Jotaro?",
    respuestas: {
      A: "Hijo",
      B: "Primo",
      C: "Tio/Sobrino"
    },
    respuestaCorrecta: "C"
  },
  {
    pregunta: "5. ¿Giorno Giovanna es el hijo de...?",
    respuestas: {
      A: "Dio Brando",
      B: "Jotaro Kujo",
      C: "Joseph Joestar"
    },
    respuestaCorrecta: "A"
  },
  {
    pregunta: "6. ¿Cual es el Stand de Josuke Higashikata?",
    respuestas: {
      A: "Crazy Diamond",
      B: "Killer Queen",
      C: "Bad Company"
    },
    respuestaCorrecta: "A"
  },
];



function mostrarTest(){
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];
    for(letraRespuesta in preguntaActual.respuestas){
      respuestas.push(
        `<label>
          <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}"></>
          ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
        </label>
        `
      );
    }
    preguntasYrespuestas.push(
      `<div class="cuestion"> ${preguntaActual.pregunta}</div>
      <div class="respuestas"> ${respuestas.join('')}</div>`
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join('');

}

function mostrarResultado(){
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta)=> {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value

    if(respuestaElegida === preguntaActual.respuestaCorrecta){
      respuestasCorrectas ++;
      respuestas[numeroDePregunta].style.color = 'blue';
    }else{
      respuestas[numeroDePregunta].style.color = 'red'
    }
  });

  resultadoTest.innerHTML = 'Respondiste bien ' + respuestasCorrectas + ' preguntas.'
}

botonRes.addEventListener('click', mostrarResultado)


mostrarTest();