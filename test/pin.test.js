import { describe, it, expect } from "vitest"
import { esPinValido } from "../src/pin.js"

describe('validar PIN', () => {

  it('PIN null o undefined', () => {
    expect(esPinValido(null)).toBe(false)
    expect(esPinValido(undefined)).toBe(false)
  })

  it('PIN vacío', () => {
    expect(esPinValido("")).toBe(false)
  })

  it('longitud debe ser 4 o 6', () => {
    expect(esPinValido("123")).toBe(false)
    expect(esPinValido("12345")).toBe(false)
    expect(esPinValido("1234567")).toBe(false)
  })

  it('solo permite dígitos 0-9', () => {
    expect(esPinValido("12a4")).toBe(false)
    expect(esPinValido("12 34")).toBe(false)
  })

  it('no permite todos los dígitos iguales', () => {
    expect(esPinValido("1111")).toBe(false)
    expect(esPinValido("000000")).toBe(false)
  })

  it('PIN válido', () => {
    expect(esPinValido("1234")).toBe(true)
    expect(esPinValido("987654")).toBe(true)
  })

})