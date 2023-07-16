//funciones
function agregar(valor) {
    //se obtiene el valor del boton pulsado y se imprime en pantalla
    document.getElementById('pantalla').value += valor
}

//elimina el contenido de la pantalla
function borrar() {
    document.getElementById('pantalla').value = ''
}

//calcula la operacion matematica
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}

//elimina el ultimo digito ingresado
function borrarUltimoDigito() {
    const valorPantalla = document.getElementById('pantalla').value
    const nuevoValor = valorPantalla.slice(0, valorPantalla.length-1)
    document.getElementById('pantalla').value = nuevoValor
    
}