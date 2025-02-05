

// CARTA 



$(document).ready(function(){
  // Al cargar la página, ocultamos las cortinas
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  $('.valentines-day').click(function(){
    // Animación de desvanecimiento de los elementos del sobre
    $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
    $('.envelope').fadeOut(800, function() {
      // Ocultar elementos dentro de .valentines-day
      $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
      

      // Hacer visible la carta con una animación ondulante
      $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
      $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
        var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
        $(this).css('transform', 'scale(' + scale + ')');
      }}); // Animación de ondulación
    });
  });
});




// PREGUNTA




const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Te prometo que no te arrepentirás", images:"images/cat-02.gif"},
  {text:"Piénsalo de nuevo", images:"images/cat-03.gif"},
  {text:"Vamos, atrévete a un sí", images:"images/cat-04.gif"},
  {text:"Que el miedo no te detenga", images:"images/cat-05.gif"},
]
const ohyes = {text:"Sabía que aceptarías. <br> Abre la carta.", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Si"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
          
          // Crear el botón en JavaScript
          let boton = document.createElement("button");
          boton.innerHTML = "Abrir Carta"; // Texto del botón

          // Añadir un evento click para redirigir a otro archivo HTML
          boton.addEventListener("click", function() {
              window.location.href = "carta.html"; // Cambiar "otra_pagina.html" por el archivo que desees
          });

          // Agregar el botón al contenedor de la página
          var contenedor = document.getElementById("contenedor");
          contenedor.appendChild(boton);

      }
      if(button.textContent == 'No'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})