function esPinValido(pin) {
  if (pin == null) return false

  let t = String(pin)
  if (t.length !== 4 && t.length !== 6) return false
  if (!/^\d+$/.test(t)) return false
  if (/^(\d)\1+$/.test(t)) return false 

  return true
}

export{
    esPinValido
}