//inicio del contador a 0
let contador = 0;

//modificaciones de cada arreglo
const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton');

//funcion de cada boton
botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    //para ir en decremento contando los valores negavitos
    if(estilos.contains('disminuir')) {
      contador--;
    }

    //para ir en aumento
    else if(estilos.contains('aumentar')) {
      contador++;
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;

      // vamos a cambiar los colores 

      if(contador > 0) {
        //color verde para representar a los positivos
        valor.style.color = '#05ff16';
      }
      else{
        //blanco para el neutral o 0
        valor.style.color = '#ffffff';
      }
      if(contador < 0) {
        //rojo para los negativos
        valor.style.color = '#ba215a';
      }
  })
})