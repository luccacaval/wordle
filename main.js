// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];

let boton_recargar = document.getElementById('Boton_Recargar')
boton_recargar.hidden = true
let intentos = 0
let respuesta = document.getElementById('respuesta')
let respuestas = document.getElementById('respuestas')
let indice = Math.trunc(Math.random() * 10)
let correcto = dict[indice]
console.log(correcto)


function ganaste(){
  console.log("ganaste");
  respuesta.hidden = true
  boton_recargar.hidden = false
}
function perdiste(){
  console.log("perdiste");
  respuesta.hidden = true
  boton_recargar.hidden = false
}

function comprobar() {
  let i = 0
  let respuescomp = respuesta.value.toLowerCase();
  let div = document.createElement('div')
  respuestas.append(div)

  // div.classList.add(i)
  console.log(respuescomp);
    for (let c of respuescomp) {
      div.setAttribute('id', i)
      if (c == correcto[i]) {
        let span = document.createElement('span')
        let letra = document.getElementById(i)
        letra.append(span)
        letra.childNodes[i].innerHTML = c
        letra.childNodes[i].classList.add('green')
      } else if (correcto.includes(c)) {
        let span = document.createElement('span')
        let letra = document.getElementById(i)
        letra.append(span)
        letra.childNodes[i].innerHTML = c
        letra.childNodes[i].classList.add('yellow')
      } else {
        let span = document.createElement('span')
        let letra = document.getElementById(i)
        letra.append(span)
        letra.childNodes[i].innerHTML = c
        letra.childNodes[i].classList.add('gray')
      }
      i++
      if (respuescomp === correcto) {
        ganaste()
      }
      if (intentos == 6) {
        perdiste()
      }
    }
  intentos++;
  if (intentos == 6) {
    perdiste()
  }
}
function recargar() {
  location.reload()
}

function verde() {

}
function amarillo() {

}
function gris() {
  console.log("gris");
}
