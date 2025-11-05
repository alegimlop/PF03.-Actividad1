 function esPinValido(pin) {
  if (pin == null) {
    return false
  }

  let texto = String(pin)

  if (texto.length === 0) {
    return false
  }

  if (texto.length !== 4 && texto.length !== 6) {
    return false
  }

  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i]
    if (caracter < '0' || caracter > '9') {
      return false
    }
  }

  let primero = texto[0]
  let todosIguales = true

  for (let i = 1; i < texto.length; i++) {
    if (texto[i] !== primero) {
      todosIguales = false
      break
    }
  }

  if (todosIguales) {
    return false
  }

  return true
}
export{
    esPinValido
}